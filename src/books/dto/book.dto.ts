import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export default class BookDTO {

    @IsString()
    @ApiProperty()
    title: string;

    @IsString()
    @ApiProperty()
    authorId: string;

    @IsString()
    @ApiProperty()
    iban: string;

    @IsDateString()
    @ApiProperty({ type: String, format: 'date-time' })
    publishedAt: Date;
}