// script.js

function addBet(match, odds) {
    const slipContent = document.getElementById('slip-content');
    const betDiv = document.createElement('div');
    betDiv.classList.add('bet');
    betDiv.textContent = `${match} - Odds: ${odds}`;
    slipContent.appendChild(betDiv);
}

document.getElementById('place-bet').addEventListener('click', () => {
    alert('Bet placed!');
    document.getElementById('slip-content').innerHTML = '<p>No bets placed yet.</p>';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    
    // If validation is successful
    alert("Form submitted successfully");
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form
    let email = document.getElementById('signInEmail').value;
    let password = document.getElementById('signInPassword').value;
    
    // Perform sign-in logic (e.g., authenticate with the server)
    alert("Sign in successful");
});

// Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    if (formData.password !== document.getElementById('confirmPassword').value) {
        alert("Passwords do not match");
        return;
    }

    try {
        let response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.status === 201) {
            alert("Sign up successful");
        } else {
            let errorData = await response.json();
            alert(`Sign up failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

// Sign-In Form Submission
document.getElementById('signInForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let formData = {
        email: document.getElementById('signInEmail').value,
        password: document.getElementById('signInPassword').value
    };

    try {
        let response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Sign in successful");
        } else {
            let errorData = await response.text();
            alert(`Sign in failed: ${errorData}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

// Get modal elements
const signUpModal = document.getElementById('signUpModal');
const signInModal = document.getElementById('signInModal');
const closeSignUp = document.getElementById('closeSignUp');
const closeSignIn = document.getElementById('closeSignIn');

// Get button elements
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');

// Open Sign Up Modal
signUpButton.onclick = () => signUpModal.style.display = 'block';

// Open Sign In Modal
signInButton.onclick = () => signInModal.style.display = 'block';

// Close Modals
closeSignUp.onclick = () => signUpModal.style.display = 'none';
closeSignIn.onclick = () => signInModal.style.display = 'none';

// Close modal when clicking outside of the modal
window.onclick = (event) => {
    if (event.target === signUpModal) signUpModal.style.display = 'none';
    if (event.target === signInModal) signInModal.style.display = 'none';
};

// Check if user is signed in (basic check)
let isSignedIn = false;

function checkAuth() {
    if (!isSignedIn) {
        alert("Please sign in to use the website");
        signInModal.style.display = 'block';
    } else {
        // Hide protected sections
        document.querySelectorAll('.protected').forEach(el => el.style.display = 'none');
    }
}

// Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    if (formData.password !== document.getElementById('confirmPassword').value) {
        alert("Passwords do not match");
        return;
    }

    try {
        let response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.status === 201) {
            alert("Sign up successful");
            signUpModal.style.display = 'none';
        } else {
            let errorData = await response.json();
            alert(`Sign up failed: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

// Sign-In Form Submission
document.getElementById('signInForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let formData = {
        email: document.getElementById('signInEmail').value,
        password: document.getElementById('signInPassword').value
    };

    try {
        let response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Sign in successful");
            signInModal.style.display = 'none';
            isSignedIn = true;
            checkAuth();
        } else {
            let errorData = await response.text();
            alert(`Sign in failed: ${errorData}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

// Initial check
checkAuth();


