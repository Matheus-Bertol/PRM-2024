import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighLightSection() {
  return (
    <Box>
      <Container>
        <Stack
          direction="row"
        >
          <img src="assets/house-of-dragons-poster.jpg" />
          <Stack
            sx={{
              justifyContent: 'center',
              paddingLeft: '3rem'
            }}
          >
            <Typography
              variant="h4"
            >
              A Casa do Dragão
            </Typography>
            <Typography
              variant="subtitle2"
            >
              <span
                style={{
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  padding: '0.2rem',
                  marginRight: '0.3rem'
                }}
              >
                16
              </span>
              Aventura, Fantasia, Ação
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                paddingTop: '2rem',
                marginBottom: '0.5rem'
              }}
            >
              Sinopse
            </Typography>
            <Typography
              variant="body2"
            >
              House of the Dragon é um spin-off de Game of Thrones, que se passa 200 anos antes dos eventos da série original. A trama acompanha a ascensão e a queda da Casa Targaryen, focando nas disputas de poder que levam à guerra civil conhecida como a Dança dos Dragões.House of the Dragon é um spin-off de Game of Thrones, que se passa 200 anos antes dos eventos da série original. A trama acompanha a ascensão e a queda da Casa Targaryen, focando nas disputas de poder que levam à guerra civil conhecida como a Dança dos Dragões.
            </Typography>
            <Stack
              gap={1}
              direction="row"
              sx={{
                paddingY: '1rem'
              }}
            >
              <Button 
                variant="outlined"
              >
                Assistir
              </Button>
              <Button
                variant="outlined"
              >
                Detalhes
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>   
  )
}

export default HighLightSection;