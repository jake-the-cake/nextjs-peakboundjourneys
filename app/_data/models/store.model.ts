import { models, model, Schema, Types } from 'mongoose'

const StoreSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Types.ObjectId,
    // required: true,
  },
  staff: {
    type: [Types.ObjectId],
  },
  products: {
    type: [Types.ObjectId],
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
})

const StoreModel = models.Store || model('Store', StoreSchema)

export default StoreModel