import { Injectable } from '@nestjs/common';
import { MongoEntityManager, getMongoManager, MongoRepository, getMongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import Author from '../entity/author.entity';

@Injectable()
export class AuthorsDAO {

    private manager: MongoEntityManager;

    constructor() {
        this.manager = getMongoManager();
    }

    async getAll(): Promise<Author[]> {
        return await this.manager.find(Author);
    }

    async getById(id: string): Promise<Author> {
        const objectID = ObjectID(id);
        return await this.manager.findOne(Author, objectID);
    }

    async create(author: Author): Promise<Author> {
        return await this.manager.save(author);
    }

    async upsert(id: string, author: Author): Promise<any> {
        const objectID = ObjectID(id);
        author.updatedAt = new Date();
        return await this.manager.findOneAndUpdate(Author, { _id: objectID }, { $set: author }, { upsert: true });
    }

    async deleteById(id: string): Promise<any> {
        const objectID = ObjectID(id);
        return await this.manager.deleteOne(Author, { _id: objectID })
    }
}
