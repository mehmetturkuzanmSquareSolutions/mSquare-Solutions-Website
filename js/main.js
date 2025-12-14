// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form (static)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Contact form submitted");
  alert("Thank you! Your message has been received.");
  this.reset();
});
