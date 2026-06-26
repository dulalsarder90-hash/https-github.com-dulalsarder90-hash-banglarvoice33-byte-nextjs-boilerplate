import { Send, CircleCheck as CheckCircle, CircleAlert as AlertCircle, RefreshCw, Bot } from 'lucide-react'

const statusItems = [
  { label: 'বিডিনিউজ টোয়েন্টিফোর', status: 'synced', lastSync: '৫ মিনিট আগে' },
  { label: 'প্রথম আলো', status: 'synced', lastSync: '৩ মিনিট আগে' },
  { label: 'দ্য ডেইলি স্টার', status: 'syncing', lastSync: 'এখন...' },
  { label: 'বাংলা ট্রিবিউন', status: 'pending', lastSync: '১৫ মিনিট আগে' },
]

export default function TelegramSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-[#0088cc]" />
            <h2 className="font-headline text-xl md:text-2xl font-bold text-foreground">টেলিগ্রাম কন্ট্রোল প্যানেল</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Telegram bot info */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-border/60 shadow-sm p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0088cc]/10 flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-[#0088cc]" />
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold text-foreground">@BanglarPulseBot</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  টেলিগ্রামে আমাদের বটের মাধ্যমে সরাসরি সংবাদ সিঙ্ক ও ম্যানেজ করুন।
                </p>
              </div>
            </div>

            {/* Command list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { cmd: '/sync', desc: 'সকল সোর্স থেকে সংবাদ সিঙ্ক করুন' },
                { cmd: '/status', desc: 'বর্তমান সিঙ্ক স্ট্যাটাস দেখুন' },
                { cmd: '/breaking', desc: 'ব্রেকিং নিউজ প্রকাশ করুন' },
                { cmd: '/stats', desc: 'আজকের সাইট পরিসংখ্যান দেখুন' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <code className="text-xs font-mono bg-[#0088cc]/10 text-[#0088cc] px-2 py-1 rounded">{item.cmd}</code>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>

            <a
              href="https://t.me/BanglarPulseBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0088cc] text-white text-sm font-semibold hover:bg-[#0077b3] transition-colors"
            >
              <Send className="w-4 h-4" /> বটে যান
            </a>
          </div>

          {/* Sync status */}
          <div className="bg-white rounded-xl border border-border/60 shadow-sm p-6">
            <h3 className="font-headline text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#0088cc]" /> সিঙ্ক স্ট্যাটাস
            </h3>
            <div className="space-y-3">
              {statusItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    {item.status === 'synced' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    {item.status === 'syncing' && <RefreshCw className="w-4 h-4 text-[#0088cc] animate-spin" />}
                    {item.status === 'pending' && <AlertCircle className="w-4 h-4 text-amber-500" />}
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.lastSync}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#0088cc]/20 text-[#0088cc] text-sm font-semibold hover:bg-[#0088cc]/5 transition-colors">
              <RefreshCw className="w-4 h-4" /> ফোর্স সিঙ্ক
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
