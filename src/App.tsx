import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import useTranslateSettings from './hooks/useTranslateSettings'
import { AUTO_LANGUAGE } from './constants'
import ArrowIcon from './components/ArrowIcon'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import Textarea from './components/Textarea'

function App () {
  const {
    fromLanguage, interchangeLanguages,
    setFromLanguage, setToLanguage, toLanguage,
    fromText, result, setFromText, setResult
  } = useTranslateSettings()
  return (
    <Container fluid>
      <h2>Google Translator Clone</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <Textarea
              placeholder='Traducción'
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button
          variant='link'
          disabled={fromLanguage === AUTO_LANGUAGE}
          onClick={interchangeLanguages}
          >
          <ArrowIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />

            <Textarea
              placeholder='Traducción'
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
