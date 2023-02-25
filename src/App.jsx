import keys from './constants/keys'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/loader'
import AppRoot from './containers/App'
import { useAppContext } from './hooks/context'
import { getItemFromStorage } from './utils/native'

const tokens = getItemFromStorage(keys.storageKey)

export default function App() {

  const [loading, setLoading] = useState(false)
  const { saveUser } = useAppContext()

  useEffect(() => {
    setLoading(true)
    saveUser(tokens).finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <AppRoot />
      <Toaster />
    </BrowserRouter>
  )
}
