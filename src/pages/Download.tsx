
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Download as DownloadIcon, 
  Star, 
  Users, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Download = () => {
  const steps = [
    {
      step: '01',
      title: 'Click Download',
      description: 'Tap the download button to go to Google Play Store',
    },
    {
      step: '02', 
      title: 'Install QuickSync',
      description: 'Install the app directly from the official store',
    },
    {
      step: '03',
      title: 'Start Syncing',
      description: 'Open the app and start organizing your digital life',
    },
  ];

  const benefits = [
    'No account creation required',
    'Zero cost forever',
    'Instant synchronization',
    'Bank-level security',
    'Offline functionality',
    'Regular updates'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
              >
                ✅ Available Now on Google Play
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              >
                Download
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  QuickSync
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Get the ultimate link and task manager on your Android device. 
                Start organizing your digital life today - completely free.
              </motion.p>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-xl"
                  asChild
                >
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.ajeet.quicksync&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center"
                  >
                    <Smartphone className="mr-3 w-7 h-7" />
                    Download from Google Play
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-8"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold">4.8</span>
                  </div>
                  <div className="text-muted-foreground text-sm">App Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-blue-500 mr-1" />
                    <span className="text-2xl font-bold">10K+</span>
                  </div>
                  <div className="text-muted-foreground text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DownloadIcon className="w-5 h-5 text-green-500 mr-1" />
                    <span className="text-2xl font-bold">Free</span>
                  </div>
                  <div className="text-muted-foreground text-sm">Forever</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Main phone */}
                <div className="relative bg-black rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-80 h-[650px] bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <span>⚡ 100%</span>
                    </div>
                    
                    {/* App header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                          <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">QuickSync</h3>
                      </div>
                      <p className="text-blue-100">Your links and tasks, everywhere</p>
                    </div>
                    
                    {/* App content */}
                    <div className="p-6 space-y-4 bg-gray-50 h-full">
                      <div className="bg-white rounded-2xl p-4 shadow-sm border">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-32 h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="w-20 h-2 bg-gray-100 rounded"></div>
                          </div>
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-sm border">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                            <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-28 h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="w-16 h-2 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-sm border">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-36 h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="w-24 h-2 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <DownloadIcon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-7 h-7 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Download */}
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
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              Download and start using QuickSync in under a minute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get with QuickSync
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need, nothing you don't
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center bg-white p-4 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who have made QuickSync their go-to productivity tool.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.ajeet.quicksync&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center"
              >
                <Smartphone className="mr-3 w-6 h-6" />
                Download QuickSync Now
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Download;
