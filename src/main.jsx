import React from 'react'
import ReactDOM from 'react-dom/client'

// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Components
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
