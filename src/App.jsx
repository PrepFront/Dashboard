import keys from './constants/keys'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/loader'
import AppRoot from './containers/App'
import { useAppContext } from './hooks/context'
import { getItemFromStorage } from './utils/native'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const tokens = getItemFromStorage(keys.storageKey)
const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoot />
        <Toaster />
      </BrowserRouter>
      {
        process.env.NODE_ENV === 'development' && <ReactQueryDevtools/>
      }
    </QueryClientProvider>
  )
}
