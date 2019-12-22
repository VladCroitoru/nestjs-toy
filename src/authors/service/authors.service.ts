import { Injectable } from '@nestjs/common';
import { AuthorsDAO } from '../dao/authors.dao';
import { AuthorsMapper } from '../mapper/authors.mapper';
import CreateAuthorDTO from '../dto/create-author.dto';
import AuthorDTO from '../dto/author.dto';

@Injectable()
export class AuthorsService {

    private mapper = AuthorsMapper;

    constructor(private readonly authorsDAO: AuthorsDAO) { }

    async getAll(): Promise<AuthorDTO[]> {
        const authors = await this.authorsDAO.getAll();
        return this.mapper.toDTOs(authors);
    }

    async getById(id: string): Promise<AuthorDTO> {
        const author = await this.authorsDAO.getById(id);
        return this.mapper.toDTO(author);
    }

    async create(authorDTO: CreateAuthorDTO): Promise<AuthorDTO> {
        const author = this.mapper.toEntity(authorDTO);
        const result = await this.authorsDAO.create(author);
        return this.mapper.toDTO(result);
    }

    async upsert(id: string, authorDTO: CreateAuthorDTO): Promise<AuthorDTO> {
        const author = this.mapper.toEntity(authorDTO);
        const result = await this.authorsDAO.upsert(id, author);
        return this.mapper.toDTO(result);
    }

    async deleteById(id: string) {
        return await this.authorsDAO.deleteById(id);
    }
}
