'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function AdminLinkButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.push('/signin')}
            className='absolute top-0 right-0 m-8'
        >
            <div className='flex justify-center items-center rounded-full cursor-pointer p-2 bg-details'> 
                <Image 
                width={24}
                height={24}
                src='./images/icons/admin-icon.svg'
                alt='Admin icon'
                />
            </div>
        </button>
    );
}