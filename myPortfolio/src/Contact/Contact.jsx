export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for internship opportunities. Whether you have a 
        question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="contact-wrapper">
        {/* The Contact Form */}
        <form className="contact-form" action="YOUR_FORMSPREE_ENDPOINT_HERE" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn-primary">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="social-links">
          <h3>Let's Connect</h3>
          <a href="mailto:your.email@example.com">Email Me</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}