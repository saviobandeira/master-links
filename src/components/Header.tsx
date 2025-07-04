import Image from 'next/image';
import AdminLinkButton from '@/src/components/Button/AdminLinkButton';


export default function Header() {
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
            <h1 className=' font-bold text-lg mb-8'>Sávio Bandeira</h1>
            <p>Plataforma para centralizar e compartilhar múltiplos links em uma única página personalizada.</p>    
        </header>
    );
}