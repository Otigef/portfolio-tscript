import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface HomeTransitionProps {
  onComplete: () => void;
  isVisible: boolean;
}

const HomeTransition: React.FC<HomeTransitionProps> = ({ onComplete, isVisible }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showOverlay, setShowOverlay] = useState(isVisible);

  const name = PERSONAL_INFO.name;
  const typingSpeed = 120; // ms per character - faster for name
  const cursorBlinkSpeed = 500; // ms
  const pauseAfterTyping = 1200; // ms - longer pause for name
  const fadeOutDuration = 500; // ms - smooth transition

  useEffect(() => {
    if (isVisible) {
      // Reset state when overlay becomes visible
      setDisplayedName('');
      setIsComplete(false);
      setShowOverlay(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Typewriter effect for name
    let timeoutId: NodeJS.Timeout;
    
    if (displayedName.length < name.length) {
      timeoutId = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
      }, typingSpeed);
    } else if (!isComplete) {
      // Wait a moment after typing is complete
      timeoutId = setTimeout(() => {
        setIsComplete(true);
        // Start fade out after a brief pause
        setTimeout(() => {
          setShowOverlay(false);
          setTimeout(onComplete, fadeOutDuration);
        }, pauseAfterTyping);
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedName, isComplete, isVisible, onComplete, pauseAfterTyping, fadeOutDuration, name, typingSpeed]);

  useEffect(() => {
    // Cursor blinking effect - only when overlay is visible
    if (!isVisible) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [isVisible, cursorBlinkSpeed]);

  if (!showOverlay) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-${fadeOutDuration} ${
      showOverlay ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-teal-400 mb-4 font-mono tracking-wider">
          {displayedName}
          <span className={`inline-block w-1 h-12 md:h-16 bg-teal-400 ml-2 transition-opacity duration-150 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}></span>
        </div>
        {isComplete && (
          <div className="text-teal-300 text-lg animate-pulse">
            Welcome Home
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTransition;
