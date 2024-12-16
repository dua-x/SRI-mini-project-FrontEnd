import React from 'react'
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="footer flex gap-6 flex-wrap items-center justify-center  bg-orange-500 ">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Collocation
                </a>

                <a
                    className="flex items-center gap-2 bg-orange hover:underline hover:underline-offset-4"
                    href="./groupList"

                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Group
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/younehadli09/Projet_RI?fbclid=IwZXh0bgNhZW0CMTEAAR2s0wfDnELs9sVZ6BJgeuTvpb6UAtGwQmil4HLeM34unVt0H7bt4UqZ4_0_aem_SgkHMf5ftI7lCbwdAjd3Ag"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Github →
                </a>
            </footer>
        </>
    )
}

export default Footer