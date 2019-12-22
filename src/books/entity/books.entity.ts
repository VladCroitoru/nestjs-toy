import { Entity, Column, CreateDateColumn, ManyToOne, ObjectIdColumn, UpdateDateColumn, Timestamp } from 'typeorm';
import { ObjectID } from 'mongodb';
import Author from '../../authors/entity/author.entity';
import { Type, Transform } from 'class-transformer';

@Entity()
export default class Book {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Transform(input => ObjectID(input))
    authorId: ObjectID;

    @ManyToOne(type => Author)
    author: Author;

    @Column()
    title: string;

    @Column()
    iban: string;

    @Column()
    @Type(() => Date)
    publishedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}