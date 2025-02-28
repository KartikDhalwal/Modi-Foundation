import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(req) {
    const formData = await req.json();
    console.log(formData,"SubmitContactSubmitContact");
    let pool;
    try {
        pool = await getDbConnection();
        const result = await pool.request()
        .query(`INSERT INTO ContactUs (Name, Email, Phone, Decs)
  VALUES 
  ('${formData?.Name}', '${formData?.email}', '${formData?.mobile}', '${formData?.message}')`);        
  console.log('hogya')
  return NextResponse.json({Message:"Request Submitted"});
    } catch (error) {
        console.error('Error executing query: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        if (pool) {
            pool.close();
        }
    }
}
