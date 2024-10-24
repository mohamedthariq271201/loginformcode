document.addEventListener('DOMContentLoaded', function () {
  
  
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const displayArea = document.getElementById('displayInfo');

    if (email && password) {
      displayArea.innerHTML = `<p>Email: ${email}</p><p>Password: ${password}</p>`;
    } else {
      displayArea.innerHTML = `<p>No login data available.</p>`;
    }
  });
  
  