document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const message = document.getElementById('message');
    message.textContent = '';

    if (!name || !mobile || !email || !password) {
      message.textContent = 'All fields are required.';
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      message.textContent = 'Mobile number must be 10 digits.';
      return;
    }

    if (password.length < 6) {
      message.textContent = 'Password must be at least 6 characters.';
      return;
    }

    // Simulate form submission
    alert('Registration Successful!');
    this.reset();
  });