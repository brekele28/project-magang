import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import TentangKami from './components/TentangKami';
import BisnisKami from './components/BisnisKami';
import Kontak from './components/Kontak';
import Footer from './components/Footer';


function App() {

  return (
    <Layout>
      <HeroSection />
      <TentangKami/>
      <BisnisKami />
      <Kontak />
      <Footer />
    </Layout>
  )
}

export default App
