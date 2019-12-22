import { Controller, Get, Post, Put, Delete, UsePipes, ValidationPipe, Param, Body } from '@nestjs/common';
import { BooksService } from '../service/books.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import BookDTO from '../dto/book.dto';
import CreateBookDTO from '../dto/create-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get()
    @ApiOperation({ summary: 'Get all books' })
    async getAll(): Promise<BookDTO[]> {
        return await this.booksService.getAll();
    }

    @Get('author/:id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Get books by author id' })
    async getAllByAuthorId(@Param('id') authorId: string) {
        return await this.booksService.getAllByAuthorId(authorId);
    }

    @Get(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Get a book by id' })
    async getById(@Param('id') id: string) {
        return await this.booksService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create a book' })
    async create(@Body() createBookDTO: CreateBookDTO) {
        return await this.booksService.create(createBookDTO);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Update a book by id' })
    async update(@Param('id') id: string, @Body() createBookDTO: CreateBookDTO) {
        return await this.booksService.upsert(id, createBookDTO)
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Delete a book by id' })
    async delete(@Param('id') id: string) {
        return await this.booksService.deleteById(id);
    }
}
