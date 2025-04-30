"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, Mail } from "lucide-react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section id="waitlist" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-xl shadow-cyan-500/5"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Join the Waitlist
                </h2>
                <p className="text-gray-400 mb-6">
                  Be among the first to experience the future of decentralized payroll and investment. Sign up now for
                  early access and exclusive updates.
                </p>

                {submitted ? (
                  <div className="bg-emerald-900/20 border border-emerald-800 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="text-emerald-400 h-5 w-5 flex-shrink-0" />
                    <p className="text-emerald-300">Thanks for joining! We'll notify you when BallisticPay launches.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-10 bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-slate-900 rounded-lg p-6 border border-slate-800">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-cyan-400" />
                        </div>
                        <p className="text-gray-300">Crypto-native payroll with token flexibility</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-purple-400" />
                        </div>
                        <p className="text-gray-300">Stable, inflation-resistant payouts</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p className="text-gray-300">Built-in, automated savings via UBI deductions</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-pink-400" />
                        </div>
                        <p className="text-gray-300">Passive income through capital gains</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-900/50 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-amber-400" />
                        </div>
                        <p className="text-gray-300">Verifiable digital identity with DIDs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
