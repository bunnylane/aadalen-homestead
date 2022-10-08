import React, { useState } from 'react';
import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, Grid, IconButton, ImageListItemBar, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { b2cPolicies, loginRequest } from '../authentication/authConfig';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useShoppingCart } from '../contexts/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import storeItems from "./../data/items.json";
import { formatCurrency } from '../utilities/formatCurrency';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ResponsiveAppBar() {
    return (
        <Box>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar>
                        <NavigationRoutes />
                        <Logo />
                        <ShoppingCart />
                        <SignIn />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

function NavigationRoutes() {
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const pages = [
        { endpoint: 'store', display: 'Butikk'},
        { endpoint: 'blog', display: 'Blogg'},
        { endpoint: 'about', display: 'Om Oss'},

    ];

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <Link key={"collapse" + page} href={page.endpoint}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.display}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, whiteSpace: "nowrap", display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button href={page.endpoint} size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: "secondary.main", display: 'block' }} >
                        {page.display}
                    </Button>
                ))}
            </Box>
        </>);
}


function Logo() {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <Box paddingLeft={2} justifyContent="space-evenly" component="img" height={30} sx={{ transform: "scaleX(-1)}", display: { xs: 'flex' }, mr: 1 }} src="/assets/bee.svg" />
            </Grid>
            <Grid item xs="auto">
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 400,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >Ådalen</Typography>
            </Grid>
        </Grid>
    );
}

function ShoppingCart() {
    const { getTotalItems, getItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    const [isOpen, setDrawer] = useState<boolean>(false);

    function GetItem(id: number) {
        return storeItems.find(i => i.id === id)
    }

    function ListCart() {
        return <Box role='presentation'>
            <List sx={{ width: 300 }}>
                {getTotalItems() === 0 ?
                    <Box justifyContent="space-between">
                        <ListItem >
                            <ListItemText primary="Handlevognen er tom" />
                        </ListItem>
                    </Box>
                    : null}
                {getItems().map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <Grid container justifyContent="space-between">
                            <Grid item xs={4}>
                                <Box component="img" sx=
                                    {{
                                        height: 100,
                                        width: 100,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                        objectFit: "contain"
                                    }}
                                    alt="The house from the offer."
                                    src={GetItem(item.id)?.imgUrl}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container direction="column" alignItems="flex-start" justifyContent="space-between">
                                    <Grid >
                                        <ListItemText primary={GetItem(item.id)?.title} />
                                    </Grid>
                                    <Grid item>
                                        <ListItemText primary={formatCurrency((GetItem(item.id)?.price || 0) * getItemQuantity(item.id))} />
                                    </Grid>
                                    <Grid item>
                                        <Grid container justifyContent="space-between">
                                            <Grid item>
                                                <ListItemText primary={"Quantity " + getItemQuantity(item.id).toString()} />
                                            </Grid>
                                            <Grid item>
                                                <Button size='small' onClick={() => removeFromCart(item.id)}><DeleteIcon /></Button>
                                            </Grid>
                                        </Grid>
                                    </Grid >
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {getTotalItems() > 0 ?
                <Box padding={2}>
                    <Typography>
                        {formatCurrency(getItems().reduce((price, item) => price + (GetItem(item?.id)?.price || 0) * getItemQuantity(item?.id), 0))}
                    </Typography>
                    <Link href="checkout">
                        <Button fullWidth variant='contained'>
                            <Typography>Checkout</Typography>
                        </Button>
                    </Link>
                </Box>
                : null}
        </Box>
    }

    return <>
        <React.Fragment>
            <Button size='large' onClick={() => setDrawer(true)}>
                <ShoppingBasketIcon color='secondary' />
                <Typography sx={{ transform: "translate(0, -50%)" }} color='secondary'>{getTotalItems()}</Typography>
            </Button>
            <Drawer anchor='right' open={isOpen} onClose={() => setDrawer(false)}>
                <ListCart />
            </Drawer>
        </React.Fragment>
    </>
}

function SignIn() {
    const { instance, accounts } = useMsal();


    const settings = [
        { name: 'Edit Profile', action: () => instance.loginRedirect(b2cPolicies.authorities.editProfile) },
        { name: 'Orders', action: () => window.location.href = "/orders" },
        { name: 'Sign Out', action: () => instance.logoutRedirect({ postLogoutRedirectUri: "/" }) }
    ];

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AuthenticatedTemplate>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <Button size='large' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <PersonIcon sx={{ color:"secondary.main" }} />
                        </Button>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem key="user" sx={{ pointerEvents: "none" }}>
                            <Typography sx={{ fontWeight: 'bold' }} variant='h6' textAlign="center">{accounts[0]?.name}</Typography>
                        </MenuItem>

                        <MenuItem key="username" sx={{ pointerEvents: "none", transform: "translate(0, -25%)" }}>
                            <Typography variant='caption' textAlign="center">{accounts[0]?.username}</Typography>
                        </MenuItem>

                        {settings.map((setting) => (
                            <MenuItem key={setting.name} onClick={setting.action}>
                                <Typography color="text.secondary" onClick={setting.action} textAlign="center">{setting.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Box sx={{ whiteSpace: "nowrap" }}>
                    <Button onClick={() => instance.loginRedirect(loginRequest)} size='large' sx={{ color: "secondary.main", my: 2, display: 'block' }} >
                        Logg Inn
                    </Button>
                </Box>
            </UnauthenticatedTemplate>
        </>
    )
}
