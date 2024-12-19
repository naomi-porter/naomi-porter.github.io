import './App.css'
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

function App() {
  // const [count, setCount] = useState(0)

  return (
<Box id="top"  direction="column" 
  minHeight="100vh" 
  justifyContent="space-between">
    <Navbar />
    <MainSection />
    <Footer />
  </Box>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
