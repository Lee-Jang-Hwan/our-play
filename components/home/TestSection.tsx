import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TestCard from "./TestCard";
import type { TestSummary } from "@/types/test";

interface TestSectionProps {
  title: string;
  emoji?: string;
  tests: TestSummary[];
  href?: string;
}

const TestSection = ({ title, emoji, tests, href }: TestSectionProps) => {
  if (tests.length === 0) return null;

  return (
    <section className="py-4">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-bold text-gray-900">
          {emoji && <span className="mr-1">{emoji}</span>}
          {title}
        </h2>
        {href && (
          <Link
            href={href}
            className="flex items-center text-sm text-gray-500 hover:text-primary transition-colors"
          >
            더보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </section>
  );
};

export default TestSection;
