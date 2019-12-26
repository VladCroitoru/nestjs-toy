import { Entity, Column, CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class Author {

    @ObjectIdColumn()
    @Type(type => String)
    @ApiProperty({ type: () => String })
    id: ObjectID;

    @Column()
    @ApiProperty()
    firstName: string;

    @Column()
    @ApiProperty()
    lastName: string;

    @Column()
    @Type(type => Date)
    @ApiProperty({ type: String, format: 'date-time' })
    birthDate: Date;

    @CreateDateColumn()
    @ApiProperty({ type: String, format: 'date-time' })
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty({ type: String, format: 'date-time' })
    updatedAt: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}