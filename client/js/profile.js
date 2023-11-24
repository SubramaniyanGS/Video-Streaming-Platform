
const selectedIcon = document.getElementById('selected-icon');
    const profileButtons = document.querySelectorAll('.icon-list button');
    const saveBtn = document.getElementById('saveBtn');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    let selectedImage = 'img/account.png';

    selectedIcon.src = selectedImage;

    profileButtons.forEach((button) => {
      button.addEventListener('click', function () {
        selectedImage = this.querySelector('img').src;
        selectedIcon.src = selectedImage;
      });
    });

    saveBtn.addEventListener('click', function () {
      const username = usernameInput.textContent.trim();
      const email = emailInput.textContent.trim();

      // Save the changes to username, email, and profile picture
      // You can store them in localStorage or send them to the server

      // Update the profile picture to the last clicked image
      selectedIcon.src = selectedImage;

      // Redirect to the main.html page
      window.location.href = 'main.html';
    });