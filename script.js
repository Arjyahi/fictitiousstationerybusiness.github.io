window.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');
    var formInputs = contactForm.querySelectorAll('input, textarea');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission
      // Process the form data here (e.g., send it to a server using AJAX)
      alert('Form submitted successfully!');
      formInputs.forEach(function(input) {
        input.value = ''; // Clear the value of each form input
      });
    });
  });
  
  
