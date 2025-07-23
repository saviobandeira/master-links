import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import SignIn from '@/src/components/SignIn';
import ProfileSection from '@/src/components/ProfileSection';


export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/admin');
  }

  return (
    <SignIn >
      <ProfileSection descriptionIsVisible={false} />
    </SignIn>
  );
}