const toggle = document.getElementById('toggle-cbx');
const toggleLabel = document.getElementById('toggle-label');

toggle.addEventListener('change', (event) => {
  let checked = event.target.checked;
  document.body.classList.toggle('dark');

  if (checked) {
    toggleLabel.innerHTML = '<i class="fa-solid fa-sun"></i>';
    toggleLabel.style.color = 'yellow';
  } else {
    toggleLabel.innerHTML = '<i class="fa-solid fa-moon"></i>';
    toggleLabel.style.color = 'var(--color2)';
  }
})

//formulario de contacto
const btn = document.getElementById('button');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_yhgt5kc';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';

        alert('Gracias por tu mensaje, enviado con exito!');
        nameInput.value = '';
        email.value = '';
        message.value = '';
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });