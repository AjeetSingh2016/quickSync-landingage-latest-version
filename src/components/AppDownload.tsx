
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Star, Users } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              📱 Available on Google Play
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Get QuickSync on
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Your Phone
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Take your links and tasks with you everywhere. The mobile app offers 
              the full QuickSync experience with lightning-fast sync and intuitive design.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <div className="text-blue-200 text-sm">App Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-green-400 mr-1" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <div className="text-blue-200 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Download className="w-5 h-5 text-blue-400 mr-1" />
                  <span className="text-2xl font-bold">Free</span>
                </div>
                <div className="text-blue-200 text-sm">Forever</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
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
                  Download from Google Play
                </motion.a>
              </Button>
            </motion.div>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {['Instant notifications', 'Offline access', 'Biometric security', 'Dark mode support'].map((feature, index) => (
                <div key={feature} className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-72 h-[600px] bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 h-full">
                    <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div>
                          <div className="w-24 h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="w-16 h-2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-100 rounded"></div>
                        <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div>
                          <div className="w-20 h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="w-12 h-2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-100 rounded"></div>
                        <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-6 h-6 text-yellow-900" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Download className="w-5 h-5 text-green-900" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
