import Image from 'next/image'


export default function ProfilePicture() {
    return (
        <div>
            <Image
                className=' w-24 h-24 rounded-full mb-4'
                src='/images/profile-picture.png'
                alt='Foto de perfil'
                width={800}
                height={800}
            />
        </div>
    );
}