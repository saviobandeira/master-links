import { NextResponse, NextRequest } from 'next/server';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';


type DataItemsType = {
    name: string;
    url: string;
}

type DataType = {
    category: string;
    items: DataItemsType[];
}

const dataPath = join(process.cwd(), 'src/data/externalLinks.json');

function readData() {
    if (!existsSync(dataPath)) return [];
    const data = readFileSync(dataPath, 'utf-8');
    const result: DataType[] = JSON.parse(data);
    return result;
}

export async function GET() {
    const externalLinks = readData();
    return NextResponse.json(externalLinks);
}

function writeData({
    category,
    items,
}: DataType) {
    try {
        const data = readData();
        data.push({
            category,
            items
        })
        writeFileSync(dataPath, JSON.stringify(data, null, 2))

        return { success: true };

    } catch (error) {
        console.error('Failed to write data:', error);
        return { success: false };
    };
}

function isDataItemType(obj: any) {
    return (
        obj &&
        typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.url === 'string'
    );
}

function isDataType(obj: any) {
    if (
        !obj ||
        typeof obj !== 'object' ||
        typeof obj.category !== 'string' ||
        !Array.isArray(obj.items)
    ) {
        return false;
    };

    return obj.items.every(isDataItemType);
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: 'Authentication required' },
            { status: 401 , statusText: 'Unauthenticated' }
        );
    };

    let body;
    try {
        body = await req.json();
    } catch (error) {
        console.error('Failed to get JSON body:', error);
        return NextResponse.json(
            { error: 'Invalid or missing JSON body' },
            { status: 400, statusText: 'Bad Request' }
        );
    };

    if (!isDataType(body)) {
        return NextResponse.json(
            { error: 'Invalid or missing JSON body' },
            { status: 400, statusText: 'Bad Request' }
        );
    };

    const result = writeData(body);
    if (!result.success) {
        return NextResponse.json(
            { error: 'Failed to write data' },
            { status: 500, statusText: 'Internal Server Error' }
        );
    };

    return NextResponse.json({
        success: true,
    });
}