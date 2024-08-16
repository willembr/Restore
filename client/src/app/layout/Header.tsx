import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Icon, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [ 
    {
        title : 'catalog',
        path : '/catalog'
    },
    {
        title : 'about',
        path : '/about'
    },
    {
        title : 'contact',
        path : '/contact'
    }
];

const rightLinks = [ 
    {
        title : 'login',
        path : '/login'
    },
    {
        title : 'register',
        path : '/register'
    }
];

const navStyles = {
    color: 'inherit', 
    typography:'h6',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active' : {
        color: 'text.secondary'
    }
};

interface Props {
    darkMode : boolean
    toggleMe : () => void
}

export default function Header({ darkMode, toggleMe} : Props ){
    return (
        <AppBar position='static' sx={{ mb:4 }}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                <Box display='flex' alignItems='center' >
                <Typography 
                    variant="h6"
                    component={NavLink}
                    to='/'
                    sx={{color:'inherit', textDecoration:'none'}}
                >
                    RE-STORE
                </Typography>
                <Switch 
                    color="secondary"
                    checked={darkMode}
                    onChange={toggleMe}
                />
                </Box>
                <List sx={{display:'flex'}}>
                    {
                        midLinks.map( ({title, path}) => {
                            return (
                            <ListItem 
                                key={path}
                                component={NavLink}
                                to={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                            )
                        })
                    }
                </List >
                <Box display='flex' alignItems='center'>
                <IconButton size='large' edge='start' color='inherit' sx={{mr:2}}>
                    <Badge badgeContent='4' color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                <List sx={{display:'flex'}}>
                    {
                        rightLinks.map( ({title, path}) => {
                            return(
                                <ListItem 
                                    key={path}
                                    component={NavLink}
                                    to={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            )
                        })
                    }
                </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}