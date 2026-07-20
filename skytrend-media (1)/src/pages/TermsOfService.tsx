import React from "react";
import { motion } from "motion/react";
import { useSeo } from "../hooks/useSeo";

export function TermsOfService() {
  useSeo({
    title: "Terms of Service",
    description: "Terms of service and usage conditions for SKYTrend Media."
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-blue-500"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 mt-10">Terms of Service</h1>
          <p className="text-sm text-zinc-500 mb-12">Last Updated: October 10, 2024</p>
          
          <h2>1. Terms</h2>
          <p>
            By accessing the website at skytrendmedia.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on SKYTrend Media's website for personal, non-commercial transitory viewing only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on SKYTrend Media's website are provided on an 'as is' basis. SKYTrend Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall SKYTrend Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SKYTrend Media's website.
          </p>

          <h2>5. Revisions and Errata</h2>
          <p>
            The materials appearing on SKYTrend Media's website could include technical, typographical, or photographic errors. SKYTrend Media does not warrant that any of the materials on its website are accurate, complete or current.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
