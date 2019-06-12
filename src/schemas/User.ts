import { Schema, model, Document } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

interface UserInterface extends Document {
    email?: string;
    firstName?: string;
    lastName?: string;

    fullName(): string;
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

UserSchema.plugin(mongoosePaginate)

export default model<UserInterface>('User', UserSchema)
