

 let button=  document.querySelector('button')


 button.addEventListener('click' ,()=>{

  // console.log('heheheheh');

     let firstName=   document.querySelector('#firstName').value
     let lastName=   document.querySelector('#lastName').value
     let email=   document.querySelector('#email').value

     console.log(firstName,lastName,email,"rrrrrrr");


     axios.post('http://localhost:4000/create', {  firstName,lastName,email })
.then(response => {
  console.log(response.data);
  // Handle the response data as needed
})


 })


















//  button.addEventListener('click',(e)=>{


    // e.preventDefault()
//     // console.log('hello')
//     const fs = document.getElementById('firstName');
//     let data=fs.value
//     const ls = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//         //  const formData = new FormData(form);
// console.log(data,'rr')

// .catch(error => console.error('Error:', error));
// })

    //      fetch('http://localhost:5000/create', {
    //   method: 'POST',body:'hhhhhhh'
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   // Handle the response data as needed
    // })
    // .catch(error => console.error('Error:', error));
         

//  })



// console.log('rrr');
// function submitForm(event) {
//     console.log(event)
//     event.preventDefault()
//     const form = document.getElementById('myForm');
//     const formData = new FormData(form);
//     console.log(formData,"rrrrr")
//     fetch('http://localhost:5000/create', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // Handle the response data as needed
//     })
//     .catch(error => console.error('Error:', error));
//   }