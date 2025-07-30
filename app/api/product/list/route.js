import connectDataBase from "@/config/db";
import { NextResponse } from "next/server";
import Product from "app/models/product.js";




export async function GET(request) {

    try {
        

        await connectDataBase();

        const products = await Product.find({})
        return NextResponse.json({
            success: true,
            products
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
    
}