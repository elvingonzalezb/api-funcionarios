import mongoose, { Schema } from 'mongoose';

const funcionarioSchema = new Schema({
    CEDULA: {
        type: String,
        maxlength :20, 
        required: true
    },
    APENOM: {
        type: String,
        maxlength :80, 
        required: true
    },
    DES_JER: {
        type: String,
        maxlength :30, 
        required: true
    },
    CARGO: {
        type: String,
        maxlength :40, 
        required: true
    },
    REGION: {
        type: String,
        maxlength :50, 
        required: true
    },
    NOM_REGION: {
        type: String,
        maxlength :50, 
        required: true
    },
    COMISARIA: {
        type: Number,
        maxlength :50, 
        required: true
    },
    NOM_COMISA: {
        type: String,
        maxlength :50, 
        required: true
    },
    FECHAIN: {
        type: String,
        maxlength :20, 
        required: true
    },
    DES_STATUS: {
        type: String,
        maxlength :20, 
        required: true
    },
    APELLIDOS: {
        type: String,
        maxlength :80, 
        required: true
    },
    NOMBRES: {
        type: String,
        maxlength :80, 
        required: true
    },
    TIPTRAB: {
        type: String,
        maxlength :20, 
        required: true
    },
})

export default mongoose.model('Funcionario', funcionarioSchema);