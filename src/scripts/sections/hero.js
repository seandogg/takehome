/**
 * Hero / Slider
 * ------------------------------------------------------------------------------
 * JS to help scaffold the slider
 *
 * @namespace hero
 */

import {tns} from 'tiny-slider/src/tiny-slider';

var slider = tns({
  container: '.hero__slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controlsContainer: '.hero__slider-controls',
  nav: true,
  navPosition: 'bottom',
  prevButton: '.prev-button',
  nextButton: '.next-button',
  autoHeight: true
})

