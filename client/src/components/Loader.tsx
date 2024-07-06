import {Box, CircularProgress} from "@mui/material";
import {FC} from "react";

export const Loader: FC = () => {
    return (
        <Box display="flex" justifyContent="center" sx={{mt: 2}}>
            <CircularProgress/>
        </Box>
    );
}