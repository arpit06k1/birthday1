function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiPiece.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        confettiContainer.appendChild(confettiPiece);
    }
}
