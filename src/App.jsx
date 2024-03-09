import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((res) => setQuote(res.data))
      .catch((err) => console.log(err))
  }

  const { author, content } = quote

  return (
    <div className='quote'>
      <button onClick={getQuote}>Get Quote</button>
      <div className='quote-content'>
        <h2>{content}</h2>
        <p>- {author}</p>
      </div>
    </div>
  )
}

export default App
