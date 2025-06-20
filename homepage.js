

document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "4555";
    const form = document.getElementById("codeForm");
    const input = document.getElementById("text18");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Enter key pressed");
      if (input.value === correctCode) {
        window.location.href = "rotation.html"; // Redirect on success
      } else {
        message.textContent = "Incorrect code. Please try again.";
        message.style.color = "red";
      
      }
    });
  });