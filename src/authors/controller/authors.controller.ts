import { Controller, Get, Post, Put, Delete, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import AuthorDTO from '../dto/author.dto';
import Author from '../entity/author.entity';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorsService: AuthorsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all authors' })
    @ApiResponse({ type: [Author] })
    async getAll(): Promise<AuthorDTO[]> {
        return await this.authorsService.getAll();
    }

    @Get(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Get an author by id' })
    @ApiResponse({ type: Author })
    async getById(@Param('id') id: string): Promise<Author> {
        return await this.authorsService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create an author' })
    @ApiResponse({ type: Author })
    async create(@Body() author: AuthorDTO): Promise<Author> {
        return await this.authorsService.create(author);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Update an author by id' })
    @ApiResponse({ type: Author })
    async update(@Param('id') id: string, @Body() authorDTO: AuthorDTO): Promise<Author> {
        return await this.authorsService.upsert(id, authorDTO);
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Delete an author by id' })
    async delete(@Param('id') id: string): Promise<any> {
        return await this.authorsService.deleteById(id);
    }
}
