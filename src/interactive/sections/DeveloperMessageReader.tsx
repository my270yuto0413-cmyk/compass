"use client";

import { useRef, useState } from "react";

type DeveloperMessagePage = {
  number: string;
  title: string;
  paragraphs: string[];
};

type DeveloperMessageReaderProps = {
  pages: DeveloperMessagePage[];
};

export function DeveloperMessageReader({ pages }: DeveloperMessageReaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const readerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const lastPage = pages.length - 1;

  const toggleReader = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);

    if (nextOpen) {
      setCurrentPage(0);
      window.requestAnimationFrame(() => {
        contentRef.current?.focus({ preventScroll: true });
        readerRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start"
        });
      });
    }
  };

  const showPage = (page: number) => {
    if (page < 0 || page > lastPage || page === currentPage) return;

    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      contentRef.current?.focus({ preventScroll: true });
      readerRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    });
  };

  return (
    <div className={`developer-message__reader${isOpen ? " is-open" : ""}`} ref={readerRef}>
      <div className="developer-message__entry">
        <button
          type="button"
          aria-controls="developer-message-reader-content"
          aria-expanded={isOpen}
          onClick={toggleReader}
        >
          <span>{isOpen ? "開発者メッセージを閉じる" : "開発者メッセージを見る"}</span>
          <i aria-hidden="true">{isOpen ? "−" : "→"}</i>
        </button>
      </div>

      {isOpen && (
        <div id="developer-message-reader-content" className="developer-message__content">
          <nav className="developer-message__pagination" aria-label="開発者メッセージのページ">
            <ol>
              {pages.map((page, index) => (
                <li key={page.number}>
                  <button
                    type="button"
                    aria-current={index === currentPage ? "page" : undefined}
                    aria-label={`${index + 1}ページ目を表示`}
                    onClick={() => showPage(index)}
                  >
                    {page.number}
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <article
            className="developer-message__page"
            aria-label={`開発者メッセージ ${currentPage + 1}ページ目、全${pages.length}ページ`}
            key={pages[currentPage].number}
            ref={contentRef}
            tabIndex={-1}
          >
            <p className="developer-message__page-number">PAGE {pages[currentPage].number} / {String(pages.length).padStart(2, "0")}</p>
            <h3 className="developer-message__chapter-title">{pages[currentPage].title}</h3>
            <div className="developer-message__body">
              {pages[currentPage].paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${pages[currentPage].number}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="developer-message__controls" aria-label="開発者メッセージのページ操作">
            <button type="button" disabled={currentPage === 0} onClick={() => showPage(currentPage - 1)}>
              <span aria-hidden="true">←</span> 前へ
            </button>
            <span><strong>{String(currentPage + 1).padStart(2, "0")}</strong> / {String(pages.length).padStart(2, "0")}</span>
            <button type="button" disabled={currentPage === lastPage} onClick={() => showPage(currentPage + 1)}>
              次へ <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
