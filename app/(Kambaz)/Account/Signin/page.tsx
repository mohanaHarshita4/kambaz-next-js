"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.user.find(
      (u: any) =>
        u.username?.trim().toLowerCase() === credentials.username?.trim().toLowerCase() &&
        u.password === credentials.password
    );

    if (!user) {
      alert("Invalid username or password!");
      return;
    }

    dispatch(setCurrentUser(user));
    router.push("/Account/Profile");
  };

  return (
    <div id="wd-signin-screen" className="p-4">
      <h3 className="mb-3">Sign in</h3>

      <FormControl
        placeholder="username"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />

      <FormControl
        type="password"
        placeholder="password"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />

      <Button id="wd-signin-btn" className="w-100 mb-2" onClick={signin}>
        Sign in
      </Button>

      <Link id="wd-signup-link" href="/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
