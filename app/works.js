import index from './works.jade'
import bespoke from 'bespoke'
import cube from 'bespoke-theme-cube'
import keys from 'bespoke-keys'
import touch from 'bespoke-touch'
import scale from 'bespoke-scale'
import smoothScroll from 'smooth-scroll'
import WOW from 'wow.js';

require('./stylesheets/base.scss');
require('./stylesheets/animate.css');

if (typeof document !== 'undefined') {
  smoothScroll.init({speed: 1000});
  const wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null 	  // optional scroll container selector, otherwise use window
  });
  wow.init();
  document.body.innerHTML = index();
  var deckGuestguru = bespoke.from('#guestguru', [
    cube(),
    keys(),
    touch(),
    scale('zoom')
  ]);
  var deckPhotoshoot = bespoke.from('#photoshoot', [
    cube(),
    keys(),
    touch()
  ]);
}