  // Character counter for message
  const messageField = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  messageField.addEventListener('input', function () {
      charCount.textContent = this.value.length;
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const submittingButton = document.getElementById('submittingButton');
  const confirmationModal = document.getElementById('confirmationModal');
  const modalClose = document.getElementById('modalClose');
  const modalCloseButton = document.getElementById('modalCloseButton');

  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate form
      if (!this.checkValidity()) {
          this.reportValidity();
          return;
      }

      // Show loading state
      submitButton.style.display = 'none';
      submittingButton.style.display = 'inline-block';

      // Simulate form submission
      setTimeout(function () {
          // Hide loading state
          submitButton.style.display = 'inline-block';
          submittingButton.style.display = 'none';

          // Show confirmation modal
          confirmationModal.classList.add('show');

          // Reset form
          contactForm.reset();
          charCount.textContent = '0';
      }, 1500);
  });

  // Close modal
  modalClose.addEventListener('click', function () {
      confirmationModal.classList.remove('show');
  });

  modalCloseButton.addEventListener('click', function () {
      confirmationModal.classList.remove('show');
  });

  // Close modal when clicking outside
  confirmationModal.addEventListener('click', function (e) {
      if (e.target === confirmationModal) {
          confirmationModal.classList.remove('show');
      }
  });