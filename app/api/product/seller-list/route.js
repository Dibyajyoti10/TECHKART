import { auth, getAuth } from "@clerk/nextjs/server";



export async function GET(request) {

    try {
        const { userId } = getAuth(request); 
        
        const isSeller = authSeller(userId);

        if (!isSeller) {
            return NextResponse.json({
                success: false,
                message: "You are not authorized to view this page"
            })
        }

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