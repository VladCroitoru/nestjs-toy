import BookRepository from "./book.repository";
import { Connection } from "typeorm";

export const BookRepositoryProvider = Object.freeze({
    provide: BookRepository.name,
    useFactory: (connection: Connection): BookRepository => connection.getCustomRepository<BookRepository>(BookRepository),
    inject: [Connection],
});