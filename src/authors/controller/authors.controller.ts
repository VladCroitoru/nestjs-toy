import { Controller, Get, Post, Put, Delete, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import CreateAuthorDTO from '../dto/create-author.dto';
import AuthorDTO from '../dto/author.dto';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorsService: AuthorsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all authors' })
    async getAll(): Promise<AuthorDTO[]> {
        return await this.authorsService.getAll();
    }

    @Get(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Get an author by id' })
    async getById(@Param('id') id: string): Promise<AuthorDTO> {
        return await this.authorsService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create an author' })
    @ApiBody({ type: CreateAuthorDTO })
    async create(@Body() createAuthorDTO: CreateAuthorDTO): Promise<AuthorDTO> {
        return await this.authorsService.create(createAuthorDTO);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Update an author by id' })
    async update(@Param('id') id: string, @Body() createAuthorDTO: CreateAuthorDTO): Promise<AuthorDTO> {
        return await this.authorsService.upsert(id, createAuthorDTO);
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Delete an author by id' })
    async delete(@Param('id') id: string): Promise<any> {
        return await this.authorsService.deleteById(id);
    }
}
