import connectDataBase from "@/config/db";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";



export async function POST(request) {

    try {
        
        const { userId } = getAuth(request)
        const {address} = await request.json();

        await connectDataBase();
        const newAddress = await Address.create({
            ...address,
            userId

        })

        return NextResponse.json({
            success: true,
            message: "Address added successfully",
            newAddress
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        });
    }

}