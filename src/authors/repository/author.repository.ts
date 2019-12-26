import { MongoRepository, EntityRepository } from "typeorm";
import Author from "../entity/author.entity";

@EntityRepository(Author)
export default class AuthorRepository extends MongoRepository<Author> {
}