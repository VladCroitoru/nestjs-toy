import AuthorDTO from '../../authors/dto/author.dto';
import { Exclude } from 'class-transformer';

export default class BookDTO {
    id: string;
    title: string;
    @Exclude() authorId: string;
    author: AuthorDTO;
    iban: string;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}