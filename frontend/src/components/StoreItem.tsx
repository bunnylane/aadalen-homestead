import { Button, Card, CardActions, CardMedia, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { formatCurrency } from "../utilities/formatCurrency"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useShoppingCart } from "../contexts/ShoppingCart";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";

type StoreItemProps = {
    id: number
    title: string
    price: number
    imgUrl: string
    numItems: number
    description: string
}

export default function StoreItem({ id, title, numItems, description, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id)

    const priceFormatted = formatCurrency(price)

    const [shadow, setShadow] = useState<number>(1)

    return <Card sx={{ maxWidth: 300, boxShadow: shadow }} onMouseOver={() => setShadow(10)} onMouseOut={() => setShadow(1)}>
        <CardMedia
            component="img"
            style={{ objectFit: "contain" }}
            height="300"
            image={imgUrl}
        />
        <Box>
            <Typography variant="subtitle1" paddingLeft={2} fontFamily="'Raleway'">
                {title}
            </Typography>
        </Box>

        <Box>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <Typography paddingX={2}>
                        {numItems === 0 ? <CircleIcon fontSize="small" style={{ color: "red" }} /> : null}
                        {numItems > 0 && numItems < 50 ? <CircleIcon fontSize="small" style={{ color: "yellow" }} /> : null}
                        {numItems >= 50 ? <CircleIcon fontSize="small" style={{ color: "green" }} /> : null}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">
                        {numItems} stk. igjen.
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box>
            <Typography variant="caption" padding={2}>
                {description}
            </Typography>
        </Box>

        <Box>
            <Typography variant="caption" padding={2} color="text.secondary">
                {priceFormatted}
            </Typography>
        </Box>

        <CardActions>
            {numItems <= 0 ?
                <Button disabled size="large" fullWidth variant="text">Utsolgt</Button>
                :
                <>
                    {quantity === 0 ?
                        (
                            <Button fullWidth onClick={() => increaseCartQuantity(id)} variant="contained" size="large">Legg i handlekurv</Button>
                        ) : (
                            <Grid container alignItems="center" justifyContent="space-between">
                                {quantity === 1 ?
                                    (
                                        <Grid>
                                            <Button onClick={() => removeFromCart(id)} variant="text" size="small">
                                                <DeleteIcon />
                                            </Button>
                                        </Grid>
                                    ) : (
                                        <Grid>
                                            <Button onClick={() => decreaseCartQuantity(id)} variant="text" size="small">
                                                <RemoveIcon />
                                            </Button>
                                        </Grid>
                                    )}
                                <Grid justifyContent="space-between" >
                                    <Typography color="text.secondary" style={{ fontWeight: 800 }} variant="caption">{quantity}x </Typography>
                                    <Typography color="text.secondary" variant="caption">{priceFormatted}</Typography>
                                </Grid>
                                <Grid>
                                    <Button onClick={() => increaseCartQuantity(id)} variant="text" size="small"><AddIcon /></Button>
                                </Grid>
                            </Grid>
                        )}
                </>
            }
        </CardActions>
    </Card>
}