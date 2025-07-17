import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
            <Header />
            <main className="flex-grow">
                <IntroSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;