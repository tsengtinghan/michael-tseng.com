export async function GET() {
    const readwise = process.env.READWISE_API_KEY;
    return Response.json({ test: "Hello World" }, { status: 200 });
}