import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import TentangKami from './pages/TentangKami'
import BisnisKami from './pages/BisnisKami'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/bisnis-kami" element={<BisnisKami />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
