import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-[#292727] text-white">
            <Header />
            <main className="flex-grow">
                <IntroSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;