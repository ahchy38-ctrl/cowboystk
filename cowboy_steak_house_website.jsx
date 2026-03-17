import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CowboySteakHouse() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 md:px-10 border-b border-neutral-800">
        <h1 className="text-xl md:text-2xl font-bold">Cowboy Steak House</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <Button className="md:hidden">Menu</Button>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Authentic Steak Experience
          </h2>
          <p className="text-neutral-400 mb-6">
            Premium cuts, fire-grilled perfection, and a true cowboy vibe.
          </p>
          <Button className="text-lg px-6 py-3">Order Now</Button>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
          alt="steak"
          className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Menu Section */}
      <div id="menu" className="p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Menu</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Ribeye Steak", "T-Bone Steak", "Grilled Chicken", "BBQ Ribs", "Burger", "Fries"].map((item, i) => (
            <Card key={i} className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-4">
                <div className="h-40 bg-neutral-800 rounded-xl mb-4" />
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="text-neutral-400 text-sm">Delicious and freshly made.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="p-6 md:p-12 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-neutral-400">
            Cowboy Steak House brings you the finest quality steaks with a rustic western atmosphere. Our chefs use traditional grilling techniques to deliver bold flavors.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="p-6 md:p-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-neutral-400 mb-6">Visit us or place an order online.</p>
          <Button className="px-6 py-3">Call Now</Button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-neutral-500 text-sm p-4 border-t border-neutral-800">
        © 2026 Cowboy Steak House. All rights reserved.
      </div>
    </div>
  );
}
