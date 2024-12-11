import connectMongoDB from "@/libs/mongodb";
import Idea from "@/models/Idea";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { title, description } = data;
  await connectMongoDB();

  await Idea.create({ title, description });
  return NextResponse.json(
    { message: "New Idea Created", data },
    { status: 201 }
  );
}

export async function GET (){
    await connectMongoDB();
    const idea = await Idea.find();
    return NextResponse.json({idea});
}
