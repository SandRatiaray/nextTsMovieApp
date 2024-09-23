import prisma from '@/lib/prisma';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export async function POST(
  request: NextRequestWithAuth,
  { params: { movieId } }: { params: { movieId: string } }
) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.update({
    where: {
      email: token.email as string,
    },
    data: {
      movie: {
        create: [{ movieId }],
      },
    },
  });

  return NextResponse.json(user);
}
