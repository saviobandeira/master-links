"use client";
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SignIn({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            username,
            password,
            callbackUrl: '/admin'
        });
        if (res?.error) {
            setError('Usuário ou senha inválidos.');
        } else {
            router.push('/admin');
        }
    }

    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center'>
                {children}
            </div>
            <p className='font-bold text-2xl text-center'>Login</p>
            <p className='pt-2 text-center'>Entre com suas credencias </p>
            <form
                className='flex flex-col gap-4 pt-12'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col'>
                    <label htmlFor='Username'></label>
                    <input
                        className='p-4 border-secondary border-2 rounded-lg'
                        id='Username'
                        type='text'
                        placeholder='Usuário'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        autoComplete='username'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='Password'></label>
                    <input
                        className='p-4 border-secondary border-2 rounded-lg'
                        id='Password'
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete='current-password'
                    />
                </div>

                <div className='pt-12 flex flex-col'>
                    <button
                        className=' text-primary bg-details font-bold p-4 rounded-lg border-2 border-secondary cursor-pointer'
                        type='submit'
                        >
                        Entrar
                    </button>
                    {error && <p className='error text-center p-4'>{error}</p>}
                </div>
            </form>
        </div>
    );
}









