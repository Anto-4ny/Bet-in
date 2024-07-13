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


