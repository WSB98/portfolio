 // Get a reference to the form and its elements
 const form = document.getElementById("contact-form");
 const nameInput = document.getElementById("name");
 const emailInput = document.getElementById("email");
 const messageInput = document.getElementById("message");

 // Add an event listener to the form's submit button
 form.addEventListener("submit", function(event) {
   // Build the mailto URL with the subject line including the name entered in the form
   const subject = `Contact Request By:  ${nameInput.value}`;
   const body = `Return Email: ${emailInput.value}\n\n ${messageInput.value}`;
   const mailtoUrl = `mailto:billiamsbaker@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

   // Open the user's email client with the pre-populated email message
   window.location.href = mailtoUrl;

   // Prevent the form from submitting and refreshing the page
   event.preventDefault();
 });