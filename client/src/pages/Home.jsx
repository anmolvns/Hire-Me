import Header from "../components/Header";
import { Box, Typography, Button, styled } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {routePath} from '../routes/routes';

const Components = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 150px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 50,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48
        }
    }
})


const Home = () => {
    const navigate = useNavigate();


    const animatedImage = "https://img.freepik.com/premium-vector/girl-with-laptop-chair-freelance-studying-concept-illustration-vector_199064-194.jpg?w=740";
    return(
        <>
            <Header />
            <Components>
                <Box>
                    <Typography>Let's make your next<br/>great hire. Fast.</Typography>
                    <Button variant="contained" onClick={() => navigate(routePath.create)}>Post a job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" style={{width:600}} />
                </Box>
            </Components>
        </>
    )
}

export default Home;