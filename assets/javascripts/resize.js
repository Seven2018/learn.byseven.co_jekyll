const hasClass = (element, cls) => {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

const colorchange = document.querySelectorAll('.color-change');

const updateCardToSize = () => {
  if (document.documentElement.clientWidth <= 768) {
    colorchange.forEach((div) => {
      if (hasClass(div, 'training-card-description2')) {
        div.classList.add('training-card-description1')
        div.classList.remove('training-card-description2')
      } else if (hasClass(div, 'training-card-description1')) {
        div.classList.add('training-card-description2')
        div.classList.remove('training-card-description1')
      }
    })
  }
}

const updateCardListener = () => {

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth === 768) {
      colorchange.forEach((div) => {
        if (hasClass(div, 'training-card-description2')) {
          div.classList.add('training-card-description1')
          div.classList.remove('training-card-description2')
        } else if (hasClass(div, 'training-card-description1')) {
          div.classList.add('training-card-description2')
          div.classList.remove('training-card-description1')
        }
      })
    }
  })
}

updateCardToSize();
updateCardListener();

// if (window.innerWidth <= 768) {
//   if (hasClass(colorchange, 'training-card-description2')) {
//     colorchange.classList.add('training-card-description1')
//     colorchange.classList.add('training-card-description2')
//   } else if (hasClass(colorchange, 'training-card-description1')) {
//     colorchange.classList.add('training-card-description2')
//     colorchange.classList.add('training-card-description1')
//   }
// }
