import { useState } from 'react'
import GlobalStyle from "./styles/global";
import { AppRouter } from './routes/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyle/>
      <AppRouter/>
    </div>
    
  )
}

export default App
