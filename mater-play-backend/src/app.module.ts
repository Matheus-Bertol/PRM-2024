import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from './controlers/movie-controller';
import { MovieService } from './services/movie-service';
import { Movie } from './entities/movie-entity';

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
      entities: [Movie],
      synchronize: true,
    }),
  TypeOrmModule.forFeature([Movie]),
  ],
  controllers:[MovieController],
  providers:[MovieService],
})
export class AppModule {}