import Link from 'next/link'
import React from 'react'
interface Props {
  heading?: string
  content?: string
  isAddressVisible?: boolean
  addressContent?: string
  isLinkVisible?: boolean
  linkTitle?: string
  linkURL?: string
  isArrowVisible?: boolean
  targetBlack?: boolean
  children: React.ReactNode
}
export default function ContactIconBlock({
  addressContent,
  content,
  heading,
  isAddressVisible,
  isArrowVisible,
  isLinkVisible,
  linkTitle,
  linkURL,
  targetBlack,
  children,
}: Props) {
  return (
    <div>
      <div className="flex gap-x-7 py-6 ">
        {children}
        <div className="grow">
          <h3 className="font-bold text-neutral-200 dark:text-black">{heading}</h3>
          <p className="mt-1 text-sm text-neutral-200 dark:text-black">{content}</p>
          {isAddressVisible ? (
            <p className="mt-1 text-sm italic text-neutral-800">{addressContent}</p>
          ) : null}
          {isLinkVisible && linkURL && (
            <Link
              className="group mt-2 inline-flex  text-[#38A7F4] items-center gap-x-2 rounded-lg text-sm font-medium text-primary outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-blue-500 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1"
              href={linkURL}
              target={targetBlack ? '_blank' : undefined}
            >
              {linkTitle}
              {isArrowVisible && (
                <svg
                  className="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />{' '}
                </svg>
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
