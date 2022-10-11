import * as mongoose from 'mongoose';
import UserModel from '../models/user';

class Database {
    db: mongoose.Mongoose;
    password: String = '1234';

    constructor() {
        mongoose.connect('mongodb+srv://<user>:<password>@cluster0.tu0qzfx.mongodb.net/?retryWrites=true&w=majority')
            .then(ret => console.info.bind(console, ret))
            .catch(error => console.error.bind(console, error));
        this.db = mongoose
    };
}

export default Database;