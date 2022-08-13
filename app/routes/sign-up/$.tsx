import { SignUp } from "@clerk/remix";

export default function SignUpRoute() {
  return (
    <div>
      <SignUp routing={"path"} path={"/sign-up"} />
    </div>
  );
}