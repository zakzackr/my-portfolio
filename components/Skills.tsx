import React from "react";
import { Badge } from "@/components/ui/badge";

const TechStack: React.FC = () => {
    const technologies = [
        {
            category: "Languages",
            items: [
                "Java",
                "Python",
                "JavaScript",
                "Go",
                "TypeScript",
                "Swift",
            ],
            core: ["Java", "Python", "JavaScript"],
        },
        {
            category: "Backend",
            items: ["Spring Boot", "Spring Security", "OpenAPI"],
            core: ["Spring Boot", "Spring Security", "OpenAPI"],
        },
        {
            category: "Frontend",
            items: ["React", "jQuery", "shadcn/ui", "Next.js"],
            core: ["React", "jQuery", "shadcn/ui"],
        },
        {
            category: "Databases",
            items: ["MySQL", "PostgreSQL"],
            core: ["MySQL"],
        },
        {
            category: "Auth",
            items: ["Supabase Auth"],
            core: [],
        },
        {
            category: "Infrastructure",
            items: [
                "Route53",
                "CloudFront",
                "S3",
                "ALB",
                "Elastic Beanstalk",
                "EC2",
                "RDS",
                "Vercel",
                "Docker",
            ],
            core: [
                "Route53",
                "CloudFront",
                "S3",
                "ALB",
                "Elastic Beanstalk",
                "EC2",
                "RDS",
                "Vercel",
                "Docker",
            ],
        },
        { category: "CI/CD", items: ["Jenkins"], core: [] },
        {
            category: "Tools",
            items: ["Git", "Swagger"],
            core: ["Git", "Swagger"],
        },
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
            <div className="flex items-center text-xs text-gray-600 mb-4 sm:mb-6">
                <div className="font-mono text-xs">
                    <span className="text-gray-900 font-medium">zakzackr</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">skills</span>
                    <span className="text-gray-500">.md</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b border-gray-200 mb-4 sm:mb-6">
                Skills
            </h2>
            <div className="space-y-4 sm:space-y-6">
                {technologies.map((tech) => (
                    <div key={tech.category} className="p-1">
                        <h3 className="font-semibold text-sm text-gray-700 mb-2 sm:mb-3">
                            {tech.category}
                        </h3>
                        <div className="flex flex-wrap gap-1">
                            {tech.items.map((item) => {
                                const isCore = tech.core.some((core) =>
                                    item.includes(core)
                                );
                                return (
                                    <Badge
                                        key={item}
                                        variant={
                                            isCore ? "secondary" : "outline"
                                        }
                                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-[12px] text-xs font-medium border border-gray-300"
                                    >
                                        {item}
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-1">
                    <Badge
                        variant="secondary"
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-[12px] text-xs font-medium border border-gray-300"
                    >
                        Core Skills
                    </Badge>

                    <Badge
                        variant="outline"
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-[12px] text-xs font-medium border border-gray-300"
                    >
                        Exploring
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
