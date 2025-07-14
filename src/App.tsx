import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";

function App() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-between relative">
            <LanguageSwitcher />

            <Container className="pt-8">
                <Typography variant="h4" gutterBottom>
                    {t('title')}
                </Typography>
            </Container>

            <Footer />
        </div>
    );
}

export default App;