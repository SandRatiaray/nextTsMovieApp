import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'MoviApp',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'Votre e-mail' },
        password: {
          label: 'Mot de passe',
          type: 'Password',
          placeholder: 'Votre mot de passe',
        },
      },
      async authorize(credentials) {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();

        return user || null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
