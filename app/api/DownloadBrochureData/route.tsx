import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import axios from "axios";
export async function POST(req) {
  const formData = await req.json();
  console.log(formData, "DownloadBrochureDownloadBrochure");
  let pool;
  try {
    pool = await getDbConnection();

        const result = await pool.request()
          .query(`INSERT INTO Brochure (Name, Email, Phone, City, Company, Bro_code)
    VALUES
    ('${formData?.Name}', '${formData?.email}', '${formData?.phone}', '${formData?.city}', '${formData?.company}', '${formData?.Bro_Code}')`);
    console.log(result,'result')
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error Sending Message: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } 
}
