import { Box, Container, Stack, Typography } from "@mui/material"
import MovieCard from "../MovieCard"
const movies =[
    { "poster": "assets/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg" },
    { "poster": "assets/7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg" },
    { "poster": "assets/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg" },
    { "poster": "assets/cQLJT6hTXio0md94oBsSWADOECf.jpg" },
    { "poster": "assets/dYwihSnQmCVuIQbuG9n18BK5Iqd.jpg" },
    { "poster": "assets/gyEnhITeHLky85XJxuTPqniPrzE.jpg" },
    { "poster": "assets/house-of-dragons-poster.jpg" },
    { "poster": "assets/mAbuZuS4CqlTI6lvWIxPRHppbVs.jpg" },
    { "poster": "assets/xNSsIyZcbESWBm42VTo09zbjS6s.jpg" },
    { "poster": "assets/xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg" }
  ]
  
type SectionProps= {
    title: string;
}
function Section({
    title
}: SectionProps){
    return(
        <Box>
            <Container>
                <Typography 
                sx={{
                    fontWeight: 400,
                    paddingTop: '2rem'
                }}
                variant="h6"
                >
                    {title}
                </Typography>
                <Stack
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY : '1rem'
                    
                }}
                direction="row"
                spacing={0.3}
                >

{movies.map((movie, item) => (
    <MovieCard key={item} poster={movie.poster} />
  ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default Section