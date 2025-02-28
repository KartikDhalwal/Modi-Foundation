import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(req) {
    const formData = await req.json();
    console.log(formData, "SubmitContactSubmitContact");

    let pool;
    try {
        pool = await getDbConnection();

        // Construct the SELECT query to retrieve candidate data based on specific criteria
        const selectQuery = `
            select  Image AS Img,* from Testimonials WHERE active = '1'
        `;
        console.log('Executing SELECT Query:', selectQuery);

        // Execute the SELECT query to get candidate details
        const result = await pool.request().query(selectQuery);

        // Send the result to the frontend
        console.log('Retrieved Record:', result.recordset);
        return NextResponse.json({ Message: "Request Successful", Candidate: result.recordset });

    } catch (error) {
        console.error('Error executing query: ', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        if (pool) {
            pool.close();
        }
    }
}
