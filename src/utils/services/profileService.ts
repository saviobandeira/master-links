import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';


type Profile = {
    name: string,
    description: string,
}

const dataPath = join(process.cwd(), 'src/data/profile.json');

export function getProfile() {
    if (!existsSync(dataPath)) return {
        name: 'Not Found',
        description: 'Not Found'
    };
    const data = readFileSync(dataPath, 'utf-8');
    const result: Profile = JSON.parse(data);
    return result;
}

export function editProfile({
    name,
    description
}: Profile) {
    try {
        writeFileSync(dataPath, JSON.stringify({
            name,
            description
        }, null, 2));
        return { success: true };
    } catch (error) {
        console.error('Failed to write data:', error);
        return { success: false };
    }
}