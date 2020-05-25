import mongoose from 'mongoose';

export const conectar = async () => {
    try {
        const dbUrl = 'mongodb://localhost:27017/SICAPOL';
        await mongoose.connect(dbUrl, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado a la BD en el puerto 27017');
    }
    catch(e) {
        console.log('Error al conectar' + e);
    }  
}