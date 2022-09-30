
// function confirm1(){
//   const theform = document.querySelector('#form');
//   theform.innerHTML='<p>Thank you Obrien for your patient see you at the <mark>dinner.</mark></p>';
//   theform.submit();
// }

// function handleGmail(){
//   const theform = document.querySelector('#form');
//   theform.innerHTML = '<p><b>Dear Obrien</b>. We are requesting for your gmail and telphone to contact you on pickup of <mark>Ticket</mark></p><input type="email" name="clientname" placeholder="Email 123@gmail.." id="email" required><button type="submit" id="submitconfirm">Next</button>';

//   const submitconfirm = document.querySelector('#submitconfirm');

//   submitconfirm.addEventListener('click', async() => {
//     confirm1();
//   });
// } 




// function handletel(){
//   const theform = document.querySelector('#form');
//   theform.innerHTML = '<p><b>Welcome Obrien</b>. You are now on the <mark><abbr>VVIP</abbr>bench of our JUJA METHODIST DINNER</mark> we will kindly request a few details for the completion of the process.</p><input type="tel" name="clientnumber" placeholder="Number e.g 071234.." id="phonenumber" required><button type="button" id="handlegmail">Next</button>';
//   const handlegmail = document.querySelector('#handlegmail');

//   handlegmail.addEventListener('click', async() => {
//     handleGmail();
//   });
// }




// const namex = document.querySelector('#handlename');

// namex.addEventListener('click', () => {
//   handletel();
// });

const form = document.getElementById('form');
window.addEventListener('load', () => {
  const teFirst = document.getElementById('one');
  teFirst.style.display = "flex";
})

const dive2 = document.getElementById('handlename');
dive2.addEventListener('click', ()=> {
  let name = form.fullname.value;
  if (form.fullname.value === "" || form.fullname.value.length < 5) {
    alert("kindly input your Full Name");
  }else{
    const teFirst = document.getElementById('one');
    const sow2 = document.getElementById('two');
    sow2.style.display = 'flex';
    teFirst.style.display = "none";
    form.inputname.value = `Welcome ${name}`  
    form.inputMode.disabled;  
  }
})

