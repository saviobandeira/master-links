import Image from 'next/image';
import AdminLinkButton from '@/src/components/Button/AdminLinkButton';
import { getProfile } from '@/src/utils/services/profileService';


export default function Header() {
    const profile = getProfile();

    return (
        <header className='flex flex-col items-center pb-8'>
            <AdminLinkButton />
            <div>
                <Image
                    className=' w-24 h-24 rounded-full mb-4'
                    src='/images/profile-picture.png'
                    alt='Foto de perfil'
                    width={800}
                    height={800}
                />
            </div>
            <h1 className=' font-bold text-lg mb-8'>{profile.name}</h1>
            <p>{profile.description}</p>    
        </header>
    );
}