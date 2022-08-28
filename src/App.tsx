import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AppRouter } from './routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return <AppRouter/>
}

export default App
