document.addEventListener('DOMContentLoaded', function () {

  const emailInput = document.querySelector('input[name="uname"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const emailError = document.getElementById('emailError');
  const loginBtn = document.querySelector('.buttonlogin button');
  const passwordError = document.createElement('span');
  const passwordContainer = document.querySelector('.input-containerey');
  passwordError.style.color = 'red';
  passwordError.style.display = 'none';
  passwordContainer.appendChild(passwordError);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail() {
    if (emailPattern.test(emailInput.value)) {
      emailError.style.display = 'none';
      return true;
    } else {
      emailError.style.display = 'block';
      emailError.textContent = 'Invalid email address';
      return false;
    }
  }

  function validatePassword() {
    if (passwordInput.value.length >= 6) {
      passwordError.style.display = 'none';
      return true;
    } else {
      passwordError.style.display = 'block';
      passwordError.textContent = 'Password must be at least 6 characters';
      return false;
    }
  }

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      
      localStorage.setItem('email', emailInput.value);
      localStorage.setItem('password', passwordInput.value);
      window.location.href = 'newPage.html';
      alert('login successfully.');
    } else {
      alert('Please fix the errors before logging in.');
    }
  });
});

