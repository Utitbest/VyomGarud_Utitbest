import { useState } from 'react'
import Hero from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capability';
import Highlights from './pages/Highlight';
import ContactFooter from './pages/ContactFooter';
function App() {

  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <ContactFooter />
    </>
  )
}

export default App;
