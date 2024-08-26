// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'API route is working!' });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}