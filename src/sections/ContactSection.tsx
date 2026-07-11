export function ContactSection() {
  return (
    <>
<section id="contact" className="section contact-section" aria-labelledby="contact-title">
  <div className="container contact-card" data-reveal>
    <p className="section-label">Contact</p>
    <h2 id="contact-title">ご意見・ご相談をお待ちしています</h2>

    <p>
      COMPASSでは、教育活動や学生支援に関するご意見・ご提案を歓迎しております。
      資料や活動内容についてのご質問、ご相談などがございましたら、お気軽にお問い合わせください。
    </p>

    <a
      className="button button-primary"
      href="https://docs.google.com/forms/d/e/1FAIpQLSehSdW10_HOjAigq_42AzooHtiV1P8AvI_1tWu5D3DaR2QxJQ/viewform?usp=publish-editor"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open Contact Form
    </a>
  </div>
</section>
    </>
  );
}
