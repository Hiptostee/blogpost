"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FantasyBackground } from "../app/components/FantasyBackground"; // Import the renamed component

export default function BlogPost() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up-visible");
        }
      });
    });

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-t from-yellow-100 via-orange-300 to-blue-400 dark:from-yellow-700 dark:via-orange-800 dark:to-blue-900 relative font-serif">
      <FantasyBackground className="absolute inset-0 z-0" />{" "}
      {/* This now includes both sparkles and witch */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        {" "}
        {/* z-10 ensures content is above background */}
        <article className="focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none relative max-w-3xl mx-auto border border-green-700 bg-white/15 dark:bg-gray-900/20 backdrop-blur-2xl shadow-3xl rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Enhanced Vine SVGs for a wrapping effect */}
          {/* Top-Left Corner Vine */}

          {/* Content */}
          <header className="mb-12 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
              A Modern Take on Next.js Blog Design
            </h1>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              By Joe Marra | Published on September 20th, 2025
            </p>
          </header>

          <section className="prose prose-lg dark:prose-invert mx-auto text-gray-800 dark:text-gray-200 relative z-10">
            <p className="fade-in-up">
              This is the opening paragraph of your blog post. It sets the stage
              for your readers and introduces the main topic. With a clean
              design and subtle animations, your content will be more engaging
              and professional.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 fade-in-up">
              The Power of Modern Design
            </h2>
            <p className="fade-in-up">
              A great user experience goes beyond just the words on the page.
              Thoughtful typography, balanced whitespace, and subtle
              interactions can make a huge difference in how your content is
              perceived. This template provides a solid foundation for a
              beautiful and reader-friendly blog.
            </p>

            <div className="relative w-full h-80 bg-gradient-to-br from-green-200/30 to-yellow-200/20 dark:from-green-700/20 dark:to-yellow-600/10 rounded-xl flex items-center justify-center shadow-inner my-8 fade-in-up">
              <span className="text-gray-600 dark:text-gray-400 text-lg">
                [Placeholder for Magical Image]
              </span>
            </div>

            <p className="fade-in-up">
              You can add more paragraphs and images to tell your story. The
              fantasy-inspired glass container with vines makes your blog feel
              immersive and alive.
            </p>
          </section>
        </article>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
