   console.log("hello");
   var tablink =document.getElementsByClassName("tablinks");
   var tabcontents =document.getElementsByClassName("tabcontent");

   function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontent of tabcontents){
        tabcontents.classList.remove("activetab");
    }
   }
   const scriptURL = 'https://script.google.com/macros/s/AKfycbztBwTDBfh963uqCxCLservWHpeJhhEBPhz-9tcq8ZJhsNKdPbDFVoTPxN9qSiLbBv5/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg =document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully...!"
            setTimeout(function(){
              msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })