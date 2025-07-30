import { getAuth } from "@clerk/nextjs/server";
import connectDataBase from "@/config/db";
import User from "@/app/models/User";



export async function POST(request) {
    try {
        const { userId } = await getAuth(request);

        const { cartData } = await request.json();

        await connectDataBase();

        const user = await User.findById(userId);

        user.cartItems = cartData;
        await user.save();

        return NextResponse.json({
            success: true
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        });
    }
    
}