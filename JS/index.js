// for first card

let serial = 0;
document.getElementById('first-card').addEventListener('click',function(){
    
    serial+=1;
    //get the data from html using id
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    //multiply
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);

    
})

//second card
//using event object from browser
document.getElementById("second-card").addEventListener("click",function(e){
    serial+=1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    //sum
    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);

     //show the data
     displayData(pName,pPrice,pQuantity,sumTotal);
})


//third card
document.getElementById('third-card').addEventListener('click',function(){
    
    serial+=1;
    //get the data from html using id
  
    //multiply
    const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

    //show the data
    displayData(productName,productPrice,productQuantity,priceTotal);

    
})

//fifth card
document.getElementById('fifth-card').addEventListener('click',function(){
    serial+=1;

    const productName = document.getElementById('fifth-name').innerText;
    const productPrice = document.getElementById('fifth-price').value;
    const productQuantity = document.getElementById('fifth-quantity').value;

      //divide
      const priceTotal = parseInt(productPrice) / parseInt(productQuantity);

      //show the data
      displayData(productName,productPrice,productQuantity,priceTotal);

})
















// common function
// function getAllData(name,id-price,id-quantity){
//     const productName = document.getElementById(name).innerText;
//     const productPrice = document.getElementById(id-price).innerText;
//     const productQuantity = document.getElementById(id-quantity).innerText;
// }


function displayData(productName,productPrice,productQuantity,priceTotal){
    const tableContainer = document.getElementById('table-container');
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>    
        <td>${productName}</td>    
        <td>${productPrice}</td>    
        <td>${productQuantity}</td>    
        <td>${priceTotal}</td>
    `;
    tableContainer.appendChild(tr);
}