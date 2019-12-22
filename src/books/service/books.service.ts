import { Injectable } from '@nestjs/common';
import { BooksDAO } from '../dao/books.dao';
import CreateBookDTO from '../dto/create-book.dto';
import { BooksMapper } from '../mapper/books.mapper';

@Injectable()
export class BooksService {

    private mapper = BooksMapper;

    constructor(private readonly booksDAO: BooksDAO) { }

    async getAll() {
        const books = await this.booksDAO.getAll();
        return this.mapper.toDTOs(books);
    }

    async getAllByAuthorId(id: string) {
        const books = await this.booksDAO.getAllByAuthorId(id);
        return this.mapper.toDTOs(books);
    }

    async getById(id: string) {
        const book = await this.booksDAO.getById(id);
        return this.mapper.toDTO(book);
    }

    async create(bookDTO: CreateBookDTO) {
        const book = this.mapper.toEntity(bookDTO);
        const result = await this.booksDAO.create(book);
        return this.mapper.toDTO(result);
    }

    async upsert(id: string, bookDTO: CreateBookDTO) {
        const book = this.mapper.toEntity(bookDTO);
        const result = await this.booksDAO.upsert(id, book);
        return this.mapper.toDTO(result);
    }

    async deleteById(id: string) {
        return await this.booksDAO.deleteById(id);
    }
}
