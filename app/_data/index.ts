import mongoose from 'mongoose'

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

// if (!NEXT_PUBLIC_MONGODB_URI) throw new Error('MONGODB_URI not defined')
// if (!MONGODB_DB) throw new Error('MONGODB_DB not defined')

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(NEXT_PUBLIC_MONGODB_URI || '').then(mongoose => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect