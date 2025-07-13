import React, { useState } from "react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import TerminalModal from "./TerminalModal";

const Sidebar: React.FC = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    const handleFollowClick = () => {
        setIsTerminalOpen(true);
    };

    return (
        <div className="w-full">
            {/* Profile Image */}
            <div className="mb-4 flex justify-center lg:block">
                <Image
                    src="/profile.jpg"
                    alt="Ryuichi Kozaki"
                    width={296}
                    height={296}
                    className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-full lg:h-auto"
                />
            </div>

            {/* Name and Username */}
            <div className="mb-4 text-center lg:text-left">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    Ryuichi Kozaki
                </h1>
                <p className="text-xl text-gray-600 font-light">zakzackr</p>
            </div>

            {/* Follow Button */}
            <button
                onClick={handleFollowClick}
                className="w-full mb-4 px-4 py-2 sm:py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-colors touch-manipulation"
            >
                Follow
            </button>

            {/* Social Links */}
            <div className="space-y-2 text-sm lg:space-y-2">
                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                    <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>Japan</span>
                </div>

                {/* Social Links Container - Responsive Layout */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-2">
                    {/* GitHub */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                        <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <a
                            href="https://github.com/zakzackr"
                            className="text-blue-600 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Qiita */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                        <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <a
                            href="https://qiita.com/shibainuu"
                            className="text-blue-600 hover:underline"
                        >
                            Qiita
                        </a>
                    </div>

                    {/* Zenn */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                        <svg
                            className="w-4 h-4 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M1.92 10.306L8.283 1.766c.407-.553 1.027-.553 1.434 0l6.364 8.54c.406.553.074 1.007-.665 1.007H9.283l2.13 2.874c.332.449.022.813-.619.813H3.206c-.641 0-.951-.364-.619-.813L4.717 11.313H2.585c-.739 0-1.071-.454-.665-1.007z" />
                        </svg>
                        <a
                            href="https://zenn.dev/shibainuu"
                            className="text-blue-600 hover:underline"
                        >
                            Zenn
                        </a>
                    </div>
                </div>
            </div>

            {/* Favorites */}
            <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center lg:text-left">
                    Favorites
                </h3>
                <TooltipProvider>
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                        alt="Spring Boot"
                                    />
                                    <AvatarFallback>SB</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white border border-gray-200 text-gray-900 shadow-lg p-4 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                            alt="Spring Boot"
                                        />
                                        <AvatarFallback>SB</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-base">
                                            Spring Boot
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Java framework
                                        </p>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                                        alt="Go"
                                    />
                                    <AvatarFallback>GO</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white border border-gray-200 text-gray-900 shadow-lg p-4 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                                            alt="Go"
                                        />
                                        <AvatarFallback>GO</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-base">
                                            Go
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Programming language
                                        </p>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                        alt="Next.js"
                                    />
                                    <AvatarFallback>NX</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white border border-gray-200 text-gray-900 shadow-lg p-4 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                            alt="Next.js"
                                        />
                                        <AvatarFallback>NX</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-base">
                                            Next.js
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            React framework
                                        </p>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage
                                        src="/icons/shadcn.png"
                                        alt="shadcn/ui"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white border border-gray-200 text-gray-900 shadow-lg p-4 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage
                                            src="/icons/shadcn.png"
                                            alt="shadcn/ui"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-base">
                                            shadcn/ui
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            UI components
                                        </p>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>

            {/* Terminal Modal */}
            <TerminalModal
                isOpen={isTerminalOpen}
                onClose={() => setIsTerminalOpen(false)}
            />
        </div>
    );
};

export default Sidebar;
