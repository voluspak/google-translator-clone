import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import useTranslateSettings from './hooks/useTranslateSettings'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon, ClipboardIcon, SpeakerIcon } from './components/Icon'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import Textarea from './components/Textarea'
import { useEffect } from 'react'
import { getTranslate } from './services/translate'
import useDebounce from './hooks/useDebounce'

function App () {
  const {
    fromLanguage, interchangeLanguages, loading,
    setFromLanguage, setToLanguage, toLanguage,
    fromText, result, setFromText, setResult
  } = useTranslateSettings()

  const debouncedFromText = useDebounce(fromText, 500)

  function handleClipboard () {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  function handleSpeaker () {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    if (debouncedFromText === '') return

    getTranslate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return

        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

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

            <div style={{ position: 'relative' }}>
              <Textarea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <div style={{ position: 'absolute', bottom: 5, left: 5, display: 'flex' }}>
                <Button
                  variant='link'
                  onClick={handleClipboard}
                >
                  <ClipboardIcon />
                </Button>

                <Button
                  variant='link'
                  onClick={handleSpeaker}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
