const form = document.querySelector('form.consultation_form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = document.querySelector('[name="name"]').value;
  let phone = document.querySelector('[name="phone"]').value;
  let problem = document.querySelector('[name="problem"]').value;

  let message = `<b>❗️Новая заявка</b>: %0A Имя:  <i>${name}</i> %0A Телефон:  <i>${phone}</i> %0A Проблема: %0A <i>${problem}</i>`

  const aboba = '5379887712:AAHRALInBsLv2FxpLTj-B4uiePVQOlV00Bc';
  const amogus = -696893330;
  let url = `https://api.telegram.org/bot${aboba}/sendMessage?chat_id=${amogus}&parse_mode=html&text=${message}`;
  
  let leon = new XMLHttpRequest();
  leon.open("GET", url, true);
  leon.send();



  event.target.reset();
});