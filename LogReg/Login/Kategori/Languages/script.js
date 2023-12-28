const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
      document.addEventListener('DOMContentLoaded', function() {
        // Ambil tombol login
        const loginButton = document.getElementById('login-btn');
      
        // Tambahkan event listener untuk tombol login
        loginButton.addEventListener('click', function(event) {
          event.preventDefault(); // Mencegah perilaku bawaan tombol submit
          window.location.href = '/Sudahlogin/Login/Kategori/Languages/index.html'; // Arahkan ke halaman indexprofile.html di dalam folder Profile
        });
      });
      