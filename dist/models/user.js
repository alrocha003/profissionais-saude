"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserModel extends mongoose_1.Schema {
    constructor(db, name, ocupation, email, age) {
        super();
        this.getSchema = (db) => new db.Schema({
            _id: Number,
            name: String,
            ocupation: String,
            email: String,
            age: Number
        });
        this.save = () => this.model.save();
        this._id = Math.random();
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
}
exports.default = UserModel;
