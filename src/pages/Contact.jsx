import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (Simulated)');
    e.target.reset();
  };

  return (
    <main>
      <section className="bg-brand-olive text-white text-center py-[60px]">
        <h1 className="text-3xl font-bold">Visit Our Store</h1>
      </section>

      <section className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Info and Map */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-brand-gold pb-2 inline-block">Business Hours</h3>
          <div className="space-y-2 mb-8">
            <p>Friday: 11am - 5pm</p>
            <p>Saturday: 11am - 5pm</p>
            <p>Sunday: 11am - 4pm</p>
            <p>Monday: 11am - 4pm</p>
            <p className="text-stone-500 italic">Tues, Wed, Thurs: CLOSED</p>
          </div>

          {/* Responsive Map Container */}
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-[6px] shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.7864719861345!2d-76.48442612249947!3d44.23205437108058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2aaff6542bcdf%3A0x7874e829d050097c!2sAntique%20Alley!5e0!3m2!1sen!2sca!4v1771978973367!5m2!1sen!2sca" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div>
          <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-gold outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-gold outline-none"
            />
            <textarea 
              placeholder="Message" 
              required
              className="w-full h-40 p-3 border border-stone-300 rounded resize-none focus:ring-2 focus:ring-brand-gold outline-none"
            ></textarea>
            <button type="submit" className="btn-primary w-full md:w-auto cursor-pointer">
              Send Message
            </button>
            {status && <p className="text-green-600 font-bold mt-2">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}