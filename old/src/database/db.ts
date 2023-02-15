import * as mongoose from 'mongoose';
import UserModel from '../models/user';

class Database {
    db: mongoose.Mongoose;
    user: String = '';
    password: String = '';

    constructor() {
        mongoose.connect(`mongodb+srv://${this.user}:${this.password}@cluster0.tu0qzfx.mongodb.net/?retryWrites=true&w=majority`)
            .then(ret => console.info.bind(console, ret))
            .catch(error => console.error.bind(console, error));
        this.db = mongoose
    };
}

export default Database;