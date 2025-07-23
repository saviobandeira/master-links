import AdminLinkButton from '@/src/components/Button/AdminLinkButton';
import ProfileSection from '@/src/components/ProfileSection';


export default function Header() {
    return (
        <header className='flex flex-col items-center'>
            <AdminLinkButton />
            <ProfileSection descriptionIsVisible={true} />
        </header>
    );
}