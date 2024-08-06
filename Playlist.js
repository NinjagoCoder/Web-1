document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const shuffleButton = document.getElementById('shuffle');
    const repeatButton = document.getElementById('repeat');
    const seekbar = document.getElementById('seekbar');
    const volumeControl = document.getElementById('volume');
    const trackName = document.getElementById('track-name');

    const tracks = [
        'Audios/song1.mp3',
        'Audios/song2.mp3',
        'Audios/song3.mp3'
    ];

    let currentTrack = 0;
    let isShuffle = false;
    let isRepeat = false;

    function loadTrack(index) {
        audio.src = tracks[index];
        trackName.textContent = `Playing: ${tracks[index].split('/').pop()}`;
    }

    function playTrack() {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    }

    function pauseTrack() {
        audio.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }

    function nextTrack() {
        if (isShuffle) {
            currentTrack = Math.floor(Math.random() * tracks.length);
        } else {
            currentTrack = (currentTrack + 1) % tracks.length;
        }
        loadTrack(currentTrack);
        playTrack();
    }

    function prevTrack() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        playTrack();
    }

    function toggleShuffle() {
        isShuffle = !isShuffle;
        shuffleButton.classList.toggle('active', isShuffle);
    }

    function toggleRepeat() {
        isRepeat = !isRepeat;
        repeatButton.classList.toggle('active', isRepeat);
        audio.loop = isRepeat;
    }

    audio.addEventListener('ended', () => {
        if (isRepeat) {
            playTrack();
        } else {
            nextTrack();
        }
    });

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);
    shuffleButton.addEventListener('click', toggleShuffle);
    repeatButton.addEventListener('click', toggleRepeat);

    seekbar.addEventListener('input', () => {
        audio.currentTime = (seekbar.value / 100) * audio.duration;
    });

    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value / 100;
    });

    audio.addEventListener('timeupdate', () => {
        seekbar.value = (audio.currentTime / audio.duration) * 100;
    });

    
    loadTrack(currentTrack);
});
