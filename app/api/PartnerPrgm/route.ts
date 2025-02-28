import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import axios from "axios";

export async function POST(req) {
    const formData = await req.json();
    console.log(formData, "SubmitContact");

    let pool;
    try {
        pool = await getDbConnection();

        // Use parameterized query to prevent SQL injection
        const result = await pool.request()
            .input('Name', formData?.Name)
            .input('Phone', formData?.Phone)
            .input('Contact_Person', formData?.Contact_Person)
            .input('RefreeName', formData?.RefreeName)
            .input('RefreeMobileNo', formData?.RefreeMobileNo)
            .input('RefreeMsg', formData?.RefreeMsg)
            .query(`
                INSERT INTO partnerprgm (Name, Phone, Contact_Person, RefreeName, RefreeMobileNo, RefreeMsg)
                VALUES (@Name, @Phone, @Contact_Person, @RefreeName, @RefreeMobileNo, @RefreeMsg)
            `);

        console.log(formData?.RefreeMobileNo, 'formData?.RefreeMobileNo')
        // Send WhatsApp message
        await SendWhatsAppMessgae(
            "AVYN",
            formData.RefreeMobileNo,
            "program_msg2",
            [
                { type: "text", text: formData.RefreeName },
                { type: "text", text: formData.Name },
                { type: "text", text: formData.RefreeMsg },
                { type: "text", text: `https://autovyn.com/` }
            ]
        );

        return NextResponse.json({ Message: "Request Submitted and Message Sent" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        if (pool) {
            pool.close();
        }
    }
}

// Function to send WhatsApp message
let whatsappmsgAuth;

async function getauthtoken() {
    try {
        const abcd = await axios.post(
            "https://messagingapi.charteredinfo.com/AuthTokenV1/AuthToken",
            {
                userId: "yuvraj@autovyn.com",
                password: "India@#50100",
            }
        );
        whatsappmsgAuth = abcd.data.txnOutcome;
        console.log(whatsappmsgAuth);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

async function SendWhatsAppMessgae(DLR_ID, number1, template, parameter) {
    if (!DLR_ID) {
        console.log("Missing DLR_ID.");
        return false;
    }

    const number = number1?.slice(-10);  // Ensure the number is 10 digits
    if (!/^\d+$/.test(number) || number.length !== 10) {
        console.log("Invalid phone number format.");
        return false;
    }

    // Ensure parameters are valid
    parameter.forEach((item) => {
        if (typeof item.text !== "string") {
            item.text = String(item.text);
        }
        if (item.text.trim() === "") {
            item.text = "N/A";  // Handle empty or invalid text
        }
    });

    // Check for authentication token
    if (!whatsappmsgAuth) {
        await getauthtoken();
    }

    const messagejson = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: `91${number}`,
        type: "template",
        template: {
            name: template.toLowerCase(),
            language: { code: "en" },
            components: [{ type: "body", parameters: parameter }],
        },
    };

    try {
        const response = await axios.post(
            "https://messagingapi.charteredinfo.com/v19.0/442952878893870/messages",
            messagejson,
            { headers: { Authorization: `Bearer ${whatsappmsgAuth}` } }
        );
        console.log("WhatsApp response:", response.data);
        return true;
    } catch (e) {
        console.error("Error sending message:", e.response?.data || e);
        return false;
    }
}
