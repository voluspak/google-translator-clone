import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import useTranslateSettings from './hooks/useTranslateSettings'
import { AUTO_LANGUAGE } from './constants'
import ArrowIcon from './components/ArrowIcon'
import LanguageSelector from './components/LanguageSelector'

function App () {
  const { fromLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useTranslateSettings()
  return (
    <Container fluid>
      <h1>Google Translator Clone</h1>

      <Row>
        <Col>
          <h2>From</h2>
          <LanguageSelector onChange={setFromLanguage}/>
        </Col>

        <Col>
          <Button
          variant='link'
          disabled={fromLanguage === AUTO_LANGUAGE}
          onClick={interchangeLanguages}
          >
          <ArrowIcon />
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          <LanguageSelector onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
