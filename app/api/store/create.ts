import dbConnect from '@/app/_data';
import StoreModel from '@/app/_data/models/store.model';
import { NextApiRequest, NextApiResponse } from 'next';

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    dbConnect()
    const users = StoreModel
    
    const allUsers = await users.find({});

    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}