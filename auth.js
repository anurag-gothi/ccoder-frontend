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

    contest: function (name, Description, starttime) {
        return `<div class="card text-center contest" style="margin-top:2%;">
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
      <a href="#solvechallenge" class="btn btn-warning" id="${name}" style= "margin-left:900px;margin-top:-120px" >Solve Challenge</a>
    </div>
    </div>`
    
},

solvechallenge: function(name) {
    return `<h1>${name}</h1>`
}
}

var accessToken = localStorage.getItem('JWTToken')

const contest = async (pageno = 1) => {
    return await fetch(`http://ccoder.herokuapp.com/dashboard/contests/?page=${pageno}`).then(function (data) {
        return data.json()
    })
        .then(function (res) {

            return res
        })
        .catch(function (err) {
            return err
        })
};

const practice = (pageno = 1) => {
    return fetch(`http://ccoder.herokuapp.com/dashboard/challenges/${accessToken}?page=${pageno}`).then(function(data){
        return data.json();
    })
    .then(function(res) {
        return res.Challenges
    })
    .catch(function(err){
        return err
    })
}

const solvechallenge = (challengeName) => {
    return fetch(`http://ccoder.herokuapp.com/dashboard/challenges/${challengeName}/${accessToken}`).then(function(data){
        return data.json()
    }).then(function(res){
        return res
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
    if (window.location.hash.includes('#contests')) {
        var pageno=window.location.href.slice(window.location.href.indexOf('#contests') + 9);
        if(!pageno){
            pageno=1
        }
        app.innerHTML = null;
        contest(pageno).then(function (data) {
            length = data.totalContest
            data = data.contests
            noOfpage = Math.ceil(length / 10)
            for (i = 0; i < data.length; i++) {
                // console.log(Date(data[i].startTime))
                if (Date(data[i].startTime.toString()) < Date()) {
                    continue
                }
                app.insertAdjacentHTML("beforeend", markups.contest(data[i].name, data[i].description, data[i].startTime))
            }
            app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
        <ul class="pagination justify-content-center addcontestpage">
        </ul>
      </nav>`)
            var page = document.querySelector('.addcontestpage')
            for (i = 1; i <= noOfpage; i++) {
                page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#contests${i}">${i}</a></li>`)
            }
        })
    }
    else {
        loadMarkUpFromHash(window.location.hash.replace("#", ""));
    }
}
window.addEventListener("hashchange", e => {
    const currentHash = window.location.hash.replace("#", "");
    if (window.location.hash.includes('#contests')) {
        var pageno=window.location.href.slice(window.location.href.indexOf('#contests') + 9);
        if(!pageno){
            pageno=1
        }
        app.innerHTML = null;
        contest(pageno).then(function (data) {
            length = data.totalContest
            data = data.contests
            noOfpage = Math.ceil(length / 10)
            for (i = 0; i < data.length; i++) {
                // console.log(Date(data[i].startTime))
                if (Date(data[i].startTime.toString()) < Date()) {
                    continue
                }
                app.insertAdjacentHTML("beforeend", markups.contest(data[i].name, data[i].description, data[i].startTime))
            }
            app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
        <ul class="pagination justify-content-center addcontestpage">
        </ul>
      </nav>`)
            var page = document.querySelector('.addcontestpage')
            for (i = 1; i <= noOfpage; i++) {
                page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#contests${i}">${i}</a></li>`)
            }
        })
    }
    else {
        loadMarkUpFromHash(currentHash);
    }
});

if (window.location.hash) {
    if(window.location.hash.includes('#practice')){
        var pageno=window.location.href.slice(window.location.href.indexOf('#practice') + 9);
        if(!pageno){
            pageno=1
        }
        app.innerHTML=null;
        practice(pageno).then(function(data){
            length = 50
            data = data
            noOfpage = Math.ceil(length / 10)
            for(i=0;i<data.length;i++){
                app.insertAdjacentHTML("beforeend",markups.practice(data[i].name,data[i].maxScore))
            }
            app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
            <ul class="pagination justify-content-center addchallengepage">
            </ul>
          </nav>`)
          var page = document.querySelector('.addchallengepage')
            for (i = 1; i <= noOfpage; i++) {
                page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#practice${i}">${i}</a></li>`)
            }
        })
      }
      else{
        loadMarkUpFromHash(window.location.hash.replace("#", ""));
    }
}

window.addEventListener("hashchange", e => {
  const currentHash = window.location.hash.replace("#", "");
  if(window.location.hash.includes('#practice')){
    var pageno=window.location.href.slice(window.location.href.indexOf('#practice') + 9);
    if(!pageno){
        pageno=1
    }
    app.innerHTML=null;
    practice(pageno).then(function(data){
        length = 50
        data = data
        noOfpage = Math.ceil(length / 10)
        for(i=0;i<data.length;i++){
            app.insertAdjacentHTML("beforeend",markups.practice(data[i].name,data[i].maxScore))
        }
        app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
        <ul class="pagination justify-content-center addchallengepage">
        </ul>
      </nav>`)
      var page = document.querySelector('.addchallengepage')
        for (i = 1; i <= noOfpage; i++) {
            page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#practice${i}">${i}</a></li>`)
        }
    })
  }
  else{
    loadMarkUpFromHash(currentHash);  
  }
});

if(window.localStorage.hash) {
    if(window.location.hash = '#solvechallenge') {
        solvechallenge(challenegeName).then(function(data){
            app.insertAdjacentHTML('beforeend', markups.solvechallenge(data.name))
        })
    }
    else {
        loadMarkUpFromHash(window.location.hash.replace("#", ""));
    }
}

window.addEventListener("hashchange", e => {
    const currentHash = window.location.hash.replace("#", "");
    var event = e.target.id
    if(window.location.hash = '#solvechallenge') {
        app.innerHTML=null;
        challenegeName= event
        solvechallenge(challenegeName).then(function(data){
            app.insertAdjacentHTML('beforeend', markups.solvechallenge(data.name))
        })
    }
    else {
        loadMarkUpFromHash(currentHash);  
    }
})

// app.addEventListener("click", e => {
//     var event = e.target.id
//     console.log(event)
// })


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
            .then(function(user){
                localStorage.setItem('JWTToken', user.accessToken)
                //console.log(localStorage.getItem('JWTToken'));
            })
            .catch(function (err) {
                console.log(err)
            })
        //console.log(response)
        if (localStorage.getItem('JWTToken')) {
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
