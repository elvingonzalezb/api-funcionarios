import { funcionarios } from './funcionarios';

export const resolvers = {
    Query: {
        funcionarios:() => {
            return funcionarios;
        }
    }
}