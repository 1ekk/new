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


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  over.classList.add('active')

}


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  over.classList.remove('active')
}


openSlide.forEach(slide => {
  slide.addEventListener('click', openS)
});


function openS(e) {
  const modal = document.querySelector(e.currentTarget.dataset.modalNumber)
    openModal(modal);
    document.body.style.overflow = 'hidden'
    if (modal.classList.contains('active')) {
      e.currentTarget.removeEventListener('click', openS);
    } 
}



closeSlide.forEach(slide => {
  slide.addEventListener('click', () => {
    const modal = slide.closest('.modal');
    closeModal(modal);
    setTimeout(() => {if (!modal.parentElement.classList.contains('active')) modal.parentElement.addEventListener('click', openS)}, 10);
    
  });
});

over.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
    setTimeout(() => {if (!modal.parentElement.classList.contains('active')) modal.parentElement.addEventListener('click', openS)}, 10);
  })
  document.body.style.overflow = 'auto'
  // check = 1;
});
