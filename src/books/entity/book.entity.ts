import { Entity, Column, CreateDateColumn, ManyToOne, ObjectIdColumn, UpdateDateColumn, Timestamp, JoinTable, JoinColumn, TableForeignKey } from 'typeorm';
import { ObjectID } from 'mongodb';
import Author from '../../authors/entity/author.entity';
import { Type, Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class Book {

    @ObjectIdColumn()
    @Type(type => String)
    @ApiProperty({ type: () => String })
    id: ObjectID;

    @Exclude()
    @Column()
    @Type(type => String)
    authorId: ObjectID;

    @ManyToOne(type => Author, { eager: true })
    @JoinColumn({ name: 'authorId', referencedColumnName: 'id' })
    @ApiProperty()
    author: Author;

    @Column()
    @ApiProperty()
    title: string;

    @Column()
    @ApiProperty()
    iban: string;

    @Column()
    @Type(() => Date)
    @ApiProperty({ type: String, format: 'date-time' })
    publishedAt: Date;

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