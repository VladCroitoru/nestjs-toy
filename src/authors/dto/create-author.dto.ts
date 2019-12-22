import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export default class CreateAuthorDTO {

    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty({
        type: Date,
        example: new Date()
    })
    @IsDateString()
    birthDate: Date;
}