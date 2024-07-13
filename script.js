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

