document.getElementById('openBoxButton').addEventListener('click', function() {
    document.querySelector('.gift-box-container').classList.add('hidden');
    document.getElementById('surprise').classList.remove('hidden');
    startConfetti(); // Trigger confetti animation
});

document.getElementById('playMusic').addEventListener('click', function() {
    const music = document.getElementById('birthdayMusic');
    if (music.paused) {
        music.play().catch(function(error) {
            console.log("Autoplay issue:", error);
         
        });
    } else {
        music.pause(); // Allows toggling the music on/off
    }
});
