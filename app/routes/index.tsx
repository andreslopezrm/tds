import { Link } from "@remix-run/react";

export default function IndexRoute() {
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     <h1>Datos</h1>

      <Link to="/sign-in">Sign In</Link>
      <br />
      <br />
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
}
