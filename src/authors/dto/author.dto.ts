import { ObjectID } from 'typeorm';

export default class AuthorDTO {
    id: ObjectID;
    firstName: string;
    lastName: string;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
}