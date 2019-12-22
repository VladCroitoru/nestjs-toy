import { Module } from '@nestjs/common';
import { AuthorsService } from './service/authors.service';
import { AuthorsController } from './controller/authors.controller';
import { AuthorsDAO } from './dao/authors.dao';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthorsController],
    providers: [AuthorsService, AuthorsDAO],
})
export class AuthorsModule { }
