import Hero from './components/Hero'
import { NavBar } from './components/Navbar/NavBar'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-grow">
        <Hero/>
        {/* Autres sections peuvent être ajoutées ici */}
      </main>
    </div>
  )
}

export default App