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

  // Check if the movie is already in the movieLike entity
  const findDuplicates = await prisma.movieLike.findFirst({
    where: {
      userId: token.sub as string,
      movieId: movieId,
    },
  });

  if (!findDuplicates) {
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

    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Already in the list' }, { status: 409 });
  }
}
