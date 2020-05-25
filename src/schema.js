import { makeExecutableSchema } from 'graphql-tools';
import {resolvers } from './resolvers';

const typeDefs = `
    type Query {
        funcionarios: [Funcionario]
    }

    type Funcionario {
        _id: ID
        CEDULA: String
        APENOM: String
        DES_JER: String
        CARGO: String
        REGION: String
        NOM_REGION: String
        COMISARIA: Int
        NOM_COMISA: String
        FECHAIN: String
        DES_STATUS: String
        APELLIDOS: String
        NOMBRES: String
        TIPTRAB: String
    }

    type Mutation {
        registrarFuncionario(input: FuncionarioInput): Funcionario
        eliminarFuncionario(_id: ID): Funcionario
        actualizarFuncionario(_id: ID, input: FuncionarioInput): Funcionario
    }

    input FuncionarioInput {
        CEDULA: String
        APENOM: String
        DES_JER: String
        CARGO: String
        REGION: String
        NOM_REGION: String
        COMISARIA: Int
        NOM_COMISA: String
        FECHAIN: String
        DES_STATUS: String
        APELLIDOS: String
        NOMBRES: String
        TIPTRAB: String
    }

    `;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})