import Funcionario from './models/funcionario';

export const resolvers = {
    Query: {
        async funcionarios() {
            return await Funcionario.find();
        }
    },
    Mutation: {
        async registrarFuncionario(_, { input }){
            const newFuncionario = new Funcionario(input)
            return await newFuncionario.save();
        },
        async eliminarFuncionario(_, { _id}){
            return await Funcionario.findByIdAndDelete(_id);
        },
        async actualizarFuncionario(_, { _id, input }) {
            return await Funcionario.findByIdAndUpdate(_id, input, { new: true});
        }
    }
}