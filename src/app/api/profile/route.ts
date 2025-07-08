import { NextResponse } from 'next/server';
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

