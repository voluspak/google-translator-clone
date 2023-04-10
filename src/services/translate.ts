import { type FromLanguage, type Language } from '../types.d'

interface Translation {
  translate: string
}

export async function getTranslate ({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguage, toLanguage: Language, text: string }) {
  try {
    const response = await fetch('https://translator-clone.onrender.com/api/translate', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        fromLanguage,
        toLanguage,
        text
      })
    })

    if (!response.ok) {
      return 'No se pudo obtener la traducción'
    }

    const data: Translation = await response.json()
    return data.translate
  } catch (error) {
    throw new Error('Hubo un error al hacer la petición')
  }
}
