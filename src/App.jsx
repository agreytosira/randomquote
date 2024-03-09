import { useState } from 'react'
import axios from 'axios'

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
    <div>
      <h1>Random Quote</h1>
      <button onClick={getQuote}>Get Quote</button>
      <h2>{content}</h2>
      <p>- {author}</p>
    </div>
  )
}

export default App
