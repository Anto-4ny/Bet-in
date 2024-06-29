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
