// const axios = require('axios')
// import axios from "axios";

// document.cookie = "username='John Doe';"
// var cookiename = document.cookie;
// console.log(cookiename)

const markups = {
    login: `
  <div class="d-flex justify-content-center h-100 login">
  <div class="card custom-card1">
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
		<div class="card custom-card1">
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
`,
    dashboard: `
<div class="row mt-2">
<div class="col-lg-12" style= "height: 100px; background-color: white">
<h1><strong>Dashboard</strong></h1> 
</div>
</div>
<div class="row mt-5">
<div class="col-lg-12 mt-5" style= "height: 50px; background-color: white">
<h5><strong>Your skills</strong></h5> 
</div>
</div>
<div class="row mt-5">
<div class="col-sm-6 ">
  <div class="card">
    <div class="card-body">
    <small>INTERVIEW PREPARATION</small>
      <h2 class="card-title"><strong>Interview Preparation Kit</strong></h2>
      <p class="card-text">Available in Future.</p>
      <a href="#" class="btn btn-warning disabled">Start Practice</a>
    </div>
  </div>
</div>
<div class="col-sm-6 ">
  <div class="card">
    <div class="card-body">
    <small>PROBLEM SOLVING</small>
    <h2 class="card-title"><strong>Problem Solving</strong></h2>
    <p class="card-text">Start Building your skills.</p>
    <a href="#practice" class="btn btn-warning">Start Practice</a>
    </div>
  </div>
</div>
</div>`,

contest: function(name,Description,starttime){
    return `<div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${Description}</p>
      <a href="#" class="btn btn-warning">View Details</a>
      <a href="#" class="btn btn-warning">Signup</a>
    </div>
    <div class="card-footer text-muted">
        Start time:${starttime}
    </div>
    </div>`
},

practice: function(name,maxScore) {
    return `<div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title"><strong>${name}</strong></h5>
      <p class="card-text" style="float:left">MaxScore: ${maxScore}</p>
      <a href="#" class="btn btn-warning" style= "margin-left:900px;margin-top:-120px" >Solve Challenge</a>
    </div>
    </div>`
    
},

// pagination: `
// <nav aria-label="Page navigation example" class="mt-3">
//   <ul class="pagination justify-content-center">
//     <li class="page-item disabled">
//       <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
//     </li>
//     <li class="page-item"><a class="page-link" href="#">1</a></li>
//     <li class="page-item"><a class="page-link" href="#">2</a></li>
//     <li class="page-item"><a class="page-link" href="#">3</a></li>
//     <li class="page-item">
//       <a class="page-link" href="#">Next</a>
//     </li>
//   </ul>
// </nav>
// `
};

const contest =  () => {
    return fetch('http://ccoder.herokuapp.com/dashboard/contests').then(function(data){
        return data.json()
    })
    .then(function(res){
        return res.contests
    })
    .then(function(resp){
        return resp
    })
    .catch(function(err){
        return err
    })
  };

const practice = () => {
    return fetch(`http://ccoder.herokuapp.com/dashboard/challenges?page=${2}`).then(function(data){
        return data.json();
    })
    .then(function(res) {
        return res.Challenges
    })
    .then(function(resp){
        return resp
    })
    .catch(function(err){
        return err
    })
}

const app = document.querySelector("#app");

const loadMarkUpFromHash = hash => {
    app.innerHTML = null;
    app.insertAdjacentHTML("afterbegin", markups[hash]);
};


if (window.location.hash) {
    if(window.location.hash=='#contests'){
        app.innerHTML=null;
        contest().then(function(data){
            
            for(i=0;i<data.length;i++){
                console.log(Date(data[i].startTime))
            if(Date(data[i].startTime)<Date()){
                continue
            }
                app.insertAdjacentHTML("beforeend",markups.contest(data[i].name,data[i].description,data[i].startTime))
            }
        })
      }
      else{
        loadMarkUpFromHash(window.location.hash.replace("#", ""));
    }
}

window.addEventListener("hashchange", e => {
  const currentHash = window.location.hash.replace("#", "");
  if(window.location.hash=='#contests'){
    app.innerHTML=null;
    contest().then(function(data){
        for(i=0;i<data.length;i++){
            console.log(Date(data[i].startTime))
            if(Date(data[i].startTime.toString())<Date()){
                continue
            }
            app.insertAdjacentHTML("beforeend",markups.contest(data[i].name,data[i].description,data[i].startTime))
        }
    })
  }
  else{
    loadMarkUpFromHash(currentHash);  
  }
});

if (window.location.hash) {
    if(window.location.hash=='#practice'){
        app.innerHTML=null;
        practice().then(function(data){
            
            for(i=0;i<data.length;i++){
                app.insertAdjacentHTML("beforeend",markups.practice(data[i].name,data[i].maxScore))
            }
            app.insertAdjacentHTML("beforeend", markups.pagination)
        })
      }
      else{
        loadMarkUpFromHash(window.location.hash.replace("#", ""));
    }
}

window.addEventListener("hashchange", e => {
  const currentHash = window.location.hash.replace("#", "");
  if(window.location.hash=='#practice'){
    app.innerHTML=null;
    practice().then(function(data){
        for(i=0;i<data.length;i++){
            app.insertAdjacentHTML("beforeend",markups.practice(data[i].name,data[i].maxScore))
        }
        app.insertAdjacentHTML("beforeend", markups.pagination)
    })
  }
  else{
    loadMarkUpFromHash(currentHash);  
  }
});



const registerForm = document.querySelector(".registerform");
const loginForm = document.querySelector(".loginform");

if (registerForm) {
    registerForm.addEventListener("submit", async e => {
        e.preventDefault();
        console.log('working')
        const { name, username, email, password } = e.target;
        const send = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value
        }
        let response = await fetch('http://ccoder.herokuapp.com/user/register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(send)
            })
            .then(function (data) {
                return data.json()
            })

            .catch(function (err) {
                console.log(err)
            })
        if (response.createUser) {
            alert('Registered Successfully, You will recieve email to verify Your Account and login again')
            window.location.hash = "#login";
        }
        else {
            alert('Validation error')
        }
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", async e => {
        e.preventDefault();
        const { email, password } = e.target;
        const send = {
            email: email.value,
            password: password.value
        }
        let response = await fetch('http://ccoder.herokuapp.com/user/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(send)
            })
            .then(function (data) {
                return data.json()
            })
            .catch(function (err) {
                console.log(err)
            })
        console.log(response)
        if (response.loginUser) {
            window.location.hash = "#dashboard";
        }
        else if (response.message == 'Please verify your email first') {
            alert('Please verify your email first')
        }
        else {
            alert('Invalid credantials')
        }
    });
}




// contest().then(function(data){
//     console.log(data)
//     for(i=0;i<data.length;i++){

//     }
// })

// if (googleLogin) {
//   googleLogin.addEventListener("click", async e => {
//     e.preventDefault();
//     console.log("Clicking");
//   });
// }
