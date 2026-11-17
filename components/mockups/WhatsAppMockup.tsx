import { CheckCheck, Paperclip, Search, Send, Smile, Zap } from "lucide-react";
import { cn, cssVars } from "@/lib/cn";
import { Initial, Window } from "./Window";

const chats = [
  {
    name: "Fatima Noor",
    text: "Is my order #4821 shipped?",
    time: "10:42",
    unread: 2,
    label: "Orders",
    tone: "bg-cobalt-tint text-cobalt",
    active: true,
  },
  {
    name: "Ali Hassan",
    text: "Auto-reply: Prices sent ✓",
    time: "10:31",
    unread: 0,
    label: "Sales",
    tone: "bg-stone text-ink",
  },
  {
    name: "Zainab Qureshi",
    text: "Can I exchange the size?",
    time: "10:18",
    unread: 1,
    label: "Support",
    tone: "bg-stone text-ink",
  },
  {
    name: "Omar Siddiqui",
    text: "Thank you, received!",
    time: "09:56",
    unread: 0,
    label: "Orders",
    tone: "bg-stone text-ink",
  },
  {
    name: "Mehwish Ali",
    text: "Do you deliver to Multan?",
    time: "09:40",
    unread: 0,
    label: "Sales",
    tone: "bg-stone text-ink",
  },
];

/** A WhatsApp Business team inbox with automated replies (inspired by, not copying, WhatsApp). */
export function WhatsAppMockup() {
  return (
    <div className="relative @container">
      <Window title="Team Inbox · WhatsApp Business" className="text-[12px]">
        <div className="grid grid-cols-1 @xl:grid-cols-[13.5rem_1fr]">
          {/* Conversation list */}
          <div className="hidden border-r border-ink/8 bg-white @xl:block">
            <div className="p-3">
              <div className="flex h-8 items-center gap-2 rounded-lg bg-paper px-2.5 text-ink/50">
                <Search aria-hidden="true" className="size-3.5" />
                Search chats
              </div>
              <div className="mt-2.5 flex gap-1.5 text-[10.5px] font-semibold">
                <span className="rounded-full bg-ink px-2.5 py-1 text-white">All</span>
                <span className="rounded-full bg-paper px-2.5 py-1">Unread</span>
                <span className="rounded-full bg-paper px-2.5 py-1">Orders</span>
              </div>
            </div>
            <ul>
              {chats.map((chat) => (
                <li
                  key={chat.name}
                  className={cn("flex gap-2.5 border-t border-ink/6 px-3 py-2.5", chat.active && "bg-cobalt-tint/50")}
                >
                  <Initial name={chat.name} className={chat.tone} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-semibold">{chat.name}</span>
                      <span className={cn("text-[10px]", chat.unread ? "font-semibold text-cobalt" : "text-ink/45")}>
                        {chat.time}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center justify-between gap-2">
                      <span className="truncate text-ink/55">{chat.text}</span>
                      {chat.unread ? (
                        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-cobalt text-[9px] font-bold text-white">
                          {chat.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversation */}
          <div className="flex min-h-[23rem] flex-col bg-[#F1EFEA]">
            <div className="flex items-center gap-2.5 border-b border-ink/8 bg-white px-3.5 py-2.5">
              <Initial name="Fatima Noor" className="bg-cobalt-tint text-cobalt" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold">Fatima Noor</p>
                <p className="text-[10.5px] text-success">online · assigned to Sana</p>
              </div>
              <span className="rounded-full bg-stone px-2 py-0.5 text-[10px] font-semibold">Orders</span>
            </div>

            <div className="flex-1 space-y-2.5 p-3.5">
              <p className="mx-auto w-fit rounded-md bg-white/80 px-2 py-0.5 text-[10px] text-ink/55">Today</p>
              <div className="max-w-[78%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-[0_1px_0_rgba(17,19,34,0.06)]">
                Assalam o Alaikum! Is my order #4821 shipped?
                <span className="mt-0.5 block text-right text-[9.5px] text-ink/40">10:41</span>
              </div>
              <div
                className="mk-rise ml-auto max-w-[84%] rounded-xl rounded-tr-sm bg-cobalt-tint px-3 py-2 shadow-[0_1px_0_rgba(17,19,34,0.06)]"
                style={cssVars({ "--d": "250ms" })}
              >
                <span className="mb-1 inline-flex items-center gap-1 rounded bg-cobalt/12 px-1.5 py-0.5 text-[9.5px] font-bold text-cobalt">
                  <Zap aria-hidden="true" className="size-2.5" /> Auto-reply
                </span>
                <p>Walaikum Assalam Fatima! Your order has shipped and arrives on Thursday.</p>
                <div className="mt-2 flex items-center gap-2.5 rounded-lg bg-white p-2">
                  <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-md bg-ink">
                    <span className="h-5 w-4 rounded-t-full bg-cobalt-soft" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">Order #4821 · 2 items</span>
                    <span className="block text-[10.5px] text-ink/55">Courier · Tracking LHR-90213</span>
                  </span>
                  <span className="rounded-full bg-success px-2 py-0.5 text-[9.5px] font-bold text-white">Shipped</span>
                </div>
                <span className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-ink/40">
                  10:41 <CheckCheck aria-hidden="true" className="size-3 text-cobalt" />
                </span>
              </div>
              <div
                className="mk-rise max-w-[60%] rounded-xl rounded-tl-sm bg-white px-3 py-2"
                style={cssVars({ "--d": "650ms" })}
              >
                Great, JazakAllah! 🙌
                <span className="mt-0.5 block text-right text-[9.5px] text-ink/40">10:42</span>
              </div>
              <div className="flex w-fit gap-1 rounded-xl bg-white px-3 py-2.5" aria-hidden="true">
                {[0, 0.2, 0.4].map((delay) => (
                  <span
                    key={delay}
                    className="typing-dot size-1.5 rounded-full bg-ink/40"
                    style={cssVars({ "--d": `${delay}s` })}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 px-3.5 pb-2.5 text-[10.5px] font-semibold">
              {["Track order", "Return policy", "Talk to an agent"].map((chip) => (
                <span key={chip} className="rounded-full border border-cobalt/30 bg-white px-2.5 py-1 text-cobalt">
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-[#F6F5F2] px-3 py-2.5 text-ink/45">
              <Smile aria-hidden="true" className="size-4" />
              <Paperclip aria-hidden="true" className="size-4" />
              {/* The agent's reply types itself out in the composer, then clears and repeats. */}
              <span className="flex h-8 min-w-0 flex-1 items-center overflow-hidden rounded-full bg-white px-3 text-ink">
                <span className="mk-type" style={cssVars({ "--n": 34 })}>
                  Sure! Sharing your tracking link now
                </span>
                <span className="mk-caret text-cobalt" />
              </span>
              <span className="mk-pulse flex size-8 items-center justify-center rounded-full bg-cobalt text-white">
                <Send aria-hidden="true" className="size-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Window>

      {/* Floating insight chips */}
      <div
        className="mk-pop absolute -top-4 right-4 rounded-xl bg-white px-3.5 py-2.5 text-ink shadow-mock @lg:-right-4"
        style={cssVars({ "--d": "900ms" })}
      >
        <p className="text-[10px] text-ink/55">Avg. first reply</p>
        <p className="font-display text-[1.25rem] leading-tight font-bold">12 sec</p>
      </div>
      <div
        className="mk-pop absolute -bottom-5 left-4 hidden rounded-xl bg-white px-3.5 py-2.5 shadow-mock @md:block @lg:-left-5"
        style={cssVars({ "--d": "1100ms" })}
      >
        <p className="text-[10px] text-ink/55">Resolved automatically</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-display text-[1.25rem] leading-tight font-bold text-ink">68%</span>
          <span className="h-1.5 w-20 overflow-hidden rounded-full bg-ink/10">
            <span
              className="mk-grow-x block h-full w-[68%] rounded-full bg-cobalt"
              style={cssVars({ "--d": "1300ms" })}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
