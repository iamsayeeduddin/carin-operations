import { Menu, Search, SlidersHorizontal, Heart, Bell, Settings } from "lucide-react";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Left Section - Mobile Menu + Logo */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen && setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-700">Carin</h1>
      </div>

      {/* Search Bar - Mobile */}
      <div className="flex items-center gap-3 w-1/2 md:hidden">
        <div className="flex items-center w-full bg-white border rounded-full px-3 py-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Search something here" className="flex-1 px-2 outline-none text-sm" />
        </div>
        <button className="p-2 rounded-full border shadow-sm">
          <SlidersHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center w-[420px] bg-white border rounded-full px-3 py-2 shadow-sm">
        <Search className="w-4 h-4 text-gray-500" />
        <input type="text" placeholder="Search something here" className="flex-1 px-3 outline-none text-sm" />
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-5">
        <Heart className="w-5 h-5 text-gray-600 hidden md:block" />
        <div className="relative hidden md:block">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <Settings className="w-5 h-5 text-gray-600 hidden md:block" />

        {/* User Avatar */}
        <img src="https://i.pravatar.cc/40" alt="user" className="w-9 h-9 rounded-full border" />
      </div>
    </header>
  );
}
