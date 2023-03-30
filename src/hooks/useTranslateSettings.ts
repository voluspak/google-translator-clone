import { useReducer } from 'react'
import { type State, type Action } from '../types'

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
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
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

  const interchangeLenguages = () => {
    dispatch({ type: 'INTERCHANGE_LENGUAGES' })
  }

  const setFromLenguage = (payload) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLenguage = (payload) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    fromText,
    toLanguage,
    loading,
    result,
    setFromLenguage,
    setFromText,
    setResult,
    setToLenguage,
    interchangeLenguages
  }
}
