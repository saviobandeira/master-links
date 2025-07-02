export default function LinkButton({
    name,
    url,
}: {
    name: string;
    url: string;
}) {
    return (
        <a
            className='flex justify-center bg-primary-100 border-secondary border-2 rounded-xl py-4 px-8'
            href={url}
        >
            {name}
        </a>
    );
}