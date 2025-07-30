import connectDataBase from "@/config/db";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";


export async function GET(request) {
    try {
        const { userId } = getAuth(request);

        await connectDataBase();

        const user = await User.findById(userId);

        const { cartItems } = user;
        
        return NextResponse.json({
            success: true,
            cartItems
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        });
    }
}