import React, { useEffect, useMemo, useRef, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  loop?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseMs = 1100,
  loop = true,
  className = '',
}) => {
  const safeTexts = useMemo(() => (texts.length ? texts : ['']), [texts]);
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const current = safeTexts[textIndex];
    const isComplete = displayed === current;
    const isEmpty = displayed === '';

    const schedule = (fn: () => void, delay: number) => {
      timerRef.current = window.setTimeout(fn, delay);
    };

    if (!isDeleting && !isComplete) {
      schedule(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeedMs);
    } else if (!isDeleting && isComplete) {
      schedule(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && !isEmpty) {
      schedule(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeedMs);
    } else if (isDeleting && isEmpty) {
      if (textIndex < safeTexts.length - 1) {
        setTextIndex(textIndex + 1);
        setIsDeleting(false);
      } else if (loop) {
        setTextIndex(0);
        setIsDeleting(false);
      }
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, textIndex, safeTexts, typingSpeedMs, deletingSpeedMs, pauseMs, loop]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {displayed}
      <span className="inline-block w-[1ch] animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;


