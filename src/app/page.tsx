"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/movies");
  }, [router]);

  return <p className="p-4">Redirecting...</p>;
}
