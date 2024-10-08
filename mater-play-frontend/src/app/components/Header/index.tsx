import { AppBar, Container, Toolbar, Typography, Box, Button, styled } from "@mui/material"

 const MenuButton = styled(Button)(
    {
        color:'#fff',
        fontWeight:'400',
 }
)

function Header(){
    return(
        <AppBar>
        <Container>
            <Toolbar>
                    <Typography 
                    variant="h6"
                    >
                        Mater Play
                    </Typography>
                    <Box
                    sx={{
                        paddingLeft: "1rem"
                    }}
                    >
                        <MenuButton variant="text" disabled>Todos</MenuButton>
                        <MenuButton variant="text">Séries</MenuButton>
                        <MenuButton variant="text">Filmes</MenuButton>
                    </Box>
            </Toolbar>
        </Container>
        </AppBar>
    )
}
export default Header