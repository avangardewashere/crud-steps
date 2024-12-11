import connectMongoDB from "@/libs/mongodb";
import Idea from "@/models/Idea";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, description } = data;
  await connectMongoDB();

  await Idea.create({ title, description });
  return NextResponse.json(
    { message: "New Idea Created", data },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const idea = await Idea.find();
  return NextResponse.json({ idea });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Idea.findByIdAndDelete(id);

  return NextResponse.json(
    { message: "Idea has been Deleted." },
    { status: 200 }
  );
}
