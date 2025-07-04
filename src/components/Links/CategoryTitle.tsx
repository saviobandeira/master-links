export default function CategoryTitle({
    name,
}: {
    name: string;
}) {
    return (
        <h2 className='py-8 font-bold uppercase text-center'>
            {name}
        </h2>
    );
}