const buttons = document.querySelectorAll('[data-carousel-button]');
let test = document.getElementsByTagName("*");
// console.log(activeSlides[0])




buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    // test.style.overflowY = 'hidden';
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = document.querySelector("[data-slides]");
    const activeSlides = slides.querySelectorAll(".visible");
    const activeRight = slides.querySelectorAll(".appear_right");
    let c = [...slides.children].indexOf([...activeSlides][0])
    let d = [...slides.children].indexOf([...activeSlides][1])
    console.log([...slides.children])
    
    if (offset === 1) {
      slides.children[c].classList.add('animate_left')
      setTimeout(() => slides.children[c].classList.remove('visible'), 500)
      // setTimeout(() => slides.children[c].classList.remove('appear_right'), 500)
      setTimeout(() => slides.children[c].classList.remove('animate_left'), 500)
    }

    if (offset === -1) {
      slides.children[d].classList.add('animate_right')
      setTimeout(() => slides.children[d].classList.remove('visible'), 500)
      // setTimeout(() => slides.children[d].classList.remove('appear_left'), 500)
      setTimeout(() => slides.children[d].classList.remove('animate_right'), 500)
      
    }

    
    // setTimeout(() => slides.children[c].classList.remove('appear_left'), 500)

    // c = c + 1;
    console.log('c ', c);
    console.log('d', d)
    // [...slides.children].forEach(slide => {
    //   // setTimeout(() => slide.classList.add('animate'), 500);
    //   slide.classList.remove('visible')  
      
    // });
    
    
    
    // setTimeout(() => all.style.overflowX = 'visible', 1)
    let newFirstIndex = [...slides.children].indexOf([...activeSlides][0]) + offset;
    let newSecondIndex = newFirstIndex + 1;
    
    
    
    if (newFirstIndex != 0) {
      buttons[1].style.visibility = 'visible'
    } else {
      buttons[1].style.visibility = 'hidden'
    }

    if (newSecondIndex == slides.children.length - 1) {
      buttons[0].style.visibility = 'hidden'
    } else {
      buttons[0].style.visibility = 'visible'
    }

    
    
    
    
    if (offset === 1) {
      slides.children[newSecondIndex].classList.add('appear_right')
      setTimeout(() => slides.children[newSecondIndex].classList.remove('appear_right'), 500)
      setTimeout(() => slides.children[newSecondIndex].classList.add('visible'), 501 )
      slides.children[newFirstIndex].classList.add('visible')
    }

    if (offset === -1) {
      slides.children[newFirstIndex].classList.add('appear_left')
      setTimeout(() => slides.children[newFirstIndex].classList.remove('appear_left'), 500)
      setTimeout(() => slides.children[newFirstIndex].classList.add('visible'), 501 )
      slides.children[newSecondIndex].classList.add('visible')
    // slides.children[newSecondIndex].classList.add('animate_left')
    }
  });

});