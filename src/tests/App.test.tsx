import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('Should render properly', async () => {
    const user = userEvent.setup()
    const app = render(<App />)

    const textAreaFrom = app.getByPlaceholderText('Introducir texto')

    await user.type(textAreaFrom, '¡Hola mundo!')
    const result = await app.findByDisplayValue(/Hello world!/i, {}, { timeout: 5000 })

    expect(result).toBeTruthy()
  })
})
