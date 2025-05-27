import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(); // Use your database name if not default
    
    const data = await request.json();

    // Basic validation
    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert the volunteer application
    const result = await db.collection('volunteers').insertOne({
      ...data,
      createdAt: new Date()
    });

    return NextResponse.json(
      { 
        success: true, 
        data: {
          id: result.insertedId,
          ...data
        } 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving volunteer:', error);
    return NextResponse.json(
      { success: false, message: 'Error saving volunteer data' },
      { status: 500 }
    );
  }
}