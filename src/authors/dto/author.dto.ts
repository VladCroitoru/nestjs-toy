import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export default class AuthorDTO {

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsDateString()
    @ApiProperty({ type: String, format: 'date-time' })
    birthDate: Date;
}