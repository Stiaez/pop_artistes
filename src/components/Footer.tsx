import { Box, Typography, Link, Container } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: '1px solid #ccc',
                backgroundColor: '#111',
                color: 'white',
                py: 5,
                fontSize: '14px',
            }}
        >
            <Container maxWidth="lg" className="pl-2 pr-2 text-left">
                <Typography
                    variant="h6"
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        mb: 1,
                    }}
                >
                    Donia Meunier
                </Typography>

                <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Contact</Typography>

                <Typography sx={{ mb: 0.5 }}>
                    <Link
                        href="mailto:doniameunier16@gmail.com"
                        underline="hover"
                        color="inherit"
                    >
                        doniameunier16@gmail.com
                    </Link>
                </Typography>

                <Typography>
                    <Link
                        href="https://www.linkedin.com/in/donia-meunier-06837222b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="inherit"
                    >
                        LinkedIn
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
}