import connectMongoDB from "@/libs/mongodb";
import Idea from "@/models/Idea";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  {
    params,
  }: { params: { id: string; newTitle: string; newDescription: string } }
) {
  const { id } = params;
  const { newTitle: title, newDescription: description } =  await request.json();
  await connectMongoDB();
  await Idea.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({message:"Topic updated"},{status:200});
}

export async function GET(request:NextRequest,{params}:{params:{id:string}}){

    const {id} = params;
    await connectMongoDB();
    const idea = await Idea.findOne({_id:id});

    return NextResponse.json({idea},{status:200})


}