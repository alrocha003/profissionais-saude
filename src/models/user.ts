import mongoose, { Schema } from "mongoose";

class UserModel extends Schema {
    db: mongoose.Mongoose | undefined;
    model: any | undefined;
    _id: Number | undefined;
    name: String | undefined;
    ocupation: String | undefined;
    email: String | undefined;
    age: Number | undefined;

    constructor(db: mongoose.Mongoose, name: String,
        ocupation: String, email: String, age: Number) {
        super();
        this._id = 12333;
        this.name = name;
        this.ocupation = ocupation;
        this.email = email;
        this.age = age;

        let model = db.model('usuarios_collection', this.getSchema(db));
        this.model = new model({
            _id: this._id,
            name: this.name,
            ocupation: this.ocupation,
            email: this.email,
            age: this.age
        });
    }

    getSchema = (db: mongoose.Mongoose) => new db.Schema({
        _id: Number,
        name: String,
        ocupation: String,
        email: String,
        age: Number
    });

    save = () => this.model.save();
}

export default UserModel;