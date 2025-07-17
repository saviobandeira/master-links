import LinkButton from '@/src/components/Links/LinkButton';
import { getExternalLinks } from '@/src/utils/services/externalLinksService';


export default async function LinkSection() {
    const externalLinks = getExternalLinks();

    const renderItems = (itemIndex: number) => {
        return (
            <div className='py-8 flex flex-col gap-4'>
                {externalLinks[itemIndex].items.map(item => {
                    return (
                        <LinkButton
                            key={item.id}
                            name={item.name}
                            url={item.url}
                        />
                    );
                })}
            </div>
        );
    }

    const renderTitle = (title: string) => {
        return title.toLowerCase() === 'default'
            ? null
            : <h2 className='font-bold text-center'>
                {title}
            </h2>
    }

    const renderGroup = () => {
        return (
            <>
                {externalLinks.map((externalLink, index) => {
                    return (
                        <div
                            key={externalLink.id}

                        >
                            {renderTitle(externalLink.category)}
                            {renderItems(index)}
                        </div>
                    );
                })}
            </>
        );
    }

    return (
        <section className='w-full'>
            <div>
                {renderGroup()}
            </div>
        </section>
    );
}