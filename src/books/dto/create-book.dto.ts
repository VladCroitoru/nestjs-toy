import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export default class CreateBookDTO {

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({
        minLength: 24
    })
    @IsString()
    authorId: string;

    @ApiProperty()
    @IsString()
    iban: string;

    @ApiProperty({
        type: Date,
        example: new Date()
    })
    @IsDateString()
    publishedAt: string;
}