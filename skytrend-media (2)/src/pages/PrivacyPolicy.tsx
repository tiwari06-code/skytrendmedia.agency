import React from "react";
import { motion } from "motion/react";
import { useSeo } from "../hooks/useSeo";

export function PrivacyPolicy() {
  useSeo({
    title: "Privacy Policy",
    description: "Privacy policy and data protection guidelines for SKYTrend Media."
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-blue-500"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 mt-10">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 mb-12">Last Updated: October 10, 2024</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to SKYTrend Media. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights.
          </p>

          <h2>2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2>3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:skytrendmedia.agency@gmail.com">skytrendmedia.agency@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
