fetch('http://localhost:5000/').then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data);
    add(data)

})

 let div= document.querySelector('div')
 function add(data){
    for(let i of data){

      let  div1= document.createElement('div')
      div1.setAttribute('id','div1')
      console.log(div1,"rr")
      let h4=  document.createElement('h4')
      h4.innerText=i.id
    let p=  document.createElement('p')
    p.innerText=i.firstName
     let p1= document.createElement('p')
     p1.innerText=i.lastName
     div1.append(h4,p,p1)
     div.append(div1)

    }


 }