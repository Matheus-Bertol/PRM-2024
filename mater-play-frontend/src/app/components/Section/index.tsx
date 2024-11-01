import {Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/types";
import { MovieService } from "../../services/movies-services";
import { Category } from "@mui/icons-material";

type SectionProps = {
  title: string;
}
function Section({
}: SectionProps) {
  
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    
    if (Category.id){
    MovieService.getByCategoryId(Category.id)
      .then(result => {
        setMovies(result)
      });
    }

  }, []);
  
  return (
    <Box>
      <Container>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            paddingTop: '2rem'
          }}
        >
          { Category.name }
        </Typography>
        <Stack
          direction="row"
          gap={0.5}
          sx={{
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            paddingY: '1rem'
          }}
        >
          {movies.map(item => (
            <MovieCard key={item.id} poster={'assets/'+ item.poster} />
          ))}

        </Stack>
      </Container>
    </Box>
  )
}

export default Section;