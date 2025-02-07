"use client"

import Image from "next/image"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { CreditCard } from "lucide-react"
import { dark } from "@clerk/themes"

import logo from "@/assets/logo.png"
import ThemeToggle from "@/components/ThemeToggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme } = useTheme()

  return (
    <header className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={35}
            height={35}
            className="rounded-sm"
          />
          <span className="text-xl font-bold tracking-tight">
            AI Resume Builder
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  )
}
