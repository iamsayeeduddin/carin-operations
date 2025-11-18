import { useState } from "react";
import { Home, Car, BarChart2, Wallet, Mail, Calendar, Settings, HelpCircle, LogOut, Sun, Moon, X } from "lucide-react";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const [darkMode, setDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { label: "Dashboard", icon: Home, active: true },
    { label: "Car Rent", icon: Car },
    { label: "Insight", icon: BarChart2 },
    { label: "Reimburse", icon: Wallet },
    { label: "Inbox", icon: Mail },
    { label: "Calender", icon: Calendar },
  ];

  const preferences = [
    { label: "Settings", icon: Settings },
    { label: "Help & Center", icon: HelpCircle },
  ];

  const desktopSidebar = (
    <aside className="hidden md:flex md:flex-col md:gap-6 w-64 h-screen bg-white shadow-md p-6">
      {/* MAIN MENU */}
      <div>
        <p className="text-xs text-gray-400 mb-3 tracking-wide">MAIN MENU</p>
        <div className="flex flex-col gap-1">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
              ${activeIndex === idx ? "bg-green-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* PREFERENCES */}
      <div>
        <p className="text-xs text-gray-400 mb-3 tracking-wide">PREFERENCES</p>
        <div className="flex flex-col gap-1">
          {preferences.map((item, idx) => (
            <button key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}

          {/* DARK MODE */}
          <div className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5" />
              Dark Mode
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="w-12 h-6 bg-gray-200 rounded-full flex items-center px-1">
              <div
                className={`w-5 h-5 bg-green-600 rounded-full transform transition-all flex items-center justify-center text-white
                ${darkMode ? "translate-x-6" : "translate-x-0"}`}
              >
                {darkMode ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="mt-auto flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
        <LogOut className="w-5 h-5" />
        Log Out
      </button>
    </aside>
  );

  const mobileSidebar = mobileOpen ? (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen && setMobileOpen(false)} aria-hidden="true" />

      <aside className="relative left-0 top-0 bottom-0 w-64 bg-white shadow-md p-6 flex flex-col gap-6">
        <div className="flex justify-end">
          <button className="p-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen && setMobileOpen(false)} aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wide">MAIN MENU</p>
          <div className="flex flex-col gap-1">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
                ${activeIndex === idx ? "bg-green-700 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-3 tracking-wide">PREFERENCES</p>
          <div className="flex flex-col gap-1">
            {preferences.map((item, idx) => (
              <button key={idx} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5" />
                Dark Mode
              </div>
              <button onClick={() => setDarkMode(!darkMode)} className="w-12 h-6 bg-gray-200 rounded-full flex items-center px-1">
                <div
                  className={`w-5 h-5 bg-green-600 rounded-full transform transition-all flex items-center justify-center text-white
                  ${darkMode ? "translate-x-6" : "translate-x-0"}`}
                >
                  {darkMode ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        <button className="mt-auto flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </aside>
    </div>
  ) : null;

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
}
