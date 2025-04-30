"use client"

import { motion } from "framer-motion"
import { Coins, Users, Wallet, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Coins className="h-10 w-10 text-cyan-400" />,
    title: "Token Listing Module",
    description:
      "Choose your preferred token for salary payments with complete flexibility and cross-border adaptability.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-400" />,
    title: "Employee List Management",
    description:
      "Secure decentralized identifiers link your off-chain data with on-chain wallet identities for privacy and verifiability.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-emerald-400" />,
    title: "UBI & Salary Transfer",
    description:
      "Automated payroll with UBI deductions and stablecoin conversion ensures consistent income and investment growth.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-pink-400" />,
    title: "Capital Gains Payment",
    description:
      "Year-end bonuses derived from UBI deductions and liquidity pool returns create a hybrid salary + investment model.",
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            Redefining Payroll Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            BallisticPay combines four powerful modules to create a fully automated and decentralized
            payroll-to-investment pipeline.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-slate-800/50 w-fit mb-4">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
