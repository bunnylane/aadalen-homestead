import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
import storeItems from "./../data/items.json";

export default function Store() {
    return <>
        <Grid container paddingTop={10} justifyContent="space-between" >
            {storeItems.map((item) => (
                <Grid container padding={2} key={item.id} xs={4}>
                    <StoreItem {...item} />
                </Grid>
            ))}
        </Grid>
    </>
}