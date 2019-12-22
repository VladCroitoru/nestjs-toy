import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import AuthorDTO from '../dto/author.dto';
import Author from '../entity/author.entity';
import CreateAuthorDTO from '../dto/create-author.dto';

export class AuthorsMapper {

    static toDTO(author: Author): AuthorDTO {
        return plainToClass(AuthorDTO, author);
    }

    static toDTOs(authors: Author[]): AuthorDTO[] {
        return authors.map(author => this.toDTO(author));
    }

    static toEntity(authorDTO: AuthorDTO | CreateAuthorDTO): Author {
        return plainToClass(Author, authorDTO);
    }

    static toEntities(authorDTOs: AuthorDTO[]): Author[] {
        return authorDTOs.map(authorDTO => this.toEntity(authorDTO));
    }
}
