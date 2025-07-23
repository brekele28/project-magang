import Layout from './components/Layout';
import HeroSection from './components/HeroSection';

const SectionDummy = () => (
  <section className="py-20 px-6 bg-gray-100">
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-semibold">Tentang Kami</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Ini adalah section berikutnya setelah hero. Tambahkan konten apapun yang kamu butuhkan.
      </p>
    </div>
  </section>
);

function App() {

  return (
    <Layout>
      <HeroSection />
      <SectionDummy />
    </Layout>
  )
}

export default App
