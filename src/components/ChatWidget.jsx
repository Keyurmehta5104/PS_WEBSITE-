import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setVisible(false);
    setDismissed(true);
  };

  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="chat-widget"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            zIndex: 998,
          }}
        >
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: '#1a1a1a',
              border: '2px solid #fff',
              color: '#fff',
              fontSize: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1,
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Main card */}
          <motion.div
            onClick={handleClick}
            whileHover={{ scale: 1.02, boxShadow: '0 16px 48px rgba(0,0,0,0.22)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#ffffff',
              borderRadius: 20,
              padding: '12px 14px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              minWidth: 270,
              maxWidth: 310,
              position: 'relative',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            {/* Arrow link — top right */}
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 10,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: '#f0ede8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 8, color: '#666' }} />
            </div>

            {/* Left: PS logo circle */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#1a1816',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '2px solid #FF8048',
              }}
            >
              <img
                src="/ps-logo.png"
                alt="PS"
                style={{ width: 32, height: 32, objectFit: 'contain' }}
              />
            </div>

            {/* Middle: text */}
            <div style={{ flex: 1, minWidth: 0, paddingRight: 18 }}>
              <p style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
              }}>
                Have a project to discuss?
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
                {/* Pulsing green dot */}
                <span style={{ position: 'relative', display: 'flex', width: 8, height: 8, flexShrink: 0 }}>
                  <span style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: '#22c55e',
                    opacity: 0.5,
                    animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                  }} />
                  <span style={{
                    position: 'relative',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#22c55e',
                    display: 'block',
                  }} />
                </span>
                <span style={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#22c55e',
                }}>
                  Live Support Available
                </span>
              </div>
            </div>

            {/* Right: avatar */}
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                flexShrink: 0,
                overflow: 'hidden',
                border: '2px solid #FF8048',
                background: '#FF8048',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                PS
              </span>
            </div>
          </motion.div>

          {/* CSS ping animation */}
          <style>{`
            @keyframes ping {
              75%, 100% { transform: scale(2); opacity: 0; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
