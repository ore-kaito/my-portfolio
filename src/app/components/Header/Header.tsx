"use client"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo"
import { usePathname } from "next/navigation";
import { ROUTES } from "../../../const";

export default function HeaderPage() {
  const pathname = usePathname();
  const router = useRouter();


  return (
    <div className="flex justify-between items-center p-3 pl-0 pr-6">
        <Logo />
        <Link href={ROUTES.ME} className="mx-3">
          <Image
            src="/images/icon.png"
            alt="ユーザー情報"
            width={80}
            height={80}
            className="h-auto w-auto"
          />
        </Link>
    </div>
  )
}
