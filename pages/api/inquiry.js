// import Inquiry from "../../models/inquiry";
// import connectDb from "../../utils/db";
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     await connectDb();
//     let mailError = "";

//     try {
//       const { name, email, mobile, location, query } = req.body;

//       const newInquire = new Inquiry({ name, email, mobile, location, query });
//       await newInquire.save();



//       try {
//         const transporter = nodemailer.createTransport({
//           service: "Gmail",
//           auth: {
//             user: process.env.FROM_EMAIL_ADDRESS,
//             pass: process.env.FROM_EMAIL_PASS,
//           },
//         });
//         const mailOption = {
//           from: process.env.FROM_EMAIL_ADDRESS,
//           to: process.env.TO_EMAIL_PASS,
//           subject: "Floppy Technology",
//           text : `
//                 name : ${name}
//                 Email : ${email}
//                 Mobile : ${mobile}
//                 location : ${location}
//                 query : ${query}
//           `
//         };
//         await transporter.sendMail(mailOption);
//         mailError = "Success"
//       } catch (err) {
//         mailError = err.message;
//       }
//       console.log(mailError);
//       res.status(200).json({ message: {mailError} });
//     } catch (err) {
//       res.status(500).json({ message: {mailError} });
//     }
//   }
// }