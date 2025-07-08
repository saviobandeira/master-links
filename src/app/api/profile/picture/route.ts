import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import fs from 'fs';
import path from 'path';


export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json(
            { error: 'Authentication required' },
            { status: 401, statusText: 'Unauthenticated' }
        );
    };

    let file;
    try {
        const form = await req.formData();
        file = form.get('profile-picture') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'Invalid or missing FILE' },
                { status: 400, statusText: 'Bad Request' }
            );
        }

    } catch (error) {
        console.error('Failed to get FILE:', error)
        return NextResponse.json(
            { error: 'Invalid or missing FILE' },
            { status: 400, statusText: 'Bad Request' }
        );
    };

    if (file.size > 5 * (1024 * 1024)) {
        return NextResponse.json(
            { error: 'Image size must be 5MB or less' },
            { status: 400, statusText: 'Bad Request' }
        );
    };

    const allowedTypes = ['image/png'];
    if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
            { error: 'Invalid file format. Only PNG format is supported' },
            { status: 415, statusText: 'Unsupported Media Type' }
        );
    };

    const buffer = Buffer.from(await file.arrayBuffer());
    const magicNumbers = {
        png: [0x89, 0x50, 0x4e, 0x47]
    };
    for (const [type, signature] of Object.entries(magicNumbers)) {
        const match = signature.every((byte, index) => buffer[index] === byte);
        if (!match) {
            return NextResponse.json(
                { error: 'Invalid file format. Only PNG format is supported' },
                { status: 415, statusText: 'Unsupported Media Type'}
            );
        };
    };

    const fileName = `profile-picture.png`;
    const filePath = path.join(process.cwd(), 'public', 'images', fileName);
    try {
        fs.writeFileSync(filePath, buffer);
        return NextResponse.json(
            { success: true }
        );
    } catch (error) {
        console.error('Failed to save image:', error);
        return NextResponse.json(
            { error: 'Failed to save image' },
            { status: 500, statusText: 'Internal Server Error' }
        );
    };
}