import { Bell, ChartColumn, LayoutDashboard, Package, Search, Settings, TrendingUp, Users, Wallet } from "lucide-react";
import { cn, cssVars } from "@/lib/cn";
import { Initial, Window } from "./Window";

const kpis = [
  { label: "Revenue", value: "PKR 4.82M", change: "+12.4%", tone: "bg-sage text-white" },
  { label: "Orders", value: "1,284", change: "+8.1%", tone: "bg-white text-ink" },
  { label: "Customers", value: "836", change: "+5.6%", tone: "bg-white text-ink" },
];

const months = [42, 55, 48, 62, 58, 71, 66, 78, 74, 86, 80, 94];
const monthLabels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const branches = [
  { name: "Karachi", share: 42, color: "#637545" },
  { name: "Lahore", share: 33, color: "#1C1C1C" },
  { name: "Islamabad", share: 25, color: "#CFC7B6" },
];

/** Where each donut segment starts (the circle's circumference is 100). */
const segmentOffsets = branches.map((_, index) => 25 - branches.slice(0, index).reduce((sum, b) => sum + b.share, 0));

const orders = [
  {
    id: "#ORD-2291",
    client: "Nexora Retail",
    amount: "PKR 84,200",
    status: "Paid",
    tone: "bg-success/12 text-success",
  },
  {
    id: "#ORD-2290",
    client: "Vertex Labs",
    amount: "PKR 126,500",
    status: "Pending",
    tone: "bg-warning/15 text-warning",
  },
  { id: "#ORD-2289", client: "Cloudnest", amount: "PKR 39,900", status: "Paid", tone: "bg-success/12 text-success" },
];

/** Donut chart drawn with stroke segments on a circle. */
function Donut() {
  const radius = 15.9155; // circumference of 100
  return (
    <svg viewBox="0 0 42 42" className="size-24 shrink-0" aria-hidden="true">
      <circle cx="21" cy="21" r={radius} fill="none" stroke="#ECE8DE" strokeWidth="6" />
      {branches.map((branch, index) => (
        <circle
          key={branch.name}
          cx="21"
          cy="21"
          r={radius}
          fill="none"
          stroke={branch.color}
          strokeWidth="6"
          strokeDasharray={`${branch.share - 1.2} ${100 - branch.share + 1.2}`}
          strokeDashoffset={segmentOffsets[index]}
          className="mk-draw"
          style={cssVars({ "--d": `${500 + index * 200}ms` })}
        />
      ))}
      <text x="21" y="22.5" textAnchor="middle" className="fill-ink text-[6px] font-bold">
        3
      </text>
      <text x="21" y="27.5" textAnchor="middle" className="fill-ink/50 text-[3.2px]">
        branches
      </text>
    </svg>
  );
}

/** A business management dashboard: KPIs, revenue chart, branch split and orders. */
export function DashboardMockup() {
  return (
    <div className="relative @container">
      <Window title="Operations Hub · Dashboard" className="text-[12px]">
        <div className="flex">
          <nav aria-hidden="true" className="hidden w-14 shrink-0 flex-col items-center gap-2 bg-pine py-4 @lg:flex">
            <span className="mb-2 grid size-8 place-items-center rounded-lg bg-sage font-sans text-[13px] font-extrabold text-white">
              O
            </span>
            {[LayoutDashboard, ChartColumn, Package, Users, Wallet, Settings].map((Icon, index) => (
              <span
                key={index}
                className={cn(
                  "grid size-9 place-items-center rounded-lg",
                  index === 0 ? "bg-white/15 text-white" : "text-white/50",
                )}
              >
                <Icon className="size-4" />
              </span>
            ))}
          </nav>

          <div className="min-w-0 flex-1 bg-[#F7F4EE] p-3.5 @lg:p-4">
            <div className="flex items-center gap-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-[10.5px] text-ink/50">Good morning, Ahmed</p>
                <p className="font-sans text-[15px] font-bold">This month at a glance</p>
              </div>
              <span className="hidden h-8 items-center gap-2 rounded-lg bg-white px-2.5 text-ink/45 @md:flex">
                <Search aria-hidden="true" className="size-3.5" /> Search
              </span>
              <span className="grid size-8 place-items-center rounded-lg bg-white">
                <Bell aria-hidden="true" className="size-3.5" />
              </span>
              <Initial name="Ahmed Raza" className="bg-sage-tint text-sage" />
            </div>

            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              {kpis.map((kpi, index) => (
                <div
                  key={kpi.label}
                  className={cn("mk-rise rounded-xl p-3", kpi.tone)}
                  style={cssVars({ "--d": `${index * 110}ms` })}
                >
                  <p className="text-[10.5px] opacity-75">{kpi.label}</p>
                  <p className="mt-1 font-sans text-[13px] leading-tight font-bold @md:text-[17px]">{kpi.value}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold opacity-85">
                    <TrendingUp aria-hidden="true" className="size-3" /> {kpi.change}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid grid-cols-1 gap-2.5 @lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-xl bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Revenue</p>
                  <span className="rounded-md bg-stone px-2 py-0.5 text-[10px] font-semibold text-ink/60">2026</span>
                </div>
                <div aria-hidden="true" className="mt-3 flex h-28 items-end gap-1.5">
                  {months.map((value, index) => (
                    <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                      <span
                        className={cn(
                          "mk-grow-y w-full rounded-t-[4px]",
                          index === months.length - 1 ? "bg-sage" : "bg-sage-tint",
                        )}
                        style={cssVars({ "--d": `${250 + index * 60}ms` }, { height: `${value}%` })}
                      />
                      <span className="text-[8.5px] text-ink/40">{monthLabels[index]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-3">
                <Donut />
                <ul className="space-y-1.5 text-[10.5px]">
                  {branches.map((branch) => (
                    <li key={branch.name} className="flex items-center gap-1.5">
                      <span className="size-2 rounded-sm" style={{ backgroundColor: branch.color }} />
                      <span className="text-ink/65">{branch.name}</span>
                      <span className="font-semibold">{branch.share}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-2.5 rounded-xl bg-white p-3">
              <p className="font-semibold">Recent orders</p>
              <table className="mt-2 w-full text-left text-[10.5px]">
                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className="mk-rise border-t border-ink/6"
                      style={cssVars({ "--d": `${900 + index * 120}ms` })}
                    >
                      <td className="numeral py-1.5 text-ink/55">{order.id}</td>
                      <td className="py-1.5 font-medium">{order.client}</td>
                      <td className="hidden py-1.5 @md:table-cell">{order.amount}</td>
                      <td className="py-1.5 text-right">
                        <span className={cn("rounded-full px-2 py-0.5 font-semibold", order.tone)}>{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}
