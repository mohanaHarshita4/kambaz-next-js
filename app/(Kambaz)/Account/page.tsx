import { redirect } from "next/dist/client/components/navigation";
export default function AccountPage() {
 redirect("/Account/SignIn");

    return null;
}