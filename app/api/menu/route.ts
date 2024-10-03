import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        const client = await clientPromise;
        const db = client.db('mydatabase');

        const menu = await db.collection("menu").find().toArray();

        return NextResponse.json({ success: true, data: menu, message: "success" });

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
};




export const POST = async (req: NextRequest) => {

    try {
        const client = await clientPromise

        const db = client.db('mydatabase')
        const  body = await req.json()
        const result = await db.collection("menu").insertOne(body)

        return NextResponse.json({ success: true, data: result, message: "new burger was created" })

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }
}