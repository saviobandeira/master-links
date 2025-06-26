import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/app/components/SignIn';


export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/admin');
  }

  return (
    <SignIn />
  );
}