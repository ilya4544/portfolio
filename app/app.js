import index from './template.jade'
import SkillsManager from './skillsmanager.js'
import ExperienceManager from './experiencemanager.js'
import smoothScroll from 'smooth-scroll'
import data from './data.js'
import AOS from 'aos'
import moment from 'moment'

require('./stylesheets/base.scss')
require('./stylesheets/animate.css')


if (typeof document !== 'undefined') {
  smoothScroll.init({speed: 1000})
  AOS.init({duration: 600})
  data.currentAge = moment().diff(['1995', '7', '17'], 'years')
  data.yearsExperience = data.currentAge - 15
  document.body.innerHTML = index(data)
  const sm = new SkillsManager()
  const em = new ExperienceManager()
}
