import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(req) {
    const formData = await req.json();
    console.log(formData, "SubmitContactSubmitContact");
    let pool;
    try {
        pool = await getDbConnection();

        // Construct the query string with square brackets around 'Add'
        const query = `
            INSERT INTO Candidates 
            (Name, Email, Phone, City, State, [Add], Position_App, Avail_Start, Exp_Yrs, Prev_Job_Tit, Resume_Path)
            VALUES 
            ('${formData?.Name}', '${formData?.Email}', '${formData?.Phone}', '${formData?.City}', '${formData?.State}', 
            '${formData?.Address}', '${formData?.PositionApplied}', '${formData?.AvailabilityToStart}', '${formData?.YearsOfExp}', 
            '${formData?.PreJobTitle}', '${formData?.Resume}')
        `;
        console.log('Executing Query:', query);

        const result = await pool.request().query(query);

        console.log('hogya');
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
