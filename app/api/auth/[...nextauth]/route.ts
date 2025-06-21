import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const options = {
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text'},
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                if (
                    !credentials?.username || 
                    !credentials?.password
                ) return null;

                const USERNAME = process.env.APP_USERNAME;
                const PASSWORD = process.env.APP_PASSWORD;

                const user = { id: credentials.username, username: credentials.username }

                if (
                    credentials.username === USERNAME &&
                    credentials.password === PASSWORD 
                ) {
                    return user;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout'
    }
}

const handler = NextAuth(options);

export { handler as GET, handler as POST }