import App from './App'
import cellExample from './components/cell/example'
import accordionExample from './components/accordion/example'
import swipeExample from './components/swipe/example'

export default {
  '/': {
    component: App
  },
  '/cell': {
    component: cellExample
  },
  '/accordion': {
    component: accordionExample
  },
  '/swipe': {
    component: swipeExample
  }
}
