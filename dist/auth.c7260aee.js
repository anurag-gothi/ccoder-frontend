// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"auth.js":[function(require,module,exports) {
const markups = {
  login: `
  <div class="d-flex justify-content-center h-100 login">
  <div class="card custom-card1">
      <div class="card-header">
          <h3>Login</h3>
          <div class="d-flex justify-content-end social_icon">
              <span><a href='https://ccoder.herokuapp.com/github'><i class="fab fa-github-square"></a></i></span>
              <span><a href='https://ccoder.herokuapp.com/google'><i class="fab fa-google-plus-square"></i></a></span>
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
                <span><a href='https://ccoder.herokuapp.com/github'><i class="fab fa-github-square"></a></i></span>
                <span><a href='https://ccoder.herokuapp.com/google'><i class="fab fa-google-plus-square"></i></a></span>
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
  contest: function (name, Description, starttime, cond) {
    return `<div class="card text-center" style="margin-top:2%;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${Description}</p>
      <a href="#viewcontest/${encodeURI(name)}" class="btn btn-warning viewcontest">View Details</a>
      <a href="#${cond}/${encodeURI(name)}" class="btn btn-warning signed">${cond}</a>
    </div>
    <div class="card-footer text-muted">
        Start time:${starttime}
    </div>
    </div>`;
  },
  Practice: function (name, maxScore) {
    return `<div class="card mt-3">
    <div class="card-body">
      <h5 class="card-title"><strong>${name}</strong></h5>
      <p class="card-text" style="float:left">MaxScore: ${maxScore}</p>
      <a href="#solvechallenge/${encodeURI(name)}" class="btn btn-warning disab" style= "margin-left:900px;margin-top:-120px" >Solve Challenge</a>
    </div>
    </div>`;
  },
  solvechallenge: function (name, question, constraints, input, output, func_node) {
    return `<h1>${name}</h1>
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Problem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#submissions/${encodeURI(name)}">Submissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#leaderboard/${encodeURI(name)}">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#discussions/${encodeURI(name)}">Discussions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#editorial/${encodeURI(name)}">Editorial</a>
        </li>
      </ul>
    </div>
    <p>${question}</p>
    <p><strong>constraints</strong></p>
    <p>${constraints}</p>
    <p><strong>Sample input</strong></p>
    <p>${input}</p>
    <p><strong>Sample output</strong></p>
    <p>${output}</p>
  </div>
  <form class='submit'>
  <input type='text' name='name' value='${name}'>
  <input type ='text' name='language' value='node'>
  <textarea id="w3mission" name='code'rows="30" cols="100">${func_node}</textarea>
  <input type='submit' value="submit" class="btn login_btn">
  </form>
  `;
  },
  Submissions: function (submissions, name) {
    return `<h1>${name}</h1>
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/${encodeURI(name)}">Problem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Submissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#leaderboard/${encodeURI(name)}">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#discussions/${encodeURI(name)}">Discussions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#editorial/${encodeURI(name)}">Editorial</a>
        </li>
      </ul>
    </div>
    <p>${submissions}</p>
  </div>`;
  },
  Discussions: function (discussions, name) {
    return `<h1>${name}</h1>
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/${encodeURI(name)}">Problem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#submissions/${encodeURI(name)}">Submissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#leaderboard/${encodeURI(name)}">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Discussions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#editorial/${encodeURI(name)}">Editorial</a>
        </li>
      </ul>
    </div>
    <p>${discussions}</p>
  </div>`;
  },
  Editorial: function (editorial, name) {
    return `<h1>${name}</h1>
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/${encodeURI(name)}">Problem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#submissions/${encodeURI(name)}">Submissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#leaderboard/${encodeURI(name)}">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#discussions/${encodeURI(name)}">Discussions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Editorial</a>
        </li>
      </ul>
    </div>
    <p>${editorial}</p>
  </div>`;
  },
  Leaderboard: function (data, name) {
    return `<h1>${name}</h1>
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/${encodeURI(name)}">Problem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#submissions/${encodeURI(name)}">Submissions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Leaderboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#discussions/${encodeURI(name)}">Discussions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#solvechallenge/#editorial/${encodeURI(name)}">Editorial</a>
        </li>
      </ul>
    </div>
    <p>${data}</p>
  </div>`;
  },
  viewcontest: function (contestname = 1, description = 1, rules = 1, prize = 1, organization = 1, startTime = 1) {
    return `<div class="jumbotron ">
    <h1 class="display-4">${contestname}</h1>
    <p class="lead">${description}</p>
    <hr class="my-4">
    <p>Rules:${rules}</p>
    <p>Prize:${prize}</p>
    <p>Organized By:${organization}</p>
    <div class="jumbotron-footer text-muted">
        Start time:${startTime}
    </div>
  </div>`;
  },
  profiles: function (name, username, email, image = 'https://res.cloudinary.com/anuraggothi/image/upload/v1586613104/profile_i03ub1.svg') {
    return ` <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#updateprofile">Update</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#changepassword">Change Password</a>
            </li>
          </ul>
        </div>        
    <div class="custom-card2">
    <img src='${image}' alt="No image" style="width:100%">
    <h5>Name: ${name}</h5>
    <p class="title">CCoder User </p>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>
  </div>
  </div>
  `;
  },
  updateprofiles: function (name, username, email, image = 'https://res.cloudinary.com/anuraggothi/image/upload/v1586613104/profile_i03ub1.svg') {
    return `
    <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#updateprofile">Update</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#changepassword">Change Password</a>
            </li>
          </ul>
        </div>        
    <div class="custom-card3">
            <form class='updateform'>
            <br>
            Email↓↓
            <input class="form-control" name="email" type="text" placeholder="email" value="${email}" readonly>
            <br>
            Name↓↓
            <input class="form-control" name="name" type="text" value='${name}' placeholder="name" required>
            <br>
            Username↓↓
            <input class="form-control" name ="username" type="text" value='${username}' placeholder="username" required>
            <br>
            <input type="submit" value="Update" class="btn login_btn">
            <br>
            <br>
            </form>
            <input type="button" value="Upe" class="updates btn login_btn">
        </div>
        </div>
        `;
  },
  changepassword: `
        <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#updateprofile">Update</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#changepassword">Change Password</a>
            </li>
          </ul>
        </div>        
        <div class="custom-card3">
        <br>
        <form class='changepassword'>
        Current Password↓↓
        <input class="form-control" name="oldpassword" type="password" placeholder="current password">
        <br>
        New password↓↓
        <input class="form-control" name="newpassword" type="text" placeholder="new password" required>
        <br>
        Confirm password↓↓
        <input class="form-control" name ="confirmpassword" type="text"  placeholder="confirm password" required>
        <br>
        <input type="submit" value="Update Password" class="btn btn-warning">
        <br>
        <br>
        </form>
    </div>
    </div>
    `
};
var accessToken = localStorage.getItem('JWTToken');
var id = localStorage.getItem('id');
var username = localStorage.getItem('username');

if (username) {
  a = document.querySelector('.username');
  a.textContent = username;
  a.style.display = 'block';
}

const contest = async (pageno = 1) => {
  return await fetch(`http://ccoder.herokuapp.com/dashboard/contests/${accessToken}?page=${pageno}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res;
  }).catch(function (err) {
    return err;
  });
};

const practices = (pageno = 1) => {
  return fetch(`http://ccoder.herokuapp.com/dashboard/challenges/${accessToken}?page=${pageno}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res.Challenges;
  }).catch(function (err) {
    return err;
  });
};

const ViewContest = async name => {
  return await fetch(`http://ccoder.herokuapp.com/dashboard/contests/${name}/${accessToken}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res.Contest;
  }).catch(function (err) {
    return err;
  });
};

const solvechallenges = name => {
  return fetch(`http://ccoder.herokuapp.com/dashboard/challenges/${name}/${accessToken}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res.Challenge;
  }).catch(function (err) {
    return err;
  });
};

const leaderboard = name => {
  return fetch(`http://ccoder.herokuapp.com/leaderboard/${name}/${accessToken}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res.sub;
  }).catch(function (err) {
    return err;
  });
};

const Profile = async () => {
  return await fetch(`http://ccoder.herokuapp.com/user/me/${accessToken}`).then(function (data) {
    return data.json();
  }).then(function (res) {
    return res;
  }).catch(function (err) {
    return err;
  });
};

const app = document.querySelector("#app");

const loadMarkUpFromHash = hash => {
  app.innerHTML = null;
  app.insertAdjacentHTML("afterbegin", markups[hash]);
};

if (window.location.hash) {
  if (window.location.hash != '#login' || window.location.hash != '#register') {
    if (!accessToken) {
      window.location.hash = '#login';
    }
  }

  if (window.location.hash.includes('#contests')) {
    var pageno = window.location.href.slice(window.location.href.indexOf('#contests') + 9);

    if (!pageno) {
      pageno = 1;
    }

    app.innerHTML = null;
    contest(pageno).then(function (data) {
      length = data.totalContest;
      data = data.contests;
      noOfpage = Math.ceil(length / 10);

      for (i = 0; i < data.length; i++) {
        if (data[i].signups.includes(id)) {
          var cond = 'enter';
        } else {
          var cond = 'signup';
        }

        app.insertAdjacentHTML("beforeend", markups.contest(data[i].name, data[i].description, data[i].startTime, cond));
      }

      app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
        <ul class="pagination justify-content-center addcontestpage">
        </ul>
      </nav>`);
      var page = document.querySelector('.addcontestpage');

      for (i = 1; i <= noOfpage; i++) {
        page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#contests${i}">${i}</a></li>`);
      }
    });
  }

  if (window.location.hash.includes('#practice')) {
    var pageno = window.location.href.slice(window.location.href.indexOf('#practice') + 9);

    if (!pageno) {
      pageno = 1;
    }

    app.innerHTML = null;
    practices(pageno).then(function (data) {
      length = 50;
      data = data;
      noOfpage = Math.ceil(length / 10);

      for (i = 0; i < data.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[i].name, data[i].maxScore));
      }

      app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
            <ul class="pagination justify-content-center addchallengepage">
            </ul>
          </nav>`);
      var page = document.querySelector('.addchallengepage');

      for (i = 1; i <= noOfpage; i++) {
        page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#practice${i}">${i}</a></li>`);
      }
    });
  }

  if (window.location.hash.includes('#viewcontest')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#viewcontest') + 13);
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
    });
  }

  if (window.location.hash.includes('#signup')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#singup') + 9);
    console.log(name);
    let response = fetch(`http://ccoder.herokuapp.com/contest/${name}/signup/${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
      console.log(data[0].startTime);

      for (i = 0; i < data[0].challenges.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[0].challenges[i].name, data[0].challenges[i].maxScore));
      }

      if (new Date(data[0].startTime.slice(0, 19)) > new Date()) {
        console.log('yes');
        document.querySelector('.disab').classList.add("disabled");
      } else if (new Date(data[0].startTime.slice(0, 19)) < new Date()) {
        console.log('no');
        document.querySelector('.disab').classList.remove("disabled");
      }
    });
  }

  if (window.location.hash.includes('#enter')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#enter') + 7);
    console.log(name);
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
      console.log(data[0].startTime);

      for (i = 0; i < data[0].challenges.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[0].challenges[i].name, data[0].challenges[i].maxScore));
      }

      if (new Date(data[0].startTime.slice(0, 19)) > new Date()) {
        console.log('yes');
        document.querySelector('.disab').classList.add("disabled");
      } else if (new Date(data[0].startTime.slice(0, 19)) < new Date()) {
        console.log('no');
        document.querySelector('.disab').classList.remove("disabled");
      }
    });
  }

  if (window.location.hash == '#profile') {
    app.innerHTML = null;
    Profile().then(function (data) {
      console.log(data);
      app.insertAdjacentHTML("beforeend", markups.profiles(data.name, data.username, data.email));
    });
  }

  if (window.location.hash == '#updateprofile') {
    app.innerHTML = null;
    Profile().then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.updateprofiles(data.name, data.username, data.email));
    });
  }

  if (window.location.hash == '#changepassword') {
    app.innerHTML = null;
    app.insertAdjacentHTML("beforeend", markups.changepassword);
  }

  if (window.location.hash.includes('#solvechallenge')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge') + 16);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      console.log(data[0].func_node);
      app.insertAdjacentHTML("beforeend", markups.solvechallenge(data[0].name, data[0].question, data[0].constraints, data[0].input, data[0].output, data[0].func_node));
    });
  }

  if (window.location.hash.includes('#solvechallenge/#submissions')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#submissions') + 29);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Submissions(data[0].submissions, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#discussions')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#discussions') + 29);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Discussions(data[0].discussions, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#editorial')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#editorial') + 27);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Editorial(data[0].editorial, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#leaderboard')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#leaderboard') + 29);
    console.log(name);
    app.innerHTML = null;
    leaderboard(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Leaderboard(data, decodeURI(name)));
      console.log(data[0].name);
    });
  } else {
    loadMarkUpFromHash(window.location.hash.replace("#", ""));
  }
}

window.addEventListener("hashchange", e => {
  if (window.location.hash != '#login' || window.location.hash != '#register') {
    if (!accessToken) {
      window.location.hash = '#login';
    }
  }

  const currentHash = window.location.hash.replace("#", "");

  if (window.location.hash.includes('#contests')) {
    var pageno = window.location.href.slice(window.location.href.indexOf('#contests') + 9);

    if (!pageno) {
      pageno = 1;
    }

    app.innerHTML = null;
    contest(pageno).then(function (data) {
      length = data.totalContest;
      data = data.contests;
      noOfpage = Math.ceil(length / 10);

      for (i = 0; i < data.length; i++) {
        if (data[i].signups.includes(id)) {
          var cond = 'enter';
        } else {
          var cond = 'signup';
        }

        app.insertAdjacentHTML("beforeend", markups.contest(data[i].name, data[i].description, data[i].startTime, cond));
      }

      app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
        <ul class="pagination justify-content-center addcontestpage">
        </ul>
      </nav>`);
      var page = document.querySelector('.addcontestpage');

      for (i = 1; i <= noOfpage; i++) {
        page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#contests${i}">${i}</a></li>`);
      }
    });
  }

  if (window.location.hash.includes('#practice')) {
    var pageno = window.location.href.slice(window.location.href.indexOf('#practice') + 9);

    if (!pageno) {
      pageno = 1;
    }

    app.innerHTML = null;
    practices(pageno).then(function (data) {
      length = 50;
      data = data;
      noOfpage = Math.ceil(length / 10);

      for (i = 0; i < data.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[i].name, data[i].maxScore));
      }

      app.insertAdjacentHTML('beforeend', `<nav aria-label="Page navigation example" style="margin-top:2%;">
            <ul class="pagination justify-content-center addchallengepage">
            </ul>
          </nav>`);
      var page = document.querySelector('.addchallengepage');

      for (i = 1; i <= noOfpage; i++) {
        page.insertAdjacentHTML('beforeend', `<li class="page-item"><a class="page-link contestpage" href="#practice${i}">${i}</a></li>`);
      }
    });
  }

  if (window.location.hash.includes('#viewcontest')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#viewcontest') + 13);
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
    });
  }

  if (window.location.hash.includes('#signup')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#singup') + 9);
    console.log(name);
    let response = fetch(`http://ccoder.herokuapp.com/contest/${name}/signup/${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
      console.log(data[0].startTime);

      for (i = 0; i < data[0].challenges.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[0].challenges[i].name, data[0].challenges[i].maxScore));
      }

      if (new Date(data[0].startTime.slice(0, 19)) > new Date()) {
        console.log('yes');
        document.querySelector('.disab').classList.add("disabled");
      } else if (new Date(data[0].startTime.slice(0, 19)) < new Date()) {
        console.log('no');
        document.querySelector('.disab').classList.remove("disabled");
      }
    });
  }

  if (window.location.hash.includes('#enter')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#enter') + 7);
    console.log(name);
    app.innerHTML = null;
    ViewContest(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.viewcontest(data[0].name, data[0].description, data[0].rules, data[0].prize, data[0].organizationName, data[0].startTime));
      console.log(data[0].startTime);

      for (i = 0; i < data[0].challenges.length; i++) {
        app.insertAdjacentHTML("beforeend", markups.Practice(data[0].challenges[i].name, data[0].challenges[i].maxScore));
      }

      if (new Date(data[0].startTime.slice(0, 19)) > new Date()) {
        console.log('yes');
        document.querySelector('.disab').classList.add("disabled");
      } else if (new Date(data[0].startTime.slice(0, 19)) < new Date()) {
        console.log('no');
        document.querySelector('.disab').classList.remove("disabled");
      }
    });
  }

  if (window.location.hash.includes('#solvechallenge')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge') + 16);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      console.log(data);
      app.insertAdjacentHTML("beforeend", markups.solvechallenge(data[0].name, data[0].question, data[0].constraints, data[0].input, data[0].output));
    });
  }

  if (window.location.hash.includes('#solvechallenge/#submissions')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#submissions') + 29);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Submissions(data[0].submissions, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#discussions')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#discussions') + 29);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Discussions(data[0].discussions, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#editorial')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#editorial') + 27);
    console.log(name);
    app.innerHTML = null;
    solvechallenges(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Editorial(data[0].editorial, data[0].name));
      console.log(data[0].name);
    });
  }

  if (window.location.hash.includes('#solvechallenge/#leaderboard')) {
    var name = window.location.hash.slice(window.location.hash.indexOf('#solvechallenge/#leaderboard') + 29);
    console.log(name);
    app.innerHTML = null;
    leaderboard(name).then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.Leaderboard(data, decodeURI(name)));
      console.log(data[0].name);
    });
  }

  if (window.location.hash == '#profile') {
    app.innerHTML = null;
    Profile().then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.profiles(data.name, data.username, data.email));
    });
  }

  if (window.location.hash == '#updateprofile') {
    app.innerHTML = null;
    Profile().then(function (data) {
      app.insertAdjacentHTML("beforeend", markups.updateprofiles(data.name, data.username, data.email));
    });
  }

  if (window.location.hash == '#changepassword') {
    app.innerHTML = null;
    app.insertAdjacentHTML("beforeend", markups.changepassword);
  } else {
    loadMarkUpFromHash(currentHash);
  }
});
const registerForm = document.querySelector(".registerform");
const loginForm = document.querySelector(".loginform");
const updateForm = $('.updates');
const changePassword = document.querySelector(".changepassword");
const submitt = $('.submit');

if (registerForm) {
  registerForm.addEventListener("submit", async e => {
    e.preventDefault();
    console.log('working');
    const {
      name,
      username,
      email,
      password
    } = e.target;
    const send = {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value
    };
    let response = await fetch('http://ccoder.herokuapp.com/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(send)
    }).then(function (data) {
      return data.json();
    }).catch(function (err) {
      console.log(err);
    });

    if (response.createUser) {
      alert('Registered Successfully, You will recieve email to verify Your Account and login again');
      window.location.hash = "#login";
    } else {
      alert('Validation error');
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async e => {
    e.preventDefault();
    const {
      email,
      password
    } = e.target;
    const send = {
      email: email.value,
      password: password.value
    };
    let response = await fetch('http://ccoder.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(send)
    }).then(function (data) {
      return data.json();
    }).then(function (user) {
      console.log(user);

      if (user.message != 'Please verify your email first') {
        localStorage.setItem('JWTToken', user.accessToken);
        localStorage.setItem('id', user.loginUser._id);
        localStorage.setItem('username', user.loginUser.username);
      }

      return user; //console.log(localStorage.getItem('JWTToken'));
    }).catch(function (err) {
      console.log(err);
    });

    if (response.message == 'Please verify your email first') {
      alert('Please verify your email first');
    }

    if (localStorage.getItem('JWTToken')) {
      window.location.hash = "#dashboard";
    } else {
      alert('Invalid credantials');
    }
  });
}

var changepassword = $('.changepassword');

if (changepassword) {
  console.log(changepassword);
  $('.changepassword').on('submit', async function (e) {
    e.preventDefault();
    console.log('working');
    const {
      oldpassword,
      newpassword,
      confirmpassword
    } = e.target;
    const send = {
      oldpassword: oldpassword.value,
      newpassword: newpassword.value,
      confirmpassword: confirmpassword.value
    };
    console.log(username.value, name.value);
    let response = await fetch(`http://ccoder.herokuapp.com/user/changepassword/${accessToken}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(send)
    }).then(function (data) {
      return data.json();
    }).catch(function (err) {
      console.log(err);
    });
    console.log(response); // if (response.createUser) {
    //     alert('Registered Successfully, You will recieve email to verify Your Account and login again')
    //     window.location.hash = "#login";
    // }
    // else {
    //     alert('Validation error')
    // }
  });
}

if (submitt) {
  console.log('here');
  $('.submit').on("submit", async e => {
    e.preventDefault();
    console.log('working');
    const {
      language,
      code,
      name
    } = e.target;
    const send = {
      language: language.value,
      code: code.value
    };
    let response = await fetch(`http://ccoder.herokuapp.com/submit/${name.value}/${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(send)
    }).then(function (data) {
      return data.json();
    }).catch(function (err) {
      console.log(err);
    });
    console.log(response); // if (response.createUser) {
    //     alert('Registered Successfully, You will recieve email to verify Your Account and login again')
    //     window.location.hash = "#login";
    // }
    // else {
    //     alert('Validation error')
    // }
  });
}

$('.logout').on('click', async function (e) {
  e.preventDefault();
  var response = await fetch(`http://ccoder.herokuapp.com//user/logout/${accessToken}`, {
    method: 'DELETE'
  }).then(function (data) {
    return data.json;
  });
  console.log(response);
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45447" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","auth.js"], null)
//# sourceMappingURL=/auth.c7260aee.js.map