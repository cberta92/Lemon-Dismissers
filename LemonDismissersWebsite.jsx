
// Lemon Dismissers Website (React + Tailwind concept)
// Save as: LemonDismissersWebsite.jsx

import React from "react";
import { Scale, Phone, Mail, ShieldCheck, Car, BadgeDollarSign, FileText, CircleCheck, Wrench, AlertTriangle, Star } from "lucide-react";

export default function LemonDismissersWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f4eb] text-black">

      {/* TOP BAR */}
      <div className="bg-black text-white text-sm px-6 py-2 flex justify-between">
        <div>📞 818‑213‑5130</div>
        <div>California Lemon Law Attorneys</div>
      </div>

      {/* NAV */}
      <header className="flex justify-between items-center px-8 py-5 border-b">
        <div className="flex items-center gap-3 font-bold text-xl">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Scale />
          </div>
          <span><span className="text-green-700">LEMON</span> DISMISSERS</span>
        </div>

        <nav className="flex gap-6 font-semibold">
          <a href="#">Home</a>
          <a href="#">Practice Areas</a>
          <a href="#">Why Us</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-red-600 text-white px-5 py-2 rounded-full">
          Free Case Review
        </button>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-8 py-20 items-center">
        <div>
          <h1 className="text-5xl font-black leading-tight">
            Fight Back When Your Car Keeps Letting You Down.
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Lemon Dismissers helps California drivers pursue vehicle buybacks,
            compensation, and relief when manufacturers fail to repair serious
            defects.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full">
              Start My Free Review
            </button>

            <button className="border px-6 py-3 rounded-full">
              Does My Car Qualify?
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
            <Scale size={70}/>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-black text-white py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Lemon Law Cases We Handle
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <Card icon={<BadgeDollarSign/>} title="Vehicle Buybacks"
            text="Claims pursuing repurchase of defective vehicles." />

          <Card icon={<Wrench/>} title="Repeated Repairs"
            text="Vehicles constantly returning to dealerships." />

          <Card icon={<AlertTriangle/>} title="EV Battery Issues"
            text="Charging failures, software defects, and battery issues." />

          <Card icon={<ShieldCheck/>} title="Safety Defects"
            text="Brake failures, steering issues, airbag problems." />

          <Card icon={<Car/>} title="New & Used Vehicles"
            text="Certain used vehicles with warranty may qualify." />

          <Card icon={<FileText/>} title="Repair Record Analysis"
            text="Strategic review of dealership repair orders." />

        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why Lemon Dismissers</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Feature text="Free case evaluation"/>
          <Feature text="California lemon law focus"/>
          <Feature text="Aggressive manufacturer negotiations"/>
          <Feature text="Simple intake process"/>
          <Feature text="Clear communication"/>
          <Feature text="Fast case review"/>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-black text-white py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Client Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <Testimonial
            quote="Our car kept going back to the dealership. They helped us finally push the manufacturer."
          />

          <Testimonial
            quote="They understood lemon law and knew exactly what documents mattered."
          />

          <Testimonial
            quote="The process felt organized and professional from the start."
          />

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-8 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          Start Your Free Case Review
        </h2>

        <div className="grid gap-4">

          <input className="border p-3 rounded" placeholder="Name"/>
          <input className="border p-3 rounded" placeholder="Phone"/>
          <input className="border p-3 rounded" placeholder="Email"/>
          <input className="border p-3 rounded" placeholder="Vehicle (Year / Make / Model)"/>

          <textarea className="border p-3 rounded"
            placeholder="Describe the problems with your vehicle"
          />

          <button className="bg-red-600 text-white py-3 rounded">
            Submit Case
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-sm text-center py-6">
        © 2026 Lemon Dismissers — California Lemon Law Attorneys
      </footer>

    </div>
  );
}


function Card({icon, title, text}){
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function Feature({text}){
  return (
    <div className="flex items-center gap-3 text-lg">
      <CircleCheck className="text-green-700"/>
      {text}
    </div>
  )
}

function Testimonial({quote}){
  return (
    <div className="bg-white/10 p-6 rounded-xl">
      <div className="flex mb-3 text-yellow-400">
        <Star/><Star/><Star/><Star/><Star/>
      </div>
      <p>"{quote}"</p>
    </div>
  )
}
