function validateForm() {
    var collegeName = document.getElementById('collegeName').value;
    var collegeID = document.getElementById('collegeID').value;
    var courseName = document.getElementById('courseName').value;
    var password = document.getElementById('password').value;
  
    if (!collegeName || !collegeID || !courseName || !password) {
      showMessage("Please fill in all the fields.");
      return false;
    }
  
    var hashedPassword = sha256(password);
  
    showMessage("Thank you, student, for logging in!");
  
    return false;
  }
  
  function showMessage(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
  }
  