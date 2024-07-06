import {FC} from "react";
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <AppBar position="static" sx={{mb: 3}}>
            <Toolbar>
                <Box sx={{display: 'flex', flexGrow: 1, gap: 3}}>
                    <Button variant="contained" color="info" component={Link} to="/main" sx={{width: '100px'}}>
                        Main
                    </Button>
                    <Button variant="contained" color="info" component={Link} to="/list" sx={{width: '100px'}}>
                        List
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
