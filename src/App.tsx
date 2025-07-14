import { Button, Container, Typography } from "@mui/material";

function App() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Hello Material UI 👋
            </Typography>
            <Button variant="contained" color="primary">
                Click me
            </Button>
        </Container>
    );
}

export default App;