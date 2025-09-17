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
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-t from-yellow-100 via-orange-300 to-blue-400 dark:from-yellow-700 dark:via-orange-800 dark:to-blue-900 relative font-serif overflow-hidden">
      <FantasyBackground className="absolute inset-0 z-0" />{" "}
      {/* This now includes both sparkles and witch */}
      {/* NEW: Floating Leaf Images - using your provided SVG */}
      {/* <div className="absolute top-[10%] left-[15%] w-10 h-10 text-orange-400 opacity-80 rotate-[30deg] animate-fall-1 z-[1] pointer-events-none">
        <Image
          src="/leaf.svg"
          alt="Floating leaf"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-[20%] right-[10%] w-12 h-12 text-red-500 opacity-70 rotate-[-45deg] animate-fall-2 z-[1] pointer-events-none">
        <Image
          src="/leaf.svg"
          alt="Floating leaf"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute bottom-[25%] left-[5%] w-14 h-14 text-yellow-500 opacity-75 rotate-[15deg] animate-fall-3 z-[1] pointer-events-none">
        <Image
          src="/leaf.svg"
          alt="Floating leaf"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-[40%] right-[20%] w-8 h-8 text-amber-600 opacity-60 rotate-[60deg] animate-fall-4 z-[1] pointer-events-none">
        <Image
          src="/leaf.svg"
          alt="Floating leaf"
          layout="fill"
          objectFit="contain"
        />
      </div> */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        {" "}
        {/* z-10 ensures content is above background */}
        <article
          className="relative max-w-3xl mx-auto bg-white/15 dark:bg-gray-900/20 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden"
          style={{
            boxShadow:
              "0 0 20px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3)",
          }}
        >
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

            <div className="relative w-full h-80 my-8 rounded-xl overflow-hidden shadow-2xl fade-in-up">
              <Image
                src="/enchanted_forest.jpg"
                alt="A magical autumn forest scene"
                layout="fill"
                objectFit="cover"
              />
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
