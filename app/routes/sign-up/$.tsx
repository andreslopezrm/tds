import { SignUp } from "@clerk/remix";

export default function SignUpRoute() {
  return (
    <main className="auth flex justify-center p-2 md:p-8">
      <SignUp routing={"path"} path={"/sign-up"} />
    </main>
  );
}