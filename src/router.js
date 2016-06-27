import App from './App'
import gContainerExample from './components/gContainer/example'
import cellExample from './components/cell/example'
import accordionExample from './components/accordion/example'
import swipeExample from './components/swipe/example'
import sidebarExample from './components/sidebar/example'

export default {
  '/': {
    component: App
  },
  'gcontainer': {
    component: gContainerExample
  },
  '/cell': {
    component: cellExample
  },
  '/accordion': {
    component: accordionExample
  },
  '/swipe': {
    component: swipeExample
  },
  '/sidebar': {
    component: sidebarExample
  }
}
