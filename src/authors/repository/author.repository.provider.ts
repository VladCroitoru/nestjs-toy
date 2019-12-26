import AuthorRepository from './author.repository';
import { Connection } from 'typeorm';

export const AuthorRepositoryProvider = Object.freeze({
    provide: AuthorRepository.name,
    useFactory: (connection: Connection): AuthorRepository => connection.getCustomRepository<AuthorRepository>(AuthorRepository),
    inject: [Connection],
});