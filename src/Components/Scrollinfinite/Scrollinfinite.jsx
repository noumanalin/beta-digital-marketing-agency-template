import { useEffect, useRef } from 'react';
import './Scrollinfinite.css';

const InfiniteScrollText = () => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const frameRef = useRef(null);
  const textItems = [
    "DIGITAL SOLUTION",
    "DEVELOPMENT",
    "STUDIO",
    "STRATEGY",
    "BRANDING",
    "AGENCY",
    "TYPOGRAPHY",
    "INTERACTION",
    "ELEMENT"
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let scrollPosition = 0;
    const speed = 1.5; // adjust as needed
    let singleWidth = 0;

    const calculateWidth = () => {
      // width of one set of items
      singleWidth = inner.getBoundingClientRect().width;
    };

    const step = () => {
      scrollPosition += speed;
      if (scrollPosition >= singleWidth) {
        scrollPosition -= singleWidth; // smooth wrap
      }
      const pos = Math.floor(scrollPosition);
      wrapper.style.transform = `translate3d(-${pos}px, 0, 0)`;
      frameRef.current = requestAnimationFrame(step);
    };

    calculateWidth();
    frameRef.current = requestAnimationFrame(step);

    const resizeObserver = new ResizeObserver(() => {
      calculateWidth();
    });
    resizeObserver.observe(inner);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  // one set and its clone
  const items = textItems.map((it, i) => (
    <span key={`orig-${i}`} className="scroll-item">
      {it}
    </span>
  ));
  const cloneItems = textItems.map((it, i) => (
    <span key={`clone-${i}`} className="scroll-item">
      {it}
    </span>
  ));

  return (
    <section className="infinite-scroll-section infinite" >
      <div className="scroll-viewport">
        <div className="scroll-wrapper" ref={wrapperRef}>
          <div className="inner" ref={innerRef}>
            {items}
          </div>
          <div className="inner clone">
            {cloneItems}
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default InfiniteScrollText;
