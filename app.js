'use strict';

$(document).ready(() => {
  const header = $('#header');
  const aside = $('#aside');
  const sections = Object.values($('.section'));
  const articles = Object.values($('.article'));

  const colorChange = () => {

    const randColor = () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
    const updateElement = element => $(element).css('background-color', randColor());
    
    updateElement(header);
    updateElement(aside);
    sections.forEach(section => updateElement(section));
    articles.forEach(article => updateElement(article));
  }

  $(window).resize(colorChange);
  colorChange();
})