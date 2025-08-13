import Layout from "./Layout";
import HeroSection from "./HeroSection";
import TentangKami from "./TentangKami";
import BisnisKami from "./BisnisKami";
import Kontak from "./Kontak";
import Footer from "./Footer";

function AdminLandingPage() {
    return (
        <Layout>
            <HeroSection />
            <TentangKami />
            <BisnisKami />
            <Kontak />
            <Footer />
        </Layout>
    );
}

export default AdminLandingPage;