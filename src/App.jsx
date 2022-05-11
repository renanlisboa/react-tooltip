import { Tooltip } from './components/Tooltip'

import './app.css'

function App() {
  return (
    <div id="container">
      <Tooltip content="Tooltip text">
        <button>Click or hover me</button>
      </Tooltip>
    </div>
  )
}

export default App
