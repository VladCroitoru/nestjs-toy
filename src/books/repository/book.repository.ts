import { MongoRepository, EntityRepository } from "typeorm";
import Book from "../entity/book.entity";

@EntityRepository(Book)
export default class BookRepository extends MongoRepository<Book> {
}