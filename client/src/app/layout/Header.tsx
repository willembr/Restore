import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode : boolean
    toggleMe : () => void
}

export default function Header({ darkMode, toggleMe} : Props ){
    return (
        <AppBar position='static' sx={{ mb:4 }}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch 
                    color="secondary"
                    checked={darkMode}
                    onChange={toggleMe}
                />
            </Toolbar>
        </AppBar>
    )
}