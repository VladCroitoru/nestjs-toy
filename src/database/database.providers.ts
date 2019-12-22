import { createConnection } from 'typeorm';
import Author from '../authors/entity/author.entity';
import Book from '../books/entity/books.entity';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mongodb',
            // url: process.env.MONGODB_URL,
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
    }
];