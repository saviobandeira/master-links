'use server'
import { getProfile } from '@/src/utils/services/profileService';
import ProfilePicture from '@/src/components/Pictures/ProfilePicture';


interface Props {
    descriptionIsVisible: boolean;
}

export default async function ProfileSection({ descriptionIsVisible }: Props) {
    const profile = getProfile();

    return (
        <section className='flex flex-col items-center pb-8'>
            <ProfilePicture />
            <h1 className=' font-bold text-lg mb-8'>{profile.name}</h1>
            { descriptionIsVisible ? <p>{profile.description}</p> : null} 
        </section>
    );
}