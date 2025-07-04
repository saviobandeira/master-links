'use client'
import Image from 'next/image';
import { signOut } from 'next-auth/react';


export default function SignOutButton() {
    return (
        <button
            onClick={() => signOut()}
            className='absolute top-0 right-0 m-8'
        >
            <div className='flex justify-center items-center rounded-full cursor-pointer p-2 bg-details'> 
                <Image 
                width={24}
                height={24}
                src='./images/icons/signout-icon.svg'
                alt='Sign Out icon'
                />
            </div>
        </button>
    );
}