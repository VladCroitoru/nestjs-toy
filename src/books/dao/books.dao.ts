import { Injectable } from '@nestjs/common';
import { getMongoManager, MongoEntityManager, Timestamp } from 'typeorm';
import { ObjectID } from 'mongodb';
import Book from '../entity/books.entity';
import Author from 'src/authors/entity/author.entity';
import { classToClass } from 'class-transformer';

@Injectable()
export class BooksDAO {

    private manager: MongoEntityManager;

    constructor() {
        this.manager = getMongoManager();
    }

    async getAll(): Promise<Book[]> {
        const books = await this.manager.find(Book);
        return this.mapToAuthors(books);
    }

    async getById(id: string): Promise<Book> {
        const objectID = ObjectID(id);
        const book = await this.manager.findOne(Book, objectID);
        return this.mapToAuthor(book);
    }

    async getAllByAuthorId(id: string): Promise<Book[]> {
        const books = await this.manager.find(Book, { authorId: id });
        return this.mapToAuthors(books);
    }

    async create(book: Book): Promise<Book> {
        const result = await this.manager.save(book);
        return this.mapToAuthor(result);
    }

    async upsert(id: string, book: Book): Promise<any> {
        const objectID = ObjectID(id);
        book.updatedAt = new Date();
        return await this.manager.findOneAndUpdate(Book, { _id: objectID }, { $set: book }, { upsert: true });
    }

    async deleteById(id: string): Promise<any> {
        const objectID = ObjectID(id);
        return await this.manager.deleteOne(Book, { _id: objectID });
    }

    private async mapToAuthor(book: Book): Promise<Book> {
        const { authorId } = book;
        const author = await this.manager.findOne(Author, authorId);
        let result = classToClass(book);
        result.author = author;
        return result;
    }

    private async mapToAuthors(books: Book[]): Promise<Book[]> {
        const promises = books.map(async book => await this.mapToAuthor(book));
        return await Promise.all(promises);
    }
}
