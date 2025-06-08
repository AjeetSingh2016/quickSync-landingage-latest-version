
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Mail, 
  FileText, 
  HelpCircle,
  Smartphone,
  Shield,
  Zap,
  Settings,
  ArrowRight
} from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Community Help',
      description: 'Get help from other QuickSync users and share tips',
      action: 'Join Community',
      href: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and we\'ll get back to you quickly',
      action: 'Send Email',
      href: 'mailto:support@quicksync.app',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials for all features',
      action: 'Read Docs',
      href: '#',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const faqs = [
    {
      icon: Smartphone,
      question: 'How do I sync my data across devices?',
      answer: 'Simply sign in with the same account on all your devices. Your data will automatically sync in real-time.',
    },
    {
      icon: Shield,
      question: 'Is my data secure?',
      answer: 'Yes! We use bank-level encryption and never store your data unencrypted. Your privacy is our top priority.',
    },
    {
      icon: Zap,
      question: 'Why is QuickSync free?',
      answer: 'We believe powerful productivity tools should be accessible to everyone. QuickSync is free and will always remain free.',
    },
    {
      icon: Settings,
      question: 'Can I export my data?',
      answer: 'Absolutely! You can export all your data at any time. We believe your data belongs to you.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We're Here to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Help You
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Got questions? Need help getting started? We've got you covered with 
              multiple ways to get the support you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get help, all completely free
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                
                <Button
                  className={`w-full bg-gradient-to-r ${option.gradient} text-white hover:shadow-lg`}
                  asChild
                >
                  <motion.a
                    href={option.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quick Start Guide
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Download QuickSync',
                    description: 'Get the app from Google Play Store on your Android device',
                  },
                  {
                    step: '2',
                    title: 'Create Your First Item',
                    description: 'Add a link or task to see how easy organization can be',
                  },
                  {
                    step: '3',
                    title: 'Access Everywhere',
                    description: 'Sign in on other devices to access your data anywhere',
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <HelpCircle className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
                <p className="text-blue-100 mb-6">
                  Our support team is always ready to help you get the most out of QuickSync. 
                  Don't hesitate to reach out!
                </p>
                <Button
                  className="bg-white text-purple-600 hover:bg-gray-100"
                  asChild
                >
                  <motion.a
                    href="mailto:support@quicksync.app"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Support
                  </motion.a>
                </Button>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <MessageCircle className="w-10 h-10 text-yellow-900" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download QuickSync now and experience the easiest way to manage your digital life.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <motion.a
                href="/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center"
              >
                Download QuickSync
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
