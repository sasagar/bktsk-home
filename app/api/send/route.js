import EmailTemplate from "@/app/(mail)/_components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const noReply = process.env.RESEND_REPLY_ADDRESS;
const address = process.env.RESEND_ADDRESS;

export const POST = async (request) => {
	const req = await request.json();
	try {
		const data = await resend.emails.send({
			from: `BKTSK.com <${noReply}>`,
			to: [req.email],
			bcc: [address],
			subject: "Contact from BKTSK.com",
			react: EmailTemplate({ ...req }),
		});
		if (!data.error) return Response.json(data);

		return Response.json(
			{ error: data.error.message },
			{ status: data.error.statusCode },
		);
	} catch (error) {
		return Response.json({ error });
	}
};
