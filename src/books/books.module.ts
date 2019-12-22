import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller';
import { BooksService } from './service/books.service';
import { BooksDAO } from './dao/books.dao';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [BooksController],
    providers: [BooksService, BooksDAO]
})
export class BooksModule { }
