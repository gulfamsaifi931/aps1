import dbConn from "@/utils/dbConn";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newMediaUrl: mediaUrl, newCode: code } = await request.json();
  await dbConn();
  await Product.findByIdAndUpdate(id, { name, mediaUrl, code });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConn();
  const products = await Product.findOne({ _id: id });
  return NextResponse.json({ products }, { status: 200 });
}
