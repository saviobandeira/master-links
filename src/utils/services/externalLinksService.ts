import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';


type ItemType = {
    id: string,
    name: string,
    url: string,
}

type ExternalLink = {
    id: string,
    category: string,
    items: ItemType[]
}

const dataPath = join(process.cwd(), 'src/data/externalLinks.json');

export function getExternalLinks() {
    if (!existsSync(dataPath)) return [];
    const data = readFileSync(dataPath, 'utf-8');
    const result: ExternalLink[] = JSON.parse(data);
    return result;
}

export function addExternalLink({
    category,
    items,
}: ExternalLink) {
    try {
        const data = getExternalLinks();
        const groupIndex = data.length;

        const newItems = items.map((item, itemIndex) => {
            return {
                id: `item-${groupIndex}-${itemIndex}`,
                name: item.name,
                url: item.url
            }
        });

        data.push({
            id: `group-${groupIndex}`,
            category,
            items: newItems
        });
        writeFileSync(dataPath, JSON.stringify(data, null, 2))

        return { success: true };

    } catch (error) {
        console.error('Failed to write data:', error);
        return { success: false };
    };
}