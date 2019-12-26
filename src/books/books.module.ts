import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller';
import { BooksService } from './service/books.service';
import { AuthorRepositoryProvider } from 'src/authors/repository/author.repository.provider';
import { BookRepositoryProvider } from './repository/book.repository.provider';

@Module({
    imports: [],
    controllers: [BooksController],
    providers: [BooksService, BookRepositoryProvider, AuthorRepositoryProvider]
})
export class BooksModule { }
