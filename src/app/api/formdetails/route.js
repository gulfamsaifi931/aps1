import dbConn from "@/utils/dbConn";
import Formdetail from "@/models/formdetails";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();
        await Formdetail.create(body);
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
    const formdetails = await Formdetail.find();
    return NextResponse.json({ formdetails });
  }
  
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await dbConn();
    await Formdetail.findByIdAndDelete(id);
    return NextResponse.json({ message: "Formdetail deleted" }, { status: 200 });
  }
  

