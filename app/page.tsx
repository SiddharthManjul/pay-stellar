import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Waitlist from "@/components/waitlist"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Waitlist />
        </main>
        <Footer />
      </div>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute -bottom-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[120px]" />
      </div>
    </div>
  )
}
