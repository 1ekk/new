const maxLen = 600;
let contents = document.querySelectorAll('#content');
contents.forEach(content => {
  if (content.textContent.length >= maxLen) {
    let displayText = content.textContent.slice(0, maxLen)
    content.innerHTML = `${displayText}<span class="dots">...</span> <br> <span class="read">Нажмите чтобы читать далее</span>`
  }
});



const openSlide = document.querySelectorAll('.slide');
const closeSlide = document.querySelectorAll('#titleClose');
const over = document.querySelector('#overlay')


// function openS() {
//   const modal = document.querySelector(openSlide.dataset.modalNumber)
//   openModal(modal);
//   if (modal.classList.contains('active')) {
//     openSlide.removeEventListener('click', openS);
//   } 
// }


// function closeS() {
//   const modal = closeSlide.closest('.modal');
//   closeModal(modal);
//   console.log(modal)
//   setTimeout(() => {if (modal.classList.contains('inactive')) openSlide.addEventListener('click', openS)}, 10);
// }


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  over.classList.add('active')
  // modal.classList.remove('inactive')
}


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  over.classList.remove('active')
  // modal.classList.add('inactive')
}


// closeSlide.addEventListener('click', closeS); 
// openSlide.addEventListener('click', openS);

openSlide.forEach(slide => {
  slide.addEventListener('click', () => {
    const modal = document.querySelector(slide.dataset.modalNumber)
    openModal(modal);
    document.body.style.overflow = 'hidden'
  });
});

closeSlide.forEach(slide => {
  slide.addEventListener('click', () => {
    const modal = slide.closest('.modal');
    closeModal(modal);
  });
});

over.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => closeModal(modal))
  document.body.style.overflow = 'auto'
});
