import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Message sent successfully! (Demo mode)');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <HiMail size={24} />,
      label: 'Email',
      value: 'louadazakaria@gmail.com',
      href: 'mailto:louadazakaria@gmail.com',
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      value: 'github.com/ZLouada',
      href: 'https://github.com/ZLouada',
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zakaria-louada',
      href: 'https://linkedin.com/in/zakaria-louada',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: 'Location',
      value: 'Morocco',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-electric mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Build Something Together
              </h3>
              <p className="text-gray-500 mb-8">
                I'm currently available for freelance projects, internships, and 
                full-time opportunities. Whether you need a full-stack web application, 
                a desktop system, or consultation on your tech stack, I'm here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 rounded-xl bg-dark-600 text-electric group-hover:bg-electric group-hover:text-dark-900 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">{item.label}</p>
                          <p className="text-white group-hover:text-electric transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-dark-600 text-electric">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">{item.label}</p>
                          <p className="text-white">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-dark-500">
                <p className="text-gray-500 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/ZLouada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-dark-600 text-gray-400 hover:text-electric hover:bg-dark-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/zakaria-louada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-dark-600 text-gray-400 hover:text-electric hover:bg-dark-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
