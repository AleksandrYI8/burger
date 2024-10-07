import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res: NextResponse, req: NextRequest) => {

    try {
        const client = await clientPromise

        const db = client.db('mydatabase')

        const menu = await db.collection("menu").find().toArray()

        return NextResponse.json({ success: true, data: menu })

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }

}

export const DELETE = async (
    req: NextRequest,
    {params} : {params: {id: string}}

) => {

    try {
        const client = await clientPromise

        const db = client.db('mydatabase')

        const result = await db
        .collection("menu")
        .findOneAndDelete({_id: new ObjectId(params.id)})

        return NextResponse.json({ success: true, data: result, message: "data was removed" })

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }
}
