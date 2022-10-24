import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { width } from "@mui/system";

export default function About() {
    return <>
        <Box paddingY={10}>
            <Box display="static" component="img" maxHeight={500} width="100%" src="/assets/farm.svg" />
            <Box>
                <Box paddingY={10}>
                    <Typography align="center" variant="h4">Ådalen Gård</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus, lectus nec pulvinar posuere, magna arcu tincidunt enim, in consequat nunc velit a risus. Curabitur tortor tellus, faucibus et diam vitae, aliquet laoreet quam. Vivamus sit amet fringilla diam. Duis sagittis sapien vel turpis luctus ornare. Duis bibendum ornare massa, sed rhoncus lorem euismod eget. Integer et ante turpis. Nulla semper quam nec quam ultricies hendrerit. Donec ornare justo nec enim consequat, nec egestas tellus congue. Morbi commodo faucibus enim eu venenatis. Vestibulum sollicitudin iaculis lacus, vel convallis augue finibus ac. Nulla non ex aliquam, feugiat felis eget, faucibus felis. Sed ac volutpat dolor, at pulvinar elit. Nunc gravida ex non iaculis accumsan. Ut eget varius erat. Pellentesque sed auctor justo, nec elementum leo. Nam mi arcu, commodo ut porta ac, ultrices non neque.

                        Fusce at elit at libero commodo laoreet id eu lorem. Curabitur blandit mi non velit posuere, quis mollis quam ultrices. Duis pellentesque ipsum leo, malesuada hendrerit augue interdum at. Cras sit amet tortor a magna ullamcorper condimentum nec in est. Sed ultrices nec libero fermentum consequat. Integer sit amet dolor quam. Aenean hendrerit turpis at magna mollis, vitae ultricies erat ornare. Etiam massa mauris, ornare nec ante vel, aliquet rutrum nisi. Maecenas non nibh varius, cursus ante sit amet, congue quam. Nam eu pharetra mauris. Vivamus non sagittis nisl. Aliquam accumsan leo id mollis tristique. Donec scelerisque ligula mi, a pellentesque odio elementum sed.
                    </Typography>
                </Box>
                <Box>
                    <Grid container paddingTop={5} justifyContent="space-between">
                        <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: 250, height: 250 }} src="/marie.png" alt="Marie Mack"></Avatar>
                            </Box>
                            <Box>
                                <Typography align="center" variant="h6">Marie Mack</Typography>
                                <Typography align="center">Nullam rutrum turpis non neque consectetur imperdiet. Vivamus metus nibh, semper vitae tempor ut, euismod ut tortor. Aenean at lorem non neque faucibus accumsan. Phasellus nec sapien nulla. Duis eu ultrices tellus. Aliquam venenatis, mi eu posuere eleifend, sapien dui elementum dolor, non pharetra orci nisl a tellus. Morbi commodo pulvinar sem, id fringilla justo scelerisque a. Morbi interdum quis eros in egestas.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Avatar sx={{ width: 250, height: 250 }} src="/christoffer.png" alt="Christoffer Mack"></Avatar>
                            </Box>
                            <Box>
                                <Typography align="center" variant="h6">Christoffer Mack</Typography>
                                <Typography align="center">Nullam rutrum turpis non neque consectetur imperdiet. Vivamus metus nibh, semper vitae tempor ut, euismod ut tortor. Aenean at lorem non neque faucibus accumsan. Phasellus nec sapien nulla. Duis eu ultrices tellus.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                <Box paddingY={10}>
                    <Typography align="center" variant="h4">Våre Dyr</Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus, lectus nec pulvinar posuere, magna arcu tincidunt enim, in consequat nunc velit a risus. Curabitur tortor tellus, faucibus et diam vitae, aliquet laoreet quam. Vivamus sit amet fringilla diam. Duis sagittis sapien vel turpis luctus ornare. Duis bibendum ornare massa, sed rhoncus lorem euismod eget. Integer et ante turpis. Nulla semper quam nec quam ultricies hendrerit. Donec ornare justo nec enim consequat, nec egestas tellus congue. Morbi commodo faucibus enim eu venenatis. Vestibulum sollicitudin iaculis lacus, vel convallis augue finibus ac. Nulla non ex aliquam, feugiat felis eget, faucibus felis. Sed ac volutpat dolor, at pulvinar elit. Nunc gravida ex non iaculis accumsan. Ut eget varius erat. Pellentesque sed auctor justo, nec elementum leo. Nam mi arcu, commodo ut porta ac, ultrices non neque.

                        Fusce at elit at libero commodo laoreet id eu lorem. Curabitur blandit mi non velit posuere, quis mollis quam ultrices. Duis pellentesque ipsum leo, malesuada hendrerit augue interdum at. Cras sit amet tortor a magna ullamcorper condimentum nec in est. Sed ultrices nec libero fermentum consequat. Integer sit amet dolor quam. Aenean hendrerit turpis at magna mollis, vitae ultricies erat ornare. Etiam massa mauris, ornare nec ante vel, aliquet rutrum nisi. Maecenas non nibh varius, cursus ante sit amet, congue quam. Nam eu pharetra mauris. Vivamus non sagittis nisl. Aliquam accumsan leo id mollis tristique. Donec scelerisque ligula mi, a pellentesque odio elementum sed.
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>
}