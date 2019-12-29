import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Author from 'src/authors/entity/author.entity';
import Book from 'src/books/entity/books.entity';

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
        })
    ]
})
export class DatabaseModule { }
