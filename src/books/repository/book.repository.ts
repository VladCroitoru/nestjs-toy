import { MongoRepository, EntityRepository } from "typeorm";
import Book from "../entity/books.entity";

@EntityRepository(Book)
export default class BookRepository extends MongoRepository<Book> {
}