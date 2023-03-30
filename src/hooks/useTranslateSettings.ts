import { useReducer } from 'react'
import { AUTO_LANGUAGE } from '../constants'
import { type State, type Action, type FromLanguage, type Language } from '../types.d'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {
  const { type } = action
  if (type === 'INTERCHANGE_LENGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      loading,
      fromText: state.result,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      result: ''
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state

    const loading = state.fromText !== ''
    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state

    const loading = state.fromText !== ''
    return {
      ...state,
      toLanguage: action.payload,
      loading,
      result: ''
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''

    return {
      ...state,
      loading,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }
  return state
}

export default function useTranslateSettings () {
  const [{
    fromLanguage,
    fromText,
    toLanguage,
    loading,
    result
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LENGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    fromText,
    toLanguage,
    loading,
    result,
    setFromLanguage,
    setFromText,
    setResult,
    setToLanguage,
    interchangeLanguages
  }
}
