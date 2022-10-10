import { Accordion, AccordionDetails, AccordionSummary, alpha, Card, CardActions, CardMedia, Grid, Modal, Rating, styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { formatCurrency } from "../utilities/formatCurrency"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useShoppingCart } from "../contexts/ShoppingCart";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import ItemButton from "./ItemButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type StoreItemProps = {
    id: number
    title: string
    price: number
    imgUrl: string
    numItems: number
    description: string
    longDescription: string
}


export default function StoreItem({ id, title, numItems, longDescription, description, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity } = useShoppingCart()

    const quantity = getItemQuantity(id)

    const priceFormatted = formatCurrency(price)

    const [hover, setHover] = useState<boolean>(false)

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return <Box display="flex" justifyContent="center">
        <Card sx={{
            maxWidth: 300,
            width: "100%",
            boxShadow: 10,
            border: hover === false ? "solid 2px transparent" : "solid 2px",
            borderColor: hover === false ? "white" : "#92a5a6",
            boxSizing: "border-box",
            cursor: "pointer"
        }} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <ItemModal open={open} item={{ id, title, longDescription, numItems, description, price, imgUrl }} handleClose={() => handleClose} />
            <Box onClick={handleOpen}>
                <CardMedia
                    component="img"
                    style={{ objectFit: "contain" }}
                    height="150"
                    image={imgUrl}
                />

                <Box paddingX={2} height={60}>
                    <Typography id="description" variant="subtitle1">{title}</Typography>
                </Box>
                <Box paddingX={2} height={50}>
                    <Typography id="description" variant="caption">{description}</Typography>
                </Box>
                <Box>
                    <Grid container>
                        <Grid xs={4}>
                            <Typography variant="caption" padding={2} color="text.secondary">{priceFormatted}</Typography>
                        </Grid>
                        <Grid xs={8}>
                            <Typography justifyContent="right" color="text.secondary" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }} variant="caption" paddingX={2}>
                                {numItems === 0 ? <CircleIcon fontSize="small" style={{ color: alpha("#FF0000", .5), paddingRight: 1 }} /> : null}
                                {numItems > 0 && numItems < 50 ? <CircleIcon fontSize="small" color="warning" style={{ color: alpha("#CCCC00", .5), paddingRight: 2 }} /> : null}
                                {numItems >= 50 ? <CircleIcon fontSize="small" style={{ color: alpha("#006400", .5), paddingRight: 1 }} /> : null}
                                {numItems >= 50 ? "50+ stk." : numItems.toString() + " stk."}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <CardActions sx={{zIndex: 200}}>
                <ItemButton id={id} numItems={numItems} price={priceFormatted} />
            </CardActions>
        </Card>
    </Box>
}

function ItemModal({ item, open, handleClose }: { item: StoreItemProps, open: boolean, handleClose: Function }) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    return <Modal
        open={open}
        onClose={handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box borderRadius={2} sx=
            {{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                maxHeight: "80%",
                transform: 'translate(-50%, -50%)',
                width: '30%',
                bgcolor: 'white',
                border: '4px solid black',
                boxShadow: 24,
                overflow: "auto"
            }}>
            <Card>
                <CardMedia
                    component="img"
                    style={{ objectFit: "contain" }}
                    height="30%"
                    image={item.imgUrl}
                    sx={{ cursor: "pointer" }}
                />
                <Typography paddingX={1} id="modal-modal-title" variant="h6" component="h2">
                    {item.title}
                </Typography>
                <Typography paddingX={1} id="modal-modal-description">
                    {item.description}
                </Typography>
                <Box sx={{ '& > legend': { mt: 2 } }}
                >
                    <Typography paddingX={1} component="legend">Vurdering</Typography>
                    <StyledRating
                        name="Vurdering"
                        defaultValue={2}
                        sx={{ paddingX: 1}}
                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Box>
                <SimpleAccordion description={item.longDescription} />
                <Box paddingTop={3} paddingX={1}>
                    <Typography variant="caption">
                        Produsert av Ådalen Småbruk
                    </Typography>
                </Box>
            </Card>
        </Box>


    </Modal>;
}

function SimpleAccordion({ description }: { description: string }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: 600 }} >Beskrivelse</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ fontWeight: 600 }}>Tilbakemeldinger</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header" >
                    <Typography sx={{ fontWeight: 600 }}>Næringsinnhold</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}