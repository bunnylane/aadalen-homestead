import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
import storeItems from "./../data/items.json";

export default function Store() {
    return <>
        <Grid container justifyContent="space-between" >
            {storeItems.map((item) => (
                <Grid item padding={1} key={item.id} xs={12} md={6} lg={4} xl={3}>
                    <StoreItem {...item} />
                </Grid>
            ))}
        </Grid>
    </>
}