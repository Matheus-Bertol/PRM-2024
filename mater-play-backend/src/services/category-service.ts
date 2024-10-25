import { API } from './../../../mater-play-frontend/src/app/@libs/axios/index';
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entities/category-entity";
import { Repository } from "typeorm";
import { ICategory } from '../../../mater-play-frontend/src/app/@libs/types';

export class CategoryService{

    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>,
    ) {}

    findAll(): Promise <Category[]> {
        return this.repository.find();
    }
    
    findById(id: number): Promise <Category> {
        return this.repository.findOneBy({id: id});
    }

    save(category: Category): Promise<Category>{
        return this.repository.save(category);
    }

    async remove(id: number): Promise<void>{
        await this.repository.delete(id);
    }

}