// const axios = require('axios')
// import axios from "axios";

// document.cookie = "username='John Doe';"
// var cookiename = document.cookie;
// console.log(cookiename)

const markups = {
  login: `
  <div class="d-flex justify-content-center h-100 login">
  <div class="card">
      <div class="card-header">
          <h3>Login</h3>
          <div class="d-flex justify-content-end social_icon">
              <span><i class="fab fa-github-square"></i></span>
              <span><i class="fab fa-google-plus-square"></i></span>
          </div>
      </div>
      <div class="card-body">
          <form class='loginform'>
              <div class="input-group form-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="email" class="form-control" placeholder="email">
              </div>
              <div class="input-group form-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password" class="form-control" name="password" placeholder="password">
              </div>
              <div class="form-group">
                  <input type="submit" value="Login" class="btn float-right login_btn">
              </div>
          </form>
      </div>
      <div class="card-footer">
          <div class="d-flex justify-content-center links">
              Don't have an account?<a href="#register">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
          </div>
      </div>
  </div>
</div>
  `,

  register: `
  <div class="d-flex justify-content-center h-100 register">
		<div class="card">
			<div class="card-header">
				<h3>Register</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-github-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form class="registerform">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" name="name" class="form-control" placeholder="name">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" name="username" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" name="email" class="form-control" placeholder="email">
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" name="password" placeholder="password">
					</div>
					<div class="form-group">
						<input type="submit" value="Register" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Already have an account?<a href="#login">Sign in</a>
				</div>
			</div>
		</div>
	</div>
`
};

const app = document.querySelector("#app");

const loadMarkUpFromHash = hash => {
  app.innerHTML = null;
  app.insertAdjacentHTML("afterbegin", markups[hash]);
};


if (window.location.hash) {
  loadMarkUpFromHash(window.location.hash.replace("#", ""));
}

window.addEventListener("hashchange", e => {
  const currentHash = window.location.hash.replace("#", "");
  loadMarkUpFromHash(currentHash);
});
const registerForm = document.querySelector(".registerform");
const loginForm = document.querySelector(".loginform");

if (registerForm) {
  registerForm.addEventListener("submit", async e => {
    e.preventDefault();
    console.log('working')
    const { name,username,email, password} = e.target;
    const send = {
        name: name.value,
        username:username.value,
        email:email.value,
        password:password.value
        }
    let response =  await fetch('http://ccoder.herokuapp.com/user/register',
      {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(send)
      })
      .then(function(data){
        return data.json()
      })

      .catch(function(err){
          console.log(err)
      })
      if(response.createUser){
          alert('Registered Successfully, You will recieve email to verify Your Account and login again')
          window.location.hash = "#login";
      }
      else{
          alert('Validation error')
      }      
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async e => {
    e.preventDefault();
    const {email, password} = e.target;
    const send = {
        email:email.value,
        password:password.value
        }
    let response =  await fetch('http://ccoder.herokuapp.com/user/login',
      {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(send)
      })
      .then(function(data){
        return data.json()
      })
      .catch(function(err){
          console.log(err)
      })
      if(response.loginUser){
        window.location.hash = "#dashboard";
    }
    else{
        alert('Invalid credantials')
    }    
});
}

// if (googleLogin) {
//   googleLogin.addEventListener("click", async e => {
//     e.preventDefault();
//     console.log("Clicking");
//   });
// }
