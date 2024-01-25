







// let fn=  document.querySelector('p')
// let h5=  document.querySelector('h5')

// fetch('http://localhost:5000/').then((res)=>{
    
//     return res.json()


// }).then((data)=>{
//     console.log(data,"data");
//            get(data)
// }).catch((err)=>{
//     console.log(err);
// })

// function get(a){
//     for(let i of a){
//         fn.innerText=i.id
//         h5.innerText=i.firstName
//     }



// }

 let button=  document.querySelector('button')

 button.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log('hello')
    const fs = document.getElementById('fn');
    let data=fs.value
    const ls = document.getElementById('ln').value;
    const email = document.getElementById('email').value;
        //  const formData = new FormData(form);
console.log(data,'rr')
axios.post('http://localhost:5000/create', { data,ls,email })
.then(response => {
  console.log(response.data);
  // Handle the response data as needed
})
.catch(error => console.error('Error:', error));
})

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