import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
const AuthSessionProvider = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthSessionProvider;
