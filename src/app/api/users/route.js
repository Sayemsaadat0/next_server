import { NextResponse } from "next/server"
import "@/DB/db" // connected database
import User from "@/Model/User";

export async function POST(request) {
    const payload = await request.json();

    console.log(payload);

    if (!payload.name || !payload.email) {
        return NextResponse.json({ message: "validation failed" }, { status: 400 })
    }

    const _user = User.create({
        name: payload.name,
        email: payload.email
    })

    if(_user){
        return NextResponse.json({ message: "user created successfully!", _user }, { status: 201 })
    }else {
        return NextResponse.json({ message: "Failed to create user"}, { status: 420 })
    }


}





export async function GET(request) {
    const users = await User.find();
    return NextResponse.json({ message: "user created successfully!", users }, { status: 200 })
}