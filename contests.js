// `<div class="card text-center">
// <div class="card-body">
//   <h5 class="card-title">Name</h5>
//   <p class="card-text">Description.</p>
//   <a href="#" class="btn btn-warning">View Details</a>
//   <a href="#" class="btn btn-warning">Signup</a>
// </div>
// <div class="card-footer text-muted">
//     Start time:
// </div>
// </div>`



// const markups = {

//     }
//   };
  
//   const app = document.querySelector("#app");
  
//   const loadMarkUpFromHash = hash => {
//     app.innerHTML = null;
//     app.insertAdjacentHTML("afterbegin", markups[hash]);
//   };
  
  
//   if (window.location.hash) {
//     loadMarkUpFromHash(window.location.hash.replace("#", ""));
//   }
  
//   window.addEventListener("hashchange", e => {
//     const currentHash = window.location.hash.replace("#", "");
//     loadMarkUpFromHash(currentHash);
//   });
//   const registerForm = document.querySelector(".registerform");
  
//   if (registerForm) {
//     registerForm.addEventListener("submit", async e => {
//       e.preventDefault();
//       console.log('working')
//       const { name,username,email, password} = e.target;
//       const send = {
//           name: name.value,
//           username:username.value,
//           email:email.value,
//           password:password.value
//           }
//       let response =  await fetch('http://ccoder.herokuapp.com/user/register',
//         {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json;charset=utf-8' },
//             body: JSON.stringify(send)
//         })
//         .then(function(data){
//           return data.json()
//         })
  
//         .catch(function(err){
//             console.log(err)
//         })
//         if(response.createUser){
//             alert('Registered Successfully, You will recieve email to verify Your Account and login again')
//             window.location.hash = "#login";
//         }
//         else{
//             alert('Validation error')
//         }      
//     });
//   }
  
//   if (loginForm) {
//     loginForm.addEventListener("submit", async e => {
//       e.preventDefault();
//       const {email, password} = e.target;
//       const send = {
//           email:email.value,
//           password:password.value
//           }
//       let response =  await fetch('http://ccoder.herokuapp.com/user/login',
//         {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json;charset=utf-8' },
//             body: JSON.stringify(send)
//         })
//         .then(function(data){
//           return data.json()
//         })
//         .catch(function(err){
//             console.log(err)
//         })
//         console.log(response)
//         if(response.loginUser){
//           window.location.hash = "#dashboard";
//       }
//       else if(response.message == 'Please verify your email first'){
//           alert('Please verify your email first')
//       }
//       else{
//           alert('Invalid credantials')
//       }    
//   });
//   }

  