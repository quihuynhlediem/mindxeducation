let contactForm = document.getElementById("contact-form");
let customerName = document.getElementById("customer_name");
let customerEmail = document.getElementById("customer_email");
let message = document.getElementById("message");

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const serviceID = 'service_yb25w39';
  const templateID = 'template_cbp94yf';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Cảm ơn bạn vì đã liên hệ với chúng tôi. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
  customerName.value = "";
  customerEmail.value = "";
  message.value = "";
});