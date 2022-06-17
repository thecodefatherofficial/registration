function Emailvalidation(){
    let emailInput = document.getElementById("email");
    let email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (email.match(pattern)) {
        emailInput.classList.add("valid")
        emailInput.classList.remove("invalid")
    }else{
        emailInput.classList.remove("valid")
        emailInput.classList.add("invalid")
    }
};      

// window.addEventListener("load", function(){

//     const btn = document.getElementById('button');
//     btn.setAttribute('disabled', '')

//     let inputName = document.getElementById('name').value;
//     let inputSecondName = document.getElementById('second_name').value;
//     let inputEmail = document.getElementById('email').value;
//     let inputDev = document.getElementById('dev').value;

//     document.getElementById('name').oninput = function(){
//         if (inputName === ""){
//             if (inputSecondName === ""){
//                 if (inputEmail === ""){
//                     if (inputDev === ""){
//                         const btn = document.getElementById('button');
//                         btn.removeAttribute('disabled', '')
//                     }
//                 }
//             }
//         }
//     }
// })

window.addEventListener("load", function(){
    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
    
       const serviceID = 'service_lw7h80i';
       const templateID = 'template_2aooevw';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.querySelector('form').style.display = 'none'
            document.querySelector('.sanding').style.display = 'flex'
            setTimeout(() => {
                document.querySelector('.sanding').style.display = 'none';
                document.querySelector('.send').style.display = 'flex'
            }, 2000);      
    
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
})