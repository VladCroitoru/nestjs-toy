import { Module } from '@nestjs/common';
import { AuthorsService } from './service/authors.service';
import { AuthorsController } from './controller/authors.controller';
import { AuthorRepositoryProvider } from './repository/author.repository.provider';

@Module({
    imports: [],
    controllers: [AuthorsController],
    providers: [AuthorsService, AuthorRepositoryProvider],
})
export class AuthorsModule { }
