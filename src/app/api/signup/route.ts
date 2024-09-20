import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  const body = await request.json();

  //   create User in MongoDB
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...rest } = user;
  
  return NextResponse.json(rest);
}
