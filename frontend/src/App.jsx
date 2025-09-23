import './App.css'
import Header from './components/Header'
import ScrolImages from './components/ScrolImages'

function App() {

  fetch("http://localhost:8000/movies")
  .then(res => res.json())
  .then(data => console.log(data));


  return (
    <>
      <header><Header /></header>
      <ScrolImages />
      <footer>Recomended Movies</footer>
    </>
  )
}

export default App
