"use client";
import { useEffect, useState } from "react";

const Typewriter = ({
  texts,
  speed = 100,
}: {
  texts: string[];
  speed: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Make sure texts array is not empty
    if (!texts || texts.length === 0) return;

    const text = texts[currentTextIndex];

    // If we're waiting between actions, don't do anything
    if (isWaiting) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing mode
          setIsTyping(true);
          if (displayedText.length < text.length) {
            setDisplayedText(text.substring(0, displayedText.length + 1));
          } else {
            // Finished typing, wait before deleting
            setIsTyping(false);
            setIsWaiting(true);
            setTimeout(() => {
              setIsDeleting(true);
              setIsWaiting(false);
            }, 1500); // Wait time before starting to delete
          }
        } else {
          // Deleting mode
          setIsTyping(true);
          if (displayedText.length > 0) {
            setDisplayedText(
              displayedText.substring(0, displayedText.length - 1)
            );
          } else {
            // Finished deleting, move to next text
            setIsTyping(false);
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 1.5 : speed
    ); // Faster when deleting

    return () => clearTimeout(timeout);
  }, [currentTextIndex, displayedText, isDeleting, isWaiting, texts, speed]);

  return (
    <div className="flex gap-2 font-mono text-2xl text-gray-800">
      <p>I&rsquo;m</p>
      <p className="italic underline decoration-[rgb(5,99,187)]">
        {displayedText}
      </p>
      <span className={isTyping ? "" : "animate-blink-fast"}>|</span>
    </div>
  );
};

export default Typewriter;
