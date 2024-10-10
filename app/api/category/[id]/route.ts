import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
    const { id } = params; // Извлечение id из параметров

    try {
        const client = await clientPromise;
        const db = client.db('mydatabase');

        // Поиск элемента по id
        const categoryItem = await db.collection("category").findOne({ _id: new ObjectId(id) });

        if (!categoryItem) {
            return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: categoryItem });

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message }, { status: 500 });
    }
}


export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }

) => {

    try {
        const client = await clientPromise

        const db = client.db('mydatabase')

        const result = await db
            .collection("category")
            .findOneAndDelete({ _id: new ObjectId(params.id) })

        return NextResponse.json({ success: true, data: result, message: "data was removed" })

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }
}


export const PATCH = async (
    req: NextRequest,
    { params }: { params: { id: string } }

) => {

    try {
        const client = await clientPromise

        const db = client.db('mydatabase')
        const body = await req.json()
        const result = await db
            .collection("category")
            .findOneAndUpdate({ _id: new ObjectId(params.id) }, { $set: body })

        return NextResponse.json({ success: true, data: result, message: "data was changed " })

    } catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }
}
