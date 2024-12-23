import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />

    </div>
  )
}

export default App
