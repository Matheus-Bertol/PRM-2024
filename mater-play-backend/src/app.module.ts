import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from './controlers/movie-controller';
import { MovieService } from './services/movie-service';
import { Movie } from './entities/movie-entity';
import { CategoryService } from './services/category-service';
import { CategoryController } from './controlers/category-controller';
import { Category } from './entities/category-entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Movie, Category],
      synchronize: true,
    }),
  TypeOrmModule.forFeature([Movie, Category]),
  ],
  controllers:[MovieController, CategoryController],
  providers:[MovieService, CategoryService],
})
export class AppModule {} 