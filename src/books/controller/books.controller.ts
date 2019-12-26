import { Controller, Get, Post, Put, Delete, UsePipes, ValidationPipe, Param, Body, Query } from '@nestjs/common';
import { BooksService } from '../service/books.service';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import BookDTO from '../dto/book.dto';
import Book from '../entity/books.entity';

@ApiTags('books')
@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get()
    @ApiOperation({ summary: 'Get all books' })
    @ApiQuery({ name: 'authorId', required: false, type: String })
    @ApiResponse({ type: [Book] })
    async getAll(@Query() authorId: string): Promise<Book[]> {
        return await this.booksService.getAll(authorId);
    }

    @Get(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Get a book by id' })
    @ApiResponse({ type: Book })
    async getById(@Param('id') id: string): Promise<Book> {
        return await this.booksService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create a book' })
    @ApiResponse({ type: Book })
    async create(@Body() bookDTO: BookDTO): Promise<Book> {
        return await this.booksService.create(bookDTO);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Update a book by id' })
    @ApiResponse({ type: Book })
    async update(@Param('id') id: string, @Body() bookDTO: BookDTO): Promise<Book> {
        return await this.booksService.upsert(id, bookDTO)
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Delete a book by id' })
    async delete(@Param('id') id: string): Promise<any> {
        return await this.booksService.deleteById(id);
    }
}
