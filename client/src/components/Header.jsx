import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { routePath } from '../routes/routes';

import logo from '../assets/hm.png';


const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        textDecoration: 'none',
        color: 'inherit',
        marginRight: 20,
        fontSize: 14
    }
})


const Header = () =>{
    // const logo = "";

    return(
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.home}>
                    <img src={logo} alt="logo" style={{width:95, height: 68,marginBottom: 6}}/>
                </Link>
                <Link to={routePath.create}>Post a Job</Link>
                <Link to={routePath.posts}>Find Jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;