"use client";
import React, { useState, useEffect } from "react";

interface TerminalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const terminalLines = [
    "zakzackr@portfolio:~$ git add follower",
    'zakzackr@portfolio:~$ git commit -m "Added awesome new follower"',
    "zakzackr@portfolio:~$ git push origin friendship",
    "Enumerating objects: 1, done.",
    "Counting objects: 100% (1/1), done.",
    "Writing objects: 100% (1/1), 245 bytes | 245.00 KiB/s, done.",
    "Total 1 (delta 0), reused 0 (delta 0)",
    "To github.com:zakzackr/followers.git",
    " * [new branch]    friendship -> friendship",
    "",
    "Thank you for following! 🎉",
];

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentLine(0);
            setCurrentChar(0);
            setDisplayedLines([]);
            return;
        }

        if (currentLine >= terminalLines.length) return;

        const currentLineText = terminalLines[currentLine];

        if (currentChar <= currentLineText.length) {
            const timer = setTimeout(() => {
                const newDisplayedLines = [...displayedLines];
                newDisplayedLines[currentLine] = currentLineText.substring(
                    0,
                    currentChar
                );
                setDisplayedLines(newDisplayedLines);
                setCurrentChar(currentChar + 1);
            }, 20); // Typing speed

            return () => clearTimeout(timer);
        } else {
            // Move to next line
            const timer = setTimeout(() => {
                setCurrentLine(currentLine + 1);
                setCurrentChar(0);
            }, 500); // Pause between lines

            return () => clearTimeout(timer);
        }
    }, [isOpen, currentLine, currentChar]);

    // Auto close after animation completes
    useEffect(() => {
        if (currentLine >= terminalLines.length) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Show final result for 3 seconds

            return () => clearTimeout(timer);
        }
    }, [currentLine, terminalLines.length, onClose]);

    // ESC key to close modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Terminal Header */}
                <div className="bg-gray-700 px-4 py-3 rounded-t-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm ml-4 font-medium">
                        Terminal
                    </span>
                </div>

                {/* Terminal Content */}
                <div className="bg-gray-900 p-6 rounded-b-lg font-mono text-sm min-h-[300px]">
                    {displayedLines.map((line, index) => (
                        <div key={index} className="mb-1">
                            {index < 3 ? (
                                <span className="text-green-400">{line}</span>
                            ) : index === terminalLines.length - 1 ? (
                                <span className="text-yellow-400 font-semibold">
                                    {line}
                                </span>
                            ) : (
                                <span className="text-gray-300">{line}</span>
                            )}
                            {index === currentLine &&
                                currentChar <=
                                    terminalLines[currentLine]?.length && (
                                    <span className="text-green-400 animate-pulse">
                                        |
                                    </span>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TerminalModal;
