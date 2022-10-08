import { AppBar, Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return <footer className="site-footer">
        <AppBar position="sticky" color="secondary" sx={{ overflow: "hidden", minHeight: "350px", maxHeight: "350px"}}>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
                <Container maxWidth="xl">
                    <Grid container justifyContent="space-around">
                        <Grid item xs={12} sm={4} paddingY={2}>
                            <Box>
                                <Typography>Gratis frakt på Fast Levering</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption">Fast levering kan endres helt frem til 14.00 før kommende leveringsdag</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4} paddingY={2}>
                            <Box justifyContent="space-evenly" component="img" height={75} width="100%" sx={{transform: "scaleX(-1)}" }} src="/assets/bee.svg" />
                        </Grid>

                        <Grid item xs={12} sm={4} paddingY={2}>
                            <Box>
                                <Typography>Bestill innen 21.00 for levering neste dag</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption">Kontakt oss på mail på hei@bunnylane.no</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Button size="large" variant="outlined" sx={{zIndex: 1, borderRadius: 25 }} href="instagram://user?username=smabruketaadalen">
                            <InstagramIcon />
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Box position="absolute" component="img" height={300} width="100%"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    transform: "translate(10%, 50%)"
                }}
                src="/assets/purple_flowers.svg" />
            <Box position="absolute" component="img" height={300} width="100%"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    transform: "translate(-15%, 50%)"
                }}
                src="/assets/yellow_flowers.svg" />

        </AppBar>

    </footer>
}