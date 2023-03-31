import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import useTranslateSettings from './hooks/useTranslateSettings'
import { AUTO_LANGUAGE } from './constants'
import { ArrowIcon, ClipboardIcon, SpeakerIcon } from './components/Icon'
import LanguageSelector from './components/LanguageSelector'
import { SectionType } from './types.d'
import Textarea from './components/Textarea'
import useTranslation from './hooks/useTranslation'
import Styles from './styles/app.module.css'

function App () {
  const {
    fromLanguage, interchangeLanguages, loading,
    setFromLanguage, setToLanguage, toLanguage,
    fromText, result, setFromText, setResult
  } = useTranslateSettings()

  const { handleClipboard, handleSpeaker } = useTranslation({ fromLanguage, toLanguage, fromText, result, setResult })

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

            <div className={Styles.textareaAndButtonsContainer}>
              <Textarea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <div className={Styles.buttonsContainer}>
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
