const links = document.querySelectorAll('.nav_link');
const zayavka = document.querySelector('.promo_button');
const consult = document.getElementById('consult');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    let anchor = link.getAttribute('href');
    anchor = anchor.slice(1,anchor.length);
    let goto = document.getElementById(`${anchor}`);
    let y = goto.offsetTop;
    console.log(y);
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});


zayavka.addEventListener('click', (event) => {
  event.preventDefault();
  let cy = consult.offsetTop;
  window.scrollTo({
    top: cy,
    behavior: "smooth"
  });
});