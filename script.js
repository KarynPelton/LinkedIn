// Ensure the popup is hidden initially after the page loads
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('video-popup').style.display = 'none';
  });
  
  function openVideoPopup(button) {
    // Get the video source from the data attribute
    const videoSrc = button.getAttribute('data-video');
    const videoElement = document.getElementById('popup-video');
  
    // Set the video source and show the popup
    videoElement.src = videoSrc;
    document.getElementById('video-popup').style.display = 'flex';
  
    // Start playing the video
    videoElement.play();
  }
  
  function closeVideoPopup() {
    // Hide the video popup
    const popup = document.getElementById('video-popup');
    const videoElement = document.getElementById('popup-video');
    popup.style.display = 'none';
  
    // Pause the video and clear the source
    videoElement.pause();
    videoElement.src = '';
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Check if the section exists before scrolling
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }