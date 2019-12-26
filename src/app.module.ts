import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import Author from './authors/entity/author.entity';
import Book from './books/entity/books.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // url: process.env.MONGODB_URL,
      url: process.env.MONGODB_URL,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      synchronize: Boolean(process.env.DB_SYNCRONIZE),
      logging: Boolean(process.env.DB_LOGGING),
      entities: [
        Author,
        Book
      ],
    }),
    AuthorsModule,
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
