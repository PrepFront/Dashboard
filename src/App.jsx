import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import AppRoot from './containers/App'

export default function App() {
  return (
      <BrowserRouter>
        <AppRoot/>
        <Toaster/>
      </BrowserRouter>
  )
}
