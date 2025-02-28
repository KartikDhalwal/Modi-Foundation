import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(req) {
    const formData = await req.json();
    console.log(formData, "SubmitEnquirySubmitEnquiry");
    let pool;
    try {
        pool = await getDbConnection();
        const result = await pool.request()
            .query(`INSERT INTO ProdEnq (Name, Email, Phone,Country,City, Company,Module, Aim,AddComment,Decs)
  VALUES 
  ('${formData?.name}', '${formData?.email}', '${formData?.phoneNumber}', '${formData?.country}', '${formData?.city}', '${formData?.company}', '${formData?.option1}', '${formData?.option2}', '${formData?.address}', '${formData?.additionalComment}')`);
        return NextResponse.json({ Message: "Request Submitted" });
    } catch (error) {
        console.error('Error executing query: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        if (pool) {
            pool.close();
        }
    }
}
