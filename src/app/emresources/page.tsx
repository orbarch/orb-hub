"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import { emResources } from "@/data/emresources";
import {
  SearchBar,
  StandardsContent,
  AnimatedHeader,
} from "@/app/standards/StandardsComponents";

export default function RevitManualsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Employee Resources
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                Useful links.
              </motion.p>
            </div>
            <StandardsContent sections={emResources} searchTerm={searchTerm} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
