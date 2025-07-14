import { Button, Container, Typography } from "@mui/material";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Container className="pt-8">
                <Typography variant="h4" gutterBottom>
                    Hello Material UI 👋
                </Typography>
                <Button variant="contained" color="primary">
                    Click me
                </Button>
            </Container>

            <Footer />
        </div>
    );
}

export default App;