import index from './template.jade'
import SkillsManager from './skillsmanager.js'
import ExperienceManager from './experiencemanager.js'
import smoothScroll from 'smooth-scroll'
import data from './data.json';
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
  document.body.innerHTML = index(data);
  const sm = new SkillsManager();
  const em = new ExperienceManager();
}
