// src/app/api/hello/route.ts
// API route for the hello endpoint

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'API route is working!' });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}