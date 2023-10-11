import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "91ddf6bcb02179778f9f",
      clientSecret: "d96461a743778e291d8e0788d1e83f5dcf07307d",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
