import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Book from '../entity/books.entity';
import { MongoRepository } from 'typeorm';
import { TransformClassToPlain } from 'class-transformer';
import { ObjectID } from 'mongodb';
import BookDTO from '../dto/book.dto';
import Author from 'src/authors/entity/author.entity';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private readonly bookRepository: MongoRepository<Book>,
        @InjectRepository(Author) private readonly authorRepository: MongoRepository<Author>
    ) { }

    @TransformClassToPlain()
    async getAll(authorId: string): Promise<Book[]> {
        const queryParams = !!authorId ? authorId : {};
        const books = await this.bookRepository.find(queryParams);
        return this.mapToAuthors(books);
    }

    @TransformClassToPlain()
    async getById(id: string): Promise<Book> {
        const objectId = ObjectID(id);
        const book = await this.bookRepository.findOne(objectId);
        return await this.mapToAuthor(book);
    }

    @TransformClassToPlain()
    async create(bookDTO: BookDTO): Promise<Book> {
        const { title, authorId, iban, publishedAt } = bookDTO;
        const newBook = new Book({ title, authorId, iban, publishedAt });
        const book = await this.bookRepository.save(newBook);
        return this.mapToAuthor(book);
    }

    @TransformClassToPlain()
    async upsert(id: string, bookDTO: BookDTO): Promise<Book> {
        const objectId = ObjectID(id);
        const { title, authorId, iban, publishedAt } = bookDTO;
        const newBook = new Book({ id: objectId, title, authorId, iban, publishedAt });
        const book = await this.bookRepository.save(newBook);
        return this.mapToAuthor(book);
    }

    async deleteById(id: string): Promise<any> {
        const objectId = ObjectID(id)
        return await this.bookRepository.deleteOne({ _id: objectId });
    }

    private async mapToAuthor(book: Book): Promise<Book> {
        const { authorId } = book;
        const objectId = ObjectID(authorId);
        const author = await this.authorRepository.findOne(objectId);
        return new Book({ ...book, author });
    }

    private async mapToAuthors(books: Book[]): Promise<Book[]> {
        const promises = books.map(book => this.mapToAuthor(book));
        return Promise.all(promises);
    }
}
