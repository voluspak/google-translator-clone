import { useEffect } from 'react'
import useDebounce from './useDebounce'
import { getTranslate } from '../services/translate'
import { type FromLanguage, type Language } from '../types'

const useTranslation = ({ fromLanguage, toLanguage, fromText, result, setResult }: {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  setResult: FunctionStringCallback }) => {
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
      .catch((error) => {
        console.log(error)
        setResult('Translation error with the API')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  return { handleClipboard, handleSpeaker }
}

export default useTranslation
