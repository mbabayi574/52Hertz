import { useEffect } from 'react'
import Header from './components/header'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './App.scss'

//  Pages
import Home from './Pages/Home/home'

function App() {
  useEffect(() => {
    const colorMode = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    colorMode()
    window.addEventListener('popstate', colorMode)
    return () => {
      window.removeEventListener('popstate', colorMode)
    }
  }, [])

  return (
    <>
      <div>
        <Header />
        <CSSTransition in={true} timeout={400} classNames='fade' unmountOnExit appear>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </CSSTransition>
      </div>
    </>
  )
}

export default App
