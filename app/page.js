/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FantasyBackground } from "../app/components/FantasyBackground";

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
    <div
      className="min-h-screen text-gray-900 dark:text-gray-100 
  bg-gradient-to-t from-yellow-200 via-orange-300 to-sky-400 
  dark:from-green-900 dark:via-orange-800 dark:to-blue-950 
  relative font-serif"
    >
      {" "}
      <FantasyBackground className="absolute inset-0 z-0" />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="relative max-w-3xl mx-auto">
          <div className="pointer-events-none absolute inset-0 rounded-3xl -z-10 shadow-[0_0_40px_12px_rgba(34,197,94,0.45)]"></div>
          <article className="focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none relative border border-green-700 bg-white/15 dark:bg-gray-900/20 backdrop-blur-2xl shadow-3xl rounded-3xl p-8 md:p-12 overflow-hidden">
            <header className="mb-12 text-center relative z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                Fantasy: My Experience and Opinions on Escapism ✨
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                By Joe Marra | Published on September --th, 2025
              </p>
            </header>

            <section className="prose prose-lg dark:prose-invert mx-auto text-gray-800 dark:text-gray-200 relative z-10">
              <h2 className="text-3xl font-bold mt-10 mb-4 fade-in-up text-center">
                The Trojan Horse of Education 📚
              </h2>
              <p className="fade-in-up text-xl">
                My first meaningful experience with fantasy as a genre was in
                late elementary school with the{" "}
                <strong>Percy Jackson series by Rick Riordan</strong>. It was
                something my mom had introduced to me as an idea for passing the
                time, so when I got into school the next day, I began to look
                for the book on the shelves. Found it!{" "}
                <em>Percy Jackson and the Sea of Monsters</em>. This was
                actually the second book in the series, but I had no idea. When
                I began reading it during quiet reading time that day, I thought
                this book stinks. All of these random characters that were never
                introduced to me barged into the story like an old friend
                walking into your house. It took me about 30 pages to realize it
                was probably a series and I was reading the wrong book. Now,
                with a bad taste in my mouth, I picked up{" "}
                <em>The Lightning Thief</em> not expecting to enjoy it. However,
                I was hooked almost immediately.
              </p>
              <br />
              <p className="fade-in-up text-xl">
                While the story was engaging, I found myself enjoying learning
                more about <strong>Greek Mythology</strong> 🏛️. I never liked
                sitting down and being lectured at to learn things (and I still
                don’t), but something about reading this book made learning
                about the Greek gods and myths fun and engaging.
              </p>
              <br />
              <div className="my-8 fade-in-up flex flex-col items-center">
                <div className="relative w-full max-w-lg aspect-[4/3]">
                  <Image
                    src="/greece.JPG"
                    alt="Me at Greece with Sea of Monsters Book"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                  Here’s me at the Parthenon in Athens, Greece with my Percy
                  Jackson book! 🇬🇷
                </p>
              </div>
              <br />
              <p className="fade-in-up text-xl">
                For a solid year, I read all of the Percy Jackson books, all of
                the Norse Mythology Magnus Chase books, and all of the Roman
                Mythology Heroes of Olympus books. These books were like a
                <strong> Trojan Horse of education</strong> 🐎. I expected to
                just be reading exciting and engaging stories, but instead I got
                that and a deep knowledge of ancient mythologies.
              </p>
              <br />
              <p className="fade-in-up text-xl">
                After finishing all of these books, I stopped reading for a
                while. Middle school had just started, I began looking into
                clubs and other afterschool activities, and schoolwork started
                to pick up. Reading books became one of the last things on my
                mind, which is kind of sad. But that summer, with no real
                reason, I decided to pick up <strong>Harry Potter</strong> ⚡.
                By this point, I wasn’t sure if I would even enjoy reading such
                a long series or have the motivation to stick with it at all.
                But when I did, it was like a life-changing moment. It became my
                personality for a solid 2 months. I would find sticks outside
                and use my whittling knife to carve them into wands, even giving
                them to my friends who asked for them. I would talk to my
                friends about what was happening in the books and almost every
                night I would watch a different one of the movies (I probably
                watched each one like 5 times in those 2 months). With not much
                going on in my life at the time, the escape into such a
                fantastic wizarding world felt euphoric, like I was actually
                there experiencing it alongside Harry. But that now leads to my
                next point about fantasy as a supplement.
              </p>
              <br />
              <div className="my-8 fade-in-up flex flex-col items-center">
                <div className="relative w-full max-w-lg aspect-[3/4]">
                  <Image
                    src="/wands.jpeg"
                    alt="Harry Potter Homemade Wants"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                  Crafting my own magic, inspired by Hogwarts. ✨
                </p>
              </div>
              <br />
              <h2 className="text-3xl font-bold mt-10 mb-4 fade-in-up text-center">
                A Hot Take on Escapism 🤯
              </h2>

              <div className="my-8 p-6 bg-yellow-100/50 dark:bg-yellow-900/50 border-l-4 border-yellow-500 rounded-lg shadow-inner fade-in-up">
                <p className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-2">🔥</span> HOT TAKE:
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-xl">
                  I feel like using fantasy as an escape from reality is a
                  harmful rhetoric. Instead, we should view it as a supplement
                  to our lives. Life can and does get difficult at times; we
                  will lose people around us, we will face health issues, we
                  will feel overwhelmed and anxious. While the desire to escape
                  is understandable, relying on fantasy solely for this purpose
                  can prevent us from confronting and growing through real-world
                  challenges. Personally, if I am going through a difficult time
                  in life, I want to embrace the things that make me feel alive
                  in this reality. Whether that’s talking to a family member 👨‍👩‍👧‍👦,
                  playing the piano or accordion 🎹, or simply going on a walk
                  while listening to music 🚶‍♀️🎶, I believe the best way to deal
                  with issues is to ground yourself in the things that make you
                  feel like you and make you confident you can overcome any
                  challenge that comes your way. I don’t think people should
                  want to escape this. If people hide from the real world in a
                  fantasy world they have no real connection to, it can make
                  them feel lost in their actual lives. 💔
                </p>
              </div>
              <br />
              <p className="fade-in-up text-xl">
                Here’s a simple analogy: imagine you have a lot of homework and
                you’re stressed out about it. Instead of doing the homework to
                relieve the stress, you start scrolling on Instagram Reels to
                drown out the feelings 📱. This is not a healthy way to deal
                with stress.
              </p>
              <br />
              <p className="fade-in-up text-xl">
                With this belief, sometimes I catch myself thinking: I have
                enough going on in this world, why would I care about something
                happening in a world I’m not a part of? 🤔
              </p>
              <br />
              <h2 className="text-3xl font-bold mt-10 mb-4 fade-in-up text-center">
                Fantasy as a Supplement for Self-Discovery 🌱
              </h2>
              <p className="fade-in-up text-xl">
                But that brings me to what I believe fantasy is good for and how
                it can supplement and improve our lives. One convenient way of
                explaining this is through the houses at Hogwarts in Harry
                Potter.
                <strong>Ravenclaw</strong> 🦅 is for the witty,{" "}
                <strong>Hufflepuff</strong> 🦡 for the empathetic,{" "}
                <strong>Slytherin</strong> 🐍 for the ambitious, and{" "}
                <strong>Gryffindor</strong> 🦁 for the noble. Everyone who has
                read Harry Potter has imagined themselves in one of these four
                houses, or has even taken a quiz online to find out which one
                they belong to. These kinds of internal conversations help us
                discover more about ourselves.
              </p>
              <br />
              <div className="relative w-full max-w-lg mx-auto aspect-[8/2]">
                <Image
                  src="/hog.jpg"
                  alt="Hogwarts Houses"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <br />
              <p className="fade-in-up text-xl">
                When debating the question “Am I Slytherin or Gryffindor?” it’s
                less about which house you’re in, and more about your values. Do
                you value resourcefulness and ambition over honor and nobility?
                Do you prioritize loyalty (Hufflepuff) or intellect (Ravenclaw)?
                This exercise in self-categorization helps us articulate who we
                are and what we aspire to be. It externalizes abstract concepts
                like morality and courage, making them tangible and easier to
                understand. When reading fantasy, we don’t always think about
                this directly. However, I believe it’s something that should be
                highlighted more. There is so much to learn about ourselves in
                the fantasy world, and it should be tapped into more often. 💡
              </p>
              <br />
              <p className="fade-in-up text-xl">
                My experience with fantasy has had its highs and lows. It began
                with the engaging world of Greek Mythology in Percy Jackson and
                has since led to a more deep and skeptical questioning of the
                genre's role in our lives. I have realized that{" "}
                <strong>
                  escapism is not what we should focus on in fantasy
                </strong>{" "}
                but instead <strong>integration</strong>, and how we can help
                derive our purpose and meaning in life from characters and
                relationships in our favorite books. 💖
              </p>
            </section>
          </article>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
