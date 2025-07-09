import { NextResponse } from 'next/server';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';


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
    if (!existsSync(dataPath)) return {};
    const data = readFileSync(dataPath, 'utf-8');
    const result: DataType[] = JSON.parse(data);
    return result;
}

export async function GET() {
    const externalLinks = readData();
    return NextResponse.json(externalLinks);
}