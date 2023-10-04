import { CssBaseline } from '@mui/material'
import './App.css'
import FileUploadForm from './pages/FileUploadForm'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <CssBaseline />
      <FileUploadForm />
      <Toaster />
    </>
  )
}

export default App
