export async function GET() {
    return Response.json({ test: "Hello World" }, { status: 200 });
}