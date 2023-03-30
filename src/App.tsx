import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useTranslateSettings from './hooks/useTranslateSettings'

function App () {
  const { dispatch } = useTranslateSettings()
  return (
    <div className="App">
      <h1>Google Translator Clone</h1>
      <button
      onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })
      }}
      >Cambiar a Español</button>
    </div>
  )
}

export default App
