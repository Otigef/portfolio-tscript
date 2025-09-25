import React, { useState, useEffect } from 'react';

interface TransitionOverlayProps {
  onComplete: () => void;
  isVisible: boolean;
}

interface WelcomeMessageProps {
  isVisible: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isVisible }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isMessageComplete, setIsMessageComplete] = useState(false);

  const message = isVisible ? "Welcome to my portfolio" : "Navigating...";
  const messageTypingSpeed = 80; // ms per character - slower for readability
  const messageCursorBlinkSpeed = 500; // ms

  useEffect(() => {
    if (!isVisible) return;

    // Reset message state when overlay becomes visible
    setDisplayedMessage('');
    setIsMessageComplete(false);

    // Typewriter effect for message
    let timeoutId: NodeJS.Timeout;
    
    if (displayedMessage.length < message.length) {
      timeoutId = setTimeout(() => {
        setDisplayedMessage(message.slice(0, displayedMessage.length + 1));
      }, messageTypingSpeed);
    } else if (!isMessageComplete) {
      setIsMessageComplete(true);
      // Notify parent that welcome message is complete
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('welcomeMessageComplete'));
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedMessage, isMessageComplete, isVisible, message, messageTypingSpeed]);

  useEffect(() => {
    // Cursor blinking effect for message
    if (!isVisible) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, messageCursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [isVisible, messageCursorBlinkSpeed]);

  return (
    <div className="text-teal-300 text-lg">
      {displayedMessage}
      <span className={`inline-block w-1 h-5 bg-teal-300 ml-1 transition-opacity duration-100 ${
        showCursor ? 'opacity-100' : 'opacity-0'
      }`}></span>
    </div>
  );
};

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ onComplete, isVisible }) => {
  const [showHello, setShowHello] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showOverlay, setShowOverlay] = useState(isVisible);
  const [welcomeMessageComplete, setWelcomeMessageComplete] = useState(false);

  const text = 'HELLO';
  const helloBlinkSpeed = 800; // ms - blink speed for HELLO
  const cursorBlinkSpeed = 600; // ms - elegant blink
  const pauseAfterTyping = 2000; // ms - 2 seconds after welcome message completes
  const fadeOutDuration = 500; // ms - smooth transition

  useEffect(() => {
    if (isVisible) {
      // Reset state when overlay becomes visible
      setShowHello(false);
      setIsComplete(false);
      setShowOverlay(true);
      setWelcomeMessageComplete(false);
    }
  }, [isVisible]);

  useEffect(() => {
    // Listen for welcome message completion
    const handleWelcomeComplete = () => {
      setWelcomeMessageComplete(true);
    };

    window.addEventListener('welcomeMessageComplete', handleWelcomeComplete);
    return () => window.removeEventListener('welcomeMessageComplete', handleWelcomeComplete);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // HELLO blinking effect
    let timeoutId: NodeJS.Timeout;
    
    if (!showHello) {
      // Start blinking HELLO after a brief delay
      timeoutId = setTimeout(() => {
        setShowHello(true);
      }, 300);
    } else if (!isComplete) {
      // Wait for welcome message to complete, then wait 2 seconds
      if (welcomeMessageComplete) {
        timeoutId = setTimeout(() => {
          setIsComplete(true);
          // Start fade out after 2 seconds
          setTimeout(() => {
            setShowOverlay(false);
            setTimeout(onComplete, fadeOutDuration);
          }, pauseAfterTyping);
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [showHello, isComplete, isVisible, onComplete, pauseAfterTyping, fadeOutDuration, welcomeMessageComplete]);

  useEffect(() => {
    // HELLO blinking effect - only when overlay is visible and showHello is true
    if (!isVisible || !showHello) return;
    
    const helloBlinkInterval = setInterval(() => {
      setShowHello(prev => !prev);
    }, helloBlinkSpeed);

    return () => clearInterval(helloBlinkInterval);
  }, [isVisible, showHello, helloBlinkSpeed]);

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
        <div className="text-6xl md:text-8xl font-bold text-teal-400 mb-4 font-mono tracking-wider">
          {showHello ? text : ''}
          <span className={`inline-block w-1 h-16 md:h-20 bg-teal-400 ml-2 transition-opacity duration-150 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}></span>
        </div>
        {isComplete && (
          <WelcomeMessage isVisible={isVisible} />
        )}
      </div>
    </div>
  );
};

export default TransitionOverlay;
