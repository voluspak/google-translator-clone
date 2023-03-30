import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

const LanguageSelector = ({ onChange }) => {
  return (
    <Form.Select aria-label='Selecciona el idioma'>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
            {literal}
        </option>
      ))}
    </Form.Select>
  )
}

export default LanguageSelector