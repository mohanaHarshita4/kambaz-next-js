import { redirect } from "next/navigation";

export default function Home() {
  redirect("/Account/SignIn");
}
