import React from "react";
import { MapPin } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../common/Common";
import Sidebar from "../common/Sidebar";

const chartData = [
  { name: "Sport Car", value: 17439 },
  { name: "SUV", value: 9478 },
  { name: "Coupe", value: 18197 },
  { name: "Hatchback", value: 12510 },
  { name: "MPV", value: 14406 },
];

const COLORS = ["#cfe9ff", "#a6d4ff", "#3b82f6", "#1e40af", "#2563eb"];

const recentTransactions = [
  {
    car: "Nissan GT - R",
    date: "20 July",
    type: "Sport Car",
    price: 80,
    img: "https://i.postimg.cc/HskFz3LN/car1.png",
  },
  {
    car: "Koenigsegg",
    date: "19 July",
    type: "Sport Car",
    price: 99,
    img: "https://i.postimg.cc/3JfVYfVZ/car2.png",
  },
  {
    car: "Rolls - Royce",
    date: "18 July",
    type: "Sport Car",
    price: 96,
    img: "https://i.postimg.cc/02R6RyQv/car3.png",
  },
  {
    car: "CR - V",
    date: "17 July",
    type: "SUV",
    price: 80,
    img: "https://i.postimg.cc/Vv6bxzcB/car4.png",
  },
];

export default function DashboardContent({ mobileOpen, setMobileOpen }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page wrapper to mimic full app layout with header + sidebar */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
          {/* Sidebar column (visual placeholder) */}
          <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          {/* Main content */}
          <main className="p-2 m-2 ml-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left large card (spans 2 columns on large) */}
              <section className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Details Rental</h2>

                  <div className="bg-gray-100 rounded-xl h-44 mb-6 overflow-hidden">
                    <img src="https://i.postimg.cc/Jzj3mQPJ/map.png" alt="map" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://i.postimg.cc/HskFz3LN/car1.png" className="w-28 h-16 object-cover rounded-lg shadow" />
                    <div>
                      <h3 className="font-semibold text-lg">Nissan GT - R</h3>
                      <p className="text-sm text-gray-500">Sport Car</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-400">#9761</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-3">
                        <MapPin className="w-4 text-gray-400" /> Pick-Up
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 text-xs">Locations</p>
                          <p className="text-gray-700">Kota Semarang</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Date</p>
                          <p className="text-gray-700">20 July 2022</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Time</p>
                          <p className="text-gray-700">07:00</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-3">
                        <MapPin className="w-4 text-gray-400" /> Drop-Off
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 text-xs">Locations</p>
                          <p className="text-gray-700">Kota Semarang</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Date</p>
                          <p className="text-gray-700">21 July 2022</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs">Time</p>
                          <p className="text-gray-700">01:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-100" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Total Rental Price</p>
                      <p className="text-xs text-gray-400">Overall price and includes rental discount</p>
                    </div>
                    <div className="text-2xl font-bold">$80.00</div>
                  </div>
                </div>
              </section>

              {/* Right column: Top chart */}
              <section className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit flex w-full items-center justify-between">
                  <div className="w-full">
                    <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
                    <div className="w-full h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={chartData} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={3}>
                            {chartData.map((_, idx) => (
                              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm">
                    {chartData.map((item, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{item.value.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Transactions (stacked under chart on right column) */}
                <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Recent Transaction</h3>
                    <button className="text-sm text-green-600">View All</button>
                  </div>

                  <div className="space-y-4">
                    {recentTransactions.map((t, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img src={t.img} className="w-20 h-12 object-cover rounded-md" />
                          <div>
                            <p className="font-medium">{t.car}</p>
                            <p className="text-xs text-gray-400">{t.type}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs text-gray-400">{t.date}</p>
                          <p className="font-semibold">${t.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
