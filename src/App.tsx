import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useTranslateSettings from './hooks/useTranslateSettings'

function App () {
  const { setFromLenguage } = useTranslateSettings()
  return (
    <div className="App">
      <h1>Google Translator Clone</h1>
      <button
      onClick={() => {
        setFromLenguage('es')
      }}
      >Cambiar a Español</button>
    </div>
  )
}

export default App
