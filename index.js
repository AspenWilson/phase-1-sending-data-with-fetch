// Add your code here

function submitData (name, email) {
   // const confgObj = {
   //     method: "POST",
   //     headers: {
   //         "Content-Type": "application/json",
   //         "Accept": "application/json",
   //     },
   //     body: JSON.stringify({
   //         'name': firstName,
   //         'email': email,
   //     })
   // };
   return fetch('http://localhost:3000/users', {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json",
       },
       body: JSON.stringify({
           name,
           email,
   })
})
   .then(response => response.json())
   .then(newObj => document.body.innerHTML = newObj['id'])

   .catch(function (error) {
    console.log(error.message)
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = error.message;
    body.append(p)
   });
}


// function addUser(newUser) {
//     document.getElementsByTagName("body")[0].innerHTML = newUser;
//     document.body.append(message)
// }
