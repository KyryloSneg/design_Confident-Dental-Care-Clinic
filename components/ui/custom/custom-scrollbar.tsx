"use client";

import { useEffect, useRef } from "react";
import { Scrollbars, type ScrollbarProps } from "react-custom-scrollbars-2";

interface ScrollbarsInternal extends Scrollbars {
  view: HTMLDivElement;
  update(): void;
}

const CustomScrollbar = (props: ScrollbarProps) => {
  const scrollbarsRef = useRef<ScrollbarsInternal>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // using a hacky way to force scrollbar resize on content's resize

  useEffect(() => {
    const scrollbar = scrollbarsRef.current;
    const content = contentRef.current;

    if (!scrollbar || !content) return;

    const observer = new ResizeObserver(() => {
      scrollbar.update();
      scrollbar.view?.dispatchEvent(new Event("scroll", { bubbles: true }));
    });

    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <Scrollbars
      autoHide
      ref={scrollbarsRef}
      renderTrackVertical={props => (
        <div
          {...props}
          className="absolute top-0 right-0 bottom-0 z-50 w-1.5"
        />
      )}
      renderThumbVertical={props => (
        <div
          {...props}
          className="rounded-full bg-primary-400 transition-[background,opacity] hover:bg-primary-400/70 active:bg-primary-400/70"
        />
      )}
      {...props}
      style={{ height: "100%", ...props.style }}
    >
      {/* ensure that we have only one child here */}
      <div ref={contentRef}>{props.children}</div>
    </Scrollbars>
  );
};

export default CustomScrollbar;
