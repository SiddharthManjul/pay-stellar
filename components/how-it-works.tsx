"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const steps = [
    {
      number: "01",
      title: "Choose Your Token",
      description: "Select from a wide range of cryptocurrencies to receive your salary in your preferred token.",
    },
    {
      number: "02",
      title: "Secure Digital Identity",
      description: "Your BallisticPay DID links your employee information with your wallet address securely.",
    },
    {
      number: "03",
      title: "Automated Salary Processing",
      description: "Monthly payroll with UBI deductions and stablecoin conversion for consistent value.",
    },
    {
      number: "04",
      title: "Year-End Bonus",
      description: "Receive capital gains from your UBI deductions and liquidity pool investments.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 relative" ref={containerRef}>
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400">
            How BallisticPay Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined process makes crypto payroll and investment simple, secure, and beneficial for both
            employers and employees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 transform md:translate-x-[-0.5px]"></div>

            {steps.map((step, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
                >
                  <div className="md:w-1/2 relative">
                    <div
                      className={`absolute top-0 ${index % 2 === 0 ? "right-0 md:left-0" : "left-0 md:right-0"} w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center transform translate-x-[-50%] md:translate-x-[${index % 2 === 0 ? "-" : ""}50%] z-10`}
                    >
                      <span className="text-purple-400 font-bold">{step.number}</span>
                    </div>
                    <div
                      className={`pt-2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div
                      className={`h-40 rounded-lg bg-gradient-to-br ${index % 2 === 0 ? "from-cyan-900/30 to-purple-900/30" : "from-purple-900/30 to-emerald-900/30"} border border-slate-800 flex items-center justify-center`}
                    >
                      <div
                        className={`text-5xl font-bold bg-clip-text text-transparent ${index % 2 === 0 ? "bg-gradient-to-r from-cyan-400 to-purple-400" : "bg-gradient-to-r from-purple-400 to-emerald-400"}`}
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
