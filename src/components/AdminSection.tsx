import { Users, FileCheck, BarChart3, ArrowRight, CircleCheck as CheckCircle, Clock, TriangleAlert as AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'মোট নিবন্ধ', value: '১,২৪৭', change: '+১২% এ সপ্তাহে', icon: BarChart3, color: 'bg-[#2E4CB2]/10 text-[#2E4CB2]' },
  { label: 'অনুমোদনের অপেক্ষায়', value: '২৩', change: '৫টি জরুরি', icon: Clock, color: 'bg-amber-50 text-amber-600' },
  { label: 'সক্রিয় লেখক', value: '৪৮', change: '+৩ নতুন', icon: Users, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'ফ্যাক্ট চেক করা', value: '৯৮%', change: 'গত ৩০ দিনে', icon: CheckCircle, color: 'bg-[#1BA1E2]/10 text-[#1BA1E2]' },
]

const pendingReviews = [
  { title: 'ঢাকা মেট্রোরেল নিয়ে নতুন প্রতিবেদন', author: 'রাকিব হাসান', time: '১০ মিনিট আগে', priority: 'high' },
  { title: 'বাজেট বিশ্লেষণ: শিক্ষা খাত', author: 'সাবরিনা আক্তার', time: '৩০ মিনিট আগে', priority: 'normal' },
  { title: 'ক্রিকেট দলের দক্ষিণ আফ্রিকা সফর', author: 'মোহাম্মদ আলী', time: '১ ঘন্টা আগে', priority: 'normal' },
]

export default function AdminSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-background to-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-[#2E4CB2]" />
            <h2 className="font-headline text-xl md:text-2xl font-bold text-foreground">এডমিন কনসোল</h2>
          </div>
          <a href="/admin" className="text-sm font-semibold text-[#2E4CB2] hover:text-[#1BA1E2] flex items-center gap-1 transition-colors">
            ড্যাশবোর্ড <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-white rounded-xl border border-border/60 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-3', stat.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-headline text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-[#1BA1E2] mt-2 font-medium">{stat.change}</div>
              </div>
            )
          })}
        </div>

        {/* Pending reviews */}
        <div className="bg-white rounded-xl border border-border/60 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline text-base font-bold text-foreground flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#2E4CB2]" /> অনুমোদনের অপেক্ষায়
            </h3>
            <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
              {pendingReviews.length}টি নিবন্ধ
            </span>
          </div>
          <div className="space-y-3">
            {pendingReviews.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-headline text-sm font-semibold text-foreground truncate">{item.title}</h4>
                    {item.priority === 'high' && (
                      <span className="shrink-0 flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                        <AlertTriangle className="w-3 h-3" /> জরুরি
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors">
                    অনুমোদন
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-700 hover:bg-red-100 transition-colors">
                    প্রত্যাখ্যান
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
