import dbConn from "@/utils/dbConn";
import Door_form from "@/models/door_form";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();
        await Door_form.create(body);
        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        })
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}

export async function GET() {
    await dbConn();
    const door_form = await Door_form.find();
    return NextResponse.json({ door_form });
  }
  
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await dbConn();
    await Door_form.findByIdAndDelete(id);
    return NextResponse.json({ message: "Door_form deleted" }, { status: 200 });
  }
  