import { Box, Paper, Typography } from "@mui/material";


export default function Index() {
    return <>
        <Box paddingTop={2} justifyContent="space-evenly" component="img" maxHeight={500} width="100%" src="/assets/farm.svg" />
        <Paper>
            <Typography variant="h2">Aadalen Gård</Typography>
        </Paper>
    </>
}