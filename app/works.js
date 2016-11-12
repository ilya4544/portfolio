import index from './works.jade'
import bespoke from 'bespoke'
import cube from 'bespoke-theme-cube'
import keys from 'bespoke-keys'
import touch from 'bespoke-touch'
import scale from 'bespoke-scale'
import smoothScroll from 'smooth-scroll'

require('./stylesheets/base.scss');
require('./stylesheets/animate.css');

if (typeof document !== 'undefined') {
  smoothScroll.init({speed: 1000});
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