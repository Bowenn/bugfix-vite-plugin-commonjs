const { msg: message } = require('./exports')
const testModule = require('./module-exports/microtask.cjs')

import cjs from './cjs'

document.querySelector('#app')!.innerHTML = `
  <pre>
    ${message}
  </pre>
  <hr/>
  <pre>
    ${cjs.cjs}
  </pre>
`
