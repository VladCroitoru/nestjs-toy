import { plainToClass } from 'class-transformer';
import BookDTO from '../dto/book.dto';
import Book from '../entity/books.entity';
import CreateBookDTO from '../dto/create-book.dto';

export class BooksMapper {

    static toDTO(book: Book): BookDTO {
        return plainToClass(BookDTO, book);
    }

    static toDTOs(books: Book[]): BookDTO[] {
        return books.map(book => this.toDTO(book));
    }

    static toEntity(bookDTO: BookDTO | CreateBookDTO): Book {
        return plainToClass(Book, bookDTO);
    }

    static toEntities(bookDTOs: BookDTO[]): Book[] {
        return bookDTOs.map(bookDTO => this.toEntity(bookDTO));
    }
}
