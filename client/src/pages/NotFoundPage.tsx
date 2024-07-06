import {FC} from 'react';
import {Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
    return (
        <Container maxWidth="md" sx={{textAlign: 'center'}}>
            <Typography variant="h4" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Go to Home
            </Button>
        </Container>
    );
};

export default NotFoundPage;
