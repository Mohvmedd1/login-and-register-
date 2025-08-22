    const loginBox = document.getElementById('loginBox');
    const registerBox = document.getElementById('registerBox');

    function toggleForms() {
      loginBox.classList.toggle("d-none");
      registerBox.classList.toggle("d-none");
      // restart animation
      if (!loginBox.classList.contains("d-none")) {
        loginBox.style.animation = "none";
        setTimeout(()=> loginBox.style.animation = "fadeSlideUp 0.8s ease", 10);
      }
      if (!registerBox.classList.contains("d-none")) {
        registerBox.style.animation = "none";
        setTimeout(()=> registerBox.style.animation = "fadeSlideUp 0.8s ease", 10);
      }
    }

    // Register
    document.getElementById('registerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let email = document.getElementById('regEmail').value;
      let password = document.getElementById('regPassword').value;
      let role = document.getElementById('regRole').value;
      let company = document.getElementById('regCompany').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];

      if (users.find(u => u.email === email)) {
        alert("This account already exists!");
        return;
      }

      users.push({ email, password, role, company });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Account created successfully!");
      toggleForms();
    });

    // Login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let email = document.getElementById('loginEmail').value;
      let password = document.getElementById('loginPassword').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];

      let user = users.find(u => u.email === email && u.password === password);
      if (user) {
        alert("Welcome " + user.role + "!");
      } else {
        alert("Invalid email or password!");
      }
    });