import { NextResponse } from "next/server";
import StoreModel from "@/app/_data/models/store.model";
import dbConnect from "@/app/_data";

export async function POST(req: Request) {
	// dbConnect()
	const body = await req.json()
	const store = new StoreModel(body)
	store.save()
	return NextResponse.json(store)
}

export async function GET(req: Request) {
	// dbConnect()
	const body = await StoreModel.find()
	return NextResponse.json(body)
}