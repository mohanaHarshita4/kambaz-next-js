"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const currentUser = useSelector((state: any) => state.accountReducer);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser || !currentUser._id) {
      router.push("/Account/Signin");
    }
  }, [currentUser, router]);

  if (!currentUser || !currentUser._id) return null;

  return <>{children}</>;
}
