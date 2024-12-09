import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  // session: {
  //   strategy: 'database',
  // },
  pages: {
    signIn: '/login'
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig
})
