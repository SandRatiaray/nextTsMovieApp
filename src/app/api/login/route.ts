import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // find user
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  // check user and password
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...rest } = user;

    return NextResponse.json(rest);
  }

  return NextResponse.json(null);
}
