'use strict';

$(document).ready(() => {
  const header = $('#header');
  const aside = $('#aside');
  const sections = Object.values($('.section'));
  const articles = Object.values($('.article'));

  const colorChange = () => {

    const colors = [
      'red',
      'blue',
      'green',
      'cyan',
      'aliceblue',
      'forestgreen',
      'slate',
      'maroon',
      'orange'
    ]

    const updateElement = (element, color) => $(element).css('background-color', color);
    
    if ($(window).width() > 991) {
      updateElement(header, colors[0]);
      updateElement(aside, colors[1]);
      for (let i = 0; i < sections.length; i++) {
        updateElement(sections[i], colors[i + 2]);
      }
      for (let i = 0; i < articles.length; i++) {
        updateElement(articles[i], colors[i + 5]);
      }
    } else if ($(window).width() > 767) {
      updateElement(header, colors[2]);
      updateElement(aside, colors[3]);
      for (let i = 0; i < sections.length; i++) {
        updateElement(sections[i], colors[i]);
      }
      for (let i = 0; i < articles.length; i++) {
        updateElement(articles[i], colors[i + 5]);
      }
    } else {
      updateElement(header, colors[8]);
      updateElement(aside, colors[7]);
      for (let i = 0; i < sections.length; i++) {
        updateElement(sections[i], colors[colors.length - (i + 3)]);
      }
      for (let i = 0; i < articles.length; i++) {
        updateElement(articles[i], colors[colors.length - (i + 6)]);
      }
    }
  }

  colorChange();
  $(window).resize(colorChange);
})