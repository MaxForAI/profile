import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
