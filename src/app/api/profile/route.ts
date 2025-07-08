import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import fs from 'fs';
import path from 'path';


type ProfileData = {
    name: string;
    description: string;
}

const dataPath = path.join(process.cwd(), 'src/data/profile.json');

function readData() {
    if (!fs.existsSync(dataPath)) return {};
    const data = fs.readFileSync(dataPath, 'utf-8');
    const result: ProfileData = JSON.parse(data);
    return result;
}

export async function GET() {
    const profile = readData();
    return NextResponse.json(profile);
}

function writeData({
    name,
    description
}: ProfileData) {
    try {
        fs.writeFileSync(dataPath, JSON.stringify({
            name,
            description
        }, null, 2));
        return { success: true };
    } catch (error) {
        console.error('Failed to write data:', error);
        return { success: false };
    }
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: 'Authentication required' },
            { status: 401, statusText: 'Unauthenticated' }
        )
    }

    let body;
    try {
        body = await req.json();
    } catch (error) {
        console.error('Failed to get JSON body:', error)
        return NextResponse.json(
            { error: 'Invalid or missing JSON body' },
            { status: 400, statusText: 'Bad Request' }
        )
    }

    const { name, description } = body;
    if (!name || !description) {
        return NextResponse.json(
            { error: 'name and description are required' },
            { status: 400, statusText: 'Bad Request' }
        );
    }

    const result = writeData({ name, description });
    if (!result.success) {
        return NextResponse.json(
            { error: 'Failed to write data' },
            { status: 500, statusText: 'Internal Server Error' }
        );
    }

    return NextResponse.json({
        success: true,
        data: {
            name: name,
            description: description
        }
    });
}