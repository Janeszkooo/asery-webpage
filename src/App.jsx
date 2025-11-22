import './App.css'
import Galaxy from './components/background/Galaxy'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'inherit' }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={false}
          density={2}
          glowIntensity={0.5}
          saturation={0.05}
          hueShift={0}
        />
      </div>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App;