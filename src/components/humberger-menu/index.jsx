import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { handleMenuClick } from '../../redux/actions';

export default function HumburgerMenu() {
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = ()=>{
        dispatch(handleMenuClick(setMenuOpen, menuOpen));
    }

    const MenuContainer = styled(Box)(({ theme }) => ({
        zIndex: '40',
        position: 'fixed',
        top: '20px',
        right: '0px',
        bottom: 'auto',
        left: 'auto',
        display: 'flex',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
        justifyContent: 'center',
        alignItems: 'center',
    }));
	return (
		<MenuContainer>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}
                data-testid="menu"
            >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
        </MenuContainer>
	);
}