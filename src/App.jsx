import Blog from './components/Blog'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'
import Who from './components/Who'
import Works from './components/Works'

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Who/>
      <TechStack/>
      <Works/>
      <Blog />
      <Contact/>
    </div>
  )
}

export default App;
