export function MessageSection() {
  return (
    <>
<section id="message" className="section message-section" aria-labelledby="message-title">
      <div className="container message-panel" data-reveal>
        <div>
          <p className="section-label">Messages</p>
          <h2 id="message-title">未来の後輩へ。</h2>
          <p>
            この文章には、COMPASSに込めた想いと、未来を歩む皆さんへ伝えたいメッセージを記しました。
          </p>
        </div>
        <div className="message-actions">
          <a className="button button-primary" href="messages/index.html">創設者メッセージを見る</a>
          <a className="button button-secondary" href="Project.guide/COMPASS_Founding_Vision.pdf" target="_blank" rel="noopener noreferrer">
            Founding Vision
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
