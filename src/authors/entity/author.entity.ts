import { Entity, Column, CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { Type } from 'class-transformer';

@Entity()
export default class Author {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @Type(type => Date)
    birthDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}