import index from './works.jade'

if (typeof document !== 'undefined') {
  document.body.innerHTML = index();
}