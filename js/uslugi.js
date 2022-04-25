const fizButton = document.querySelector('.fiz_button');
const urButton = document.querySelector('.ur_button');
const fiz = document.getElementById('fiz');
const ur = document.getElementById('ur');

urButton.addEventListener('click', (e) => {
  e.preventDefault();
  urButton.style.backgroundColor = '#065B82';
  urButton.style.color= '#ffffff';
  fizButton.style.backgroundColor = '#ffffff';
  fizButton.style.color= '#065B82';
  fiz.style.display = 'none';
  ur.style.display = 'flex';
});

fizButton.addEventListener('click', (e) => {
  e.preventDefault();
  urButton.style.backgroundColor = '#ffffff';
  urButton.style.color= '#065B82';
  fizButton.style.backgroundColor = '#065B82';
  fizButton.style.color= '#ffffff';
  ur.style.display = 'none';
  fiz.style.display = 'flex';
});
