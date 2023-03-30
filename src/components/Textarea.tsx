import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  placeholder: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const Textarea = ({ loading, type, placeholder, value, onChange }: Props) => {
  return (
    <Form.Control
    as='textarea'
    placeholder={placeholder}
    autoFocus={type === SectionType.From}
    style={{ height: '150px' }}
  />
  )
}

export default Textarea
