import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma/client";
import { compare } from "bcrypt";
import { z } from "zod";
import { toast } from "./hooks/use-toast";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        const UserEmail = email as string;
        const UserPassword = password as string;

        const validation = schema.safeParse({ UserEmail, password });

        if (!validation.success) {
          toast({
            title: "Try Again",
            description: "There was error while creating user",
          });
          return null;
        }

        const user = await prisma.user.findFirst({
          where: { email: UserEmail },
        });

        if (!user) {
          toast({
            title: "User not Found",
          });
          return null;
        }

        const isMatch: boolean = await compare(UserPassword, user.password);

        if (!isMatch) {
          toast({
            title: "Incorrect Email or Password",
          });
          return null;
        }

        return {
          name: user.name,
          email: user.email,
          role: user.role,
          teamid: user.teamid,
          image: user.image,
        };
      },
    }),
  ],

  pages: {
    signIn: "/auth",
  },
});
