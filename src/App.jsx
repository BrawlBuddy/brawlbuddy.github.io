import React from 'react'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import { BrawlersProvider } from './contexts/BrawlersContext.jsx'

const App = () => {
  return (
    <>
        <Header />
        <BrawlersProvider>
          <Home />
        </BrawlersProvider>
    </>
  )
}

export default App

