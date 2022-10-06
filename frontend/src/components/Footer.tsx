import { Height } from "@mui/icons-material";
import { BottomNavigation, Box, Container, Grid, Link } from "@mui/material";

export default function Footer() {
    return <footer className="site-footer">
        <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#1976d2" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box >
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                ...
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                    Logo &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </footer>
}