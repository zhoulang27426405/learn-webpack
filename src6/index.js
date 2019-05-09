import { cube } from './math.js'
import './index.css'
import demo from './demo.vue'
console.log(demo)

function component() {
  var element = document.createElement('div')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

document.body.appendChild(component())
