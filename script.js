if (document.getElementById('submitDate')) {
    document.getElementById('submitDate').addEventListener('click', () => {
        const dateInput = document.getElementById('dateInput').value;
        const errorMessage = document.getElementById('errorMessage');

        if (dateInput === '2026-02-14') {
            // Redirect to the main content page
            window.location.href = 'main.html';
        } else {
            errorMessage.style.display = 'block';
        }
    });
}


const envelopeImage = document.querySelector('.envelope-image');
if (envelopeImage) {
    envelopeImage.addEventListener('click', () => {
        const videoContainer = document.querySelector('.video-container');
        const video = document.getElementById('surpriseVideo');
        if (videoContainer && video) {
            document.body.classList.add('push-out'); // Add class to push everything else out
            videoContainer.style.display = 'block';
            video.play();
        }
    });
}

const surpriseVideo = document.getElementById('surpriseVideo');
if (surpriseVideo) {
    surpriseVideo.addEventListener('timeupdate', () => {
        const choiceButtons = document.querySelector('.choice-buttons');
        // Adjust the time (in seconds) below to control when the buttons appear
        if (surpriseVideo.currentTime >= 30 && choiceButtons && choiceButtons.style.opacity === '') {
            choiceButtons.style.display = 'flex';
            setTimeout(() => {
                choiceButtons.style.opacity = '1'; // Fade in the buttons
            }, 90); // Slight delay to ensure display is set before opacity
        }
    });
}

const yesButton = document.getElementById('yesButton');
if (yesButton) {
    yesButton.addEventListener('click', () => {
        alert('YAY! You made the right choice! I hope you enjoyed the virtual surprise! Once you see me next, I\'ll have a more physcial surprise ready for you! Also, I have plans for the 14th for us but wanted to gather your thoughts first before we finalize anything. That way we can both be on the same page! Love you lots!');
    });
}

const noButton = document.getElementById('noButton');
if (noButton) {
    noButton.addEventListener('mouseover', (event) => {
        const randomX = Math.random() * 200 - 100; // Random position within a range
        const randomY = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}
