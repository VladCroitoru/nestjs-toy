import { Injectable } from '@nestjs/common';
import AuthorDTO from '../dto/author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Author from '../entity/author.entity';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb'
import { TransformClassToPlain } from 'class-transformer';

@Injectable()
export class AuthorsService {

    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: MongoRepository<Author>
    ) { }

    @TransformClassToPlain()
    async getAll(): Promise<Author[]> {
        return await this.authorRepository.find();
    }

    @TransformClassToPlain()
    async getById(id: string): Promise<Author> {
        const objectId = ObjectID(id);
        return await this.authorRepository.findOne(objectId);
    }

    @TransformClassToPlain()
    async create(authorDTO: AuthorDTO): Promise<Author> {
        const { firstName, lastName, birthDate } = authorDTO;
        const author = new Author({ firstName, lastName, birthDate })
        return await this.authorRepository.save(author);
    }

    @TransformClassToPlain()
    async upsert(id: string, authorDTO: AuthorDTO): Promise<Author> {
        const objectId = ObjectID(id);
        const { firstName, lastName, birthDate } = authorDTO;
        const author = new Author({ id: objectId, firstName, lastName, birthDate });
        return await this.authorRepository.save(author);
    }

    async deleteById(id: string) {
        const objectId = ObjectID(id)
        return await this.authorRepository.deleteOne({ _id: objectId });
    }
}
