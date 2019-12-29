import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthorsModule,
    BooksModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
