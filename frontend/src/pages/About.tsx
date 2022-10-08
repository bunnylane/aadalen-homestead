import { Box, Grid, Paper, Typography } from "@mui/material";

export default function About() {
    return  <>
    <Box>
        <Grid container justifyContent="space-between">
            <Grid item>
                <Box paddingTop={2} justifyContent="space-evenly" component="img" height={300} width="100%" src="/assets/engelsviken.svg" />
            </Grid>
            <Grid item>
                <Typography>
                    Hei på deg
                </Typography>
            </Grid>
        </Grid>
    </Box>
</>
}