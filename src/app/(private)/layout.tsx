import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';


export default async function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin');
    }

    return (
        <>
            { children }
        </>
    );
}