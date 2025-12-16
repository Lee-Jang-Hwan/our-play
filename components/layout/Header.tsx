"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import MobileNav from "./MobileNav";
import SearchBar from "@/components/home/SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
          {/* 햄버거 메뉴 버튼 */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* 로고 */}
          <Link
            href="/"
            className="text-xl font-bold text-primary absolute left-1/2 -translate-x-1/2"
          >
            심테기
          </Link>

          {/* 검색 버튼 */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="검색"
          >
            {isSearchOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Search className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 검색 바 */}
        {isSearchOpen && (
          <div className="px-4 pb-3 border-t border-gray-100 bg-white">
            <div className="mt-3">
              <SearchBar autoFocus />
            </div>
          </div>
        )}
      </header>

      {/* 모바일 네비게이션 */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
