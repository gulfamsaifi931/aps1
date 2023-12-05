import dbConn from "@/utils/dbConn";
import Product from "@/models/Products";
import { NextResponse } from "next/server";


export async function GET() {
  await dbConn();
  const productlist = await Product.find();
  return NextResponse.json({ productlist });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConn();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
