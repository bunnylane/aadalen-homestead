import { Button, Grid, Typography } from "@mui/material";
import { useShoppingCart } from "../contexts/ShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemButton({ id, numItems, price }: { id: number, numItems: number, price: string }) {
    return <>
        {numItems <= 0 ? <ButtonSoldOut /> : <ButtonAddToCart id={id} price={price}/>}
    </>
}

function ButtonAddToCart({id, price} : {id: number, price: string}) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return <>
        {quantity === 0 ?
            (
                <Button fullWidth sx={{ whiteSpace: "nowrap" }}onClick={() => increaseCartQuantity(id)} variant="contained" size="large">Legg i handlekurv</Button>
            ) : (
                <Grid container alignItems="center" justifyContent="space-between">
                    {quantity <= 1 ?
                        (
                            <Grid item xs={3}>
                                <Button onClick={() => removeFromCart(id)} variant="text" size="large">
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                        ) : (
                            <Grid item xs={3}>
                                <Button onClick={() => decreaseCartQuantity(id)} variant="text" size="large">
                                    <RemoveIcon />
                                </Button>
                            </Grid>
                        )}
                    <Grid item xs={6} textAlign="center">
                        <Typography color="text.secondary" sx={{ fontWeight: 800 }} variant="caption">{quantity}x </Typography>
                        <Typography color="text.secondary" variant="caption">{price}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => increaseCartQuantity(id)} variant="text" size="large"><AddIcon /></Button>
                    </Grid>
                </Grid>
            )}
    </>;
}

function ButtonSoldOut() {
    return <Button disabled size="large" fullWidth variant="outlined">Utsolgt</Button>
}