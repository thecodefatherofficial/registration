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




// function sendmail() {
//     let name = document.getElementById("name").value;
//     let secondname = document.getElementById("second-name").value;
//     let email = document.getElementById("email").value;

//         var contactParams = {
//             name: name,
//             second_name: secondname,
//             email: email    
//         };

//         emailjs.send('ervice_lw7h80i', 'template_2aooevw', contactParams).then(function (res) {
//             setTimeout(() => {
//                 document.querySelector('.sanding').innerHTML = `
//                 `
//             }, 2000);

//             setTimeout(() => {
//                 document.querySelector('.send').innerHTML = `
//                 `
//             }, 2000);
//         })
// };


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