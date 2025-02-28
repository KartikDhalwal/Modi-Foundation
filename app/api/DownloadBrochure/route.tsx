import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import axios from "axios";
export async function POST(req) {
  const formData = await req.json();
  console.log(formData, "DownloadBrochureDownloadBrochure");
  // let pool;
  try {
    // pool = await getDbConnection();
    const a = await SendWhatsAppMessgae("AVYN", formData?.formData?.phone, "msg_code_2", [
      {
        type: "text",
        text: formData?.otp,
      },
      {
        type: "text",
        text: "VYN Automation Pvt. Ltd.",
      },
    ]);
    console.log(a,'fcjbhvg')
    return NextResponse.json({Message : "Message Sent"});
  } catch (error) {
    console.error("Error Sending Message: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } 
}
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
async function SendWhatsAppMessgae(
  DLR_ID,
  number1,
  template,
  parameter,
  tokenex,
  ImageId = null
) {
  if (!DLR_ID) {
    return false;
  }
  const number = number1?.slice(-10);
  if (!/^\d+$/.test(number) || number.length != 10 || !number) {
    return false;
  }
  // return true
  parameter.forEach((item) => {
    if (typeof item.text !== "string") {
      // Check if the text property is not already a string
      item.text = String(item.text); // Convert the value to a string
    }
    if (item.text.trim() === "") {
      item.text = item.text ? String(item.text) : "N/A";
    }
  });
  if (
    DLR_ID.split("-")[0]?.toLowerCase() == "ranah" ||
    DLR_ID.split("-")[0]?.toLowerCase() == "rmpl"
  ) {
    // let messagejson = {
    //   "messaging_product": "whatsapp",
    //   "recipient_type": "individual",
    //   "to": `918209932832`,
    //   "type": "template",
    //   "template": {
    //     "name": template?.toLowerCase(),
    //     "language": {
    //       "code": "en"
    //     },
    //     "components": [
    //       {
    //         "type": "body",
    //         "parameters": parameter
    //       }
    //     ]
    //   }
    // }
    let messagejson = {
      to: `91${number}`,
      recipient_type: "individual",
      type: "template",
      template: {
        language: {
          policy: "deterministic",
          code: "en_US",
        },
        name: template?.toLowerCase(),
        components: [
          {
            type: "body",
            parameters: parameter,
          },
        ],
      },
    };
    let abcd2;
    try {
      // const url = "https://crm.helloall.in/api/meta/v19.0/322026744336000/messages"; // Replace with actual URL
      // const options = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer CT6ZGP8jfoD4YZmNfzFU035YllTb1hG9Ro3QIvLhK1U7V8YfDXIRsseMchLcUyZiH7YKOrd0NEKomN9eaO4kdV7VU5ERVJTQ09SRQ4HVU5ERVJTQ09SRQG2CYWe1zw3MHdGp2Fzu7P06IQeEQY0So' // Replace with your access token
      //   },
      //   body: JSON.stringify(messagejson)
      // };

      // // Send the request
      // fetch(url, options)
      //   .then(response => response.json())
      //   .then(data => console.log('Message sent successfully:', data))
      //   .catch(error => console.error('Error sending message:', error));

      abcd2 = await axios.post(
        "https://crm.helloall.in/api/meta/v19.0/322026744336000/messages",
        messagejson,
        {
          headers: {
            Authorization: `Bearer CT6ZGP8jfoD4YZmNfzFU035YllTb1hG9Ro3QIvLhK1U7V8YfDXIRsseMchLcUyZiH7YKOrd0NEKomN9eaO4kdV7VU5ERVJTQ09SRQ4HVU5ERVJTQ09SRQG2CYWe1zw3MHdGp2Fzu7P06IQeEQY0So`,
          },
        }
      );
      console.log(abcd2, "absc2");
      return true;
    } catch (e) {
      console.log(e);

      return false;
    }
  } else {
    let messagejson1 = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: `91${number}`,
      type: "template",
      template: {
        name: template?.toLowerCase(),
        language: {
          code: "en",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  id: ImageId,
                },
              },
            ],
          },
          {
            type: "body",
            parameters: parameter,
          },
        ],
      },
    };
    let messagejson = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: `91${number}`,
      type: "template",
      template: {
        name: template?.toLowerCase(),
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: parameter,
          },
        ],
      },
    };
    try {
      if (!whatsappmsgAuth) {
        await getauthtoken();
      }
      const abcd2 = await axios.post(
        "https://messagingapi.charteredinfo.com/v19.0/442952878893870/messages",
        ImageId ? messagejson1 : messagejson,
        {
          headers: {
            Authorization: `Bearer ${whatsappmsgAuth}`,
          },
        }
      );
      console.log(abcd2.data);

      return true;
    } catch (e) {
      console.log(e);
      if (tokenex == 1) {
        return false;
      } else {
        const data = await getauthtoken();
        if (data)
          await SendWhatsAppMessgae(DLR_ID, number, template, parameter, 1);
        console.log(e.response);
      }
    }
  }
}
exports.SendWhatsAppMessgae = SendWhatsAppMessgae;

