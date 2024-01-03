import { NextResponse } from "next/server";
import { itemConfig } from "../config";

export async function POST(req: Request) {
	const body = await req.json()
	const a = generateItemCode(body.cost, body.department, body.store)
	return NextResponse.json({ a })
}

function generateItemCode(cost: number, department: string, storeId: string = 'pbj-resell') {
	/* Round the cost to the next highest integer and make a string */
	const reversedCost = reverseyString(Math.ceil(cost).toLocaleString())
	/* get required code length */
	const codeLength = itemConfig.skuLength - reversedCost.length - 1
	const code = []
	for (let i=0; i < codeLength; i++) {
		code.push(itemConfig.allowedChars[Math.floor(Math.random() * itemConfig.allowedChars.length)])
	}
	return reversedCost + department.toUpperCase() + code.join('')
}

function reverseyString(value: string): string {
	const arr = []
	for (let i = value.length - 1; i >= 0; i--) {	arr.push(value[i])}
	return arr.join('')
}