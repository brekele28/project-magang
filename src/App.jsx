import { useState, useEffect } from "react";
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import TentangKami from './components/TentangKami';
import BisnisKami from './components/BisnisKami';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-[#1E222A]">
          <PreLoader />
        </div>
      ) : (
        <Layout>
          <HeroSection />
          <TentangKami />
          <BisnisKami />
          <Kontak />
          <Footer />
        </Layout>
      )}
    </>
  )
}

export default App
