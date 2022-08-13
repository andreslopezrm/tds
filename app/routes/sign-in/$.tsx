import { SignIn } from "@clerk/remix";

export default function SignInRoute() {
  return (
    <main className="auth flex justify-center p-2 md:p-8">
      <SignIn routing={"path"} path={"/sign-in"} />
    </main>
  );
}

