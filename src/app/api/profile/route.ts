import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import fs from 'fs';
import path from 'path';
import * as z from 'zod';


const ProfileSchema = z.object({
    name: z.string(),
    description: z.string(),
});

type ProfileType = z.infer<typeof ProfileSchema>;

const dataPath = path.join(process.cwd(), 'src/data/profile.json');

function readData() {
    if (!fs.existsSync(dataPath)) return {};
    const data = fs.readFileSync(dataPath, 'utf-8');
    const result: ProfileType = JSON.parse(data);
    return result;
}

export async function GET() {
    const profile = readData();
    return NextResponse.json(profile);
}

function writeData({
    name,
    description
}: ProfileType) {
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

    let body: ProfileType;
    try {
        body = await req.json();
    } catch (error) {
        console.error('Failed to get JSON body:', error)
        return NextResponse.json(
            { error: 'Invalid or missing JSON body' },
            { status: 400, statusText: 'Bad Request' }
        )
    }

    const validationResult = ProfileSchema.safeParse(body);
    if (!validationResult.success) {
        return NextResponse.json(
            { error: 'Invalid JSON body' },
            { status: 400, statusText: 'Bad Request' }
        );
    };

    const data = validationResult.data;

    const writeResult = writeData({
        name: data.name,
        description: data.description
    });
    if (!writeResult.success) {
        return NextResponse.json(
            { error: 'Failed to write data' },
            { status: 500, statusText: 'Internal Server Error' }
        );
    }

    return NextResponse.json({
        success: true,
        data: {
            name: data.name,
            description: data.description
        }
    });
}