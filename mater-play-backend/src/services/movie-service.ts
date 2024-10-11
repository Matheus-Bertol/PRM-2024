import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/entities/movie-entity";
import { Repository } from "typeorm";

export class MovieService{

    constructor(
        @InjectRepository(Movie)
        private repository: Repository<Movie>
    ) {}

    findAll(): Promise <Movie[]> {
        return this.repository.find();
    }
    
    findById(id: string): Promise <Movie> {
        return this.repository.findOneBy({id: id});
    }
}