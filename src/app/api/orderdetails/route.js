import dbConn from "@/utils/dbConn";
import Orderdetail from "@/models/orderdetails";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();
        await Orderdetail.create(body);
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
    const orderdetails = await Orderdetail.find();
    return NextResponse.json({ orderdetails });
  }
  
  export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await dbConn();
    await Orderdetail.findByIdAndDelete(id);
    return NextResponse.json({ message: "Orderdetail deleted" }, { status: 200 });
  }
  