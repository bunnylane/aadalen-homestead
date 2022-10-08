import { Button, Card, CardActions, CardMedia, Grid, makeStyles, Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { formatCurrency } from "../utilities/formatCurrency"

import { useShoppingCart } from "../contexts/ShoppingCart";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import ItemButton from "./ItemButton";

type StoreItemProps = {
    id: number
    title: string
    price: number
    imgUrl: string
    numItems: number
    description: string
}



export default function StoreItem({ id, title, numItems, description, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity } = useShoppingCart()

    const quantity = getItemQuantity(id)

    const priceFormatted = formatCurrency(price)

    const [hover, setHover] = useState<boolean>(false)

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return <Box>
        <Card sx={{
            boxShadow: 10,
            maxWidth: 300,
            border: hover === false ? "solid 2px transparent" : "solid 2px",
            borderColor: hover === false ? "white" : "#92a5a6",
            boxSizing: "border-box"
        }} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <ItemModal open={open} imgUrl={imgUrl} handleClose={() => handleClose} />
            <CardMedia
                component="img"
                style={{ objectFit: "contain" }}
                height="250"
                image={imgUrl}
                onClick={handleOpen}
                sx={{ cursor: "pointer" }}
            />

            <Box paddingX={2} height={60}>
                <Typography id="description" variant="subtitle1">{title}</Typography>
            </Box>
            <Box paddingX={2} height={50}>
                <Typography id="description" variant="caption">{description}</Typography>
            </Box>
            <Box>
                <Grid container>
                    <Grid xs={5}>
                        <Typography variant="caption" padding={2} color="text.secondary">{priceFormatted}</Typography>
                    </Grid>
                    <Grid xs={7} textAlign="right">
                        <Typography align="justify" color="text.secondary" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }} variant="caption" paddingX={2}>
                            {numItems === 0 ? <CircleIcon fontSize="small" style={{ color: "red", paddingRight: 1 }} /> : null}
                            {numItems > 0 && numItems < 50 ? <CircleIcon fontSize="small" style={{ color: "yellow", paddingRight: 2 }} /> : null}
                            {numItems >= 50 ? <CircleIcon fontSize="small" style={{ color: "green", paddingRight: 1 }} /> : null}
                            {numItems >= 50 ? "50+ stk." : numItems.toString() + " stk."}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <CardActions>
                <ItemButton id={id} numItems={numItems} price={priceFormatted} />
            </CardActions>
        </Card>
    </Box>
}

function ItemModal({ open, imgUrl, handleClose }: { open: boolean, imgUrl: string, handleClose: Function }) {
    return <Modal
        open={open}
        onClose={handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >

        <Box sx=
            {{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'white',
                border: '2px solid',
                boxShadow: 24,
                p: 4,
            }}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>


    </Modal>;
}
