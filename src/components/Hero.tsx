'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Laptop, Tablet } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

const Hero = () => {
  const { user, signInWithGoogle } = useAuth();

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      window.location.href = 'https://app.quicksync.online';
    } else {
      signInWithGoogle();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 sm:pt-28 lg:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            🚀 Always Free • No Subscription Required
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
          >
            The Ultimate
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Link & Task Manager
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Sync your important links and tasks instantly across all devices. 
            Secure, private, and completely free forever. No catch, no limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={handleGetStarted}
            >
              {user ? 'Go to App' : 'Get Started'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              asChild
            >
              <motion.a
                href="/features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Secure Authentication
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              100% Free Forever
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-12 lg:mt-0"
        >
          {/* Device mockups */}
          <div className="relative flex items-center justify-center scale-75 sm:scale-90 lg:scale-100">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative z-20 bg-white rounded-3xl p-2 shadow-2xl"
            >
              <div className="w-40 sm:w-48 h-80 sm:h-96 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center text-white">
                <Smartphone className="w-12 sm:w-16 h-12 sm:h-16 mb-4" />
                <div className="text-center">
                  <div className="w-24 sm:w-32 h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-20 sm:w-24 h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-24 sm:w-28 h-2 bg-white/30 rounded"></div>
                </div>
              </div>
            </motion.div>

            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-12 sm:-left-16 z-10 bg-white rounded-2xl p-3 shadow-xl transform -rotate-12"
            >
              <div className="w-24 sm:w-32 h-16 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                <Laptop className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
            </motion.div>

            {/* Tablet */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -right-8 sm:-right-12 top-8 sm:top-12 z-10 bg-white rounded-xl p-2 shadow-xl transform rotate-12"
            >
              <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded flex items-center justify-center">
                <Tablet className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center"
          >
            <div className="w-4 sm:w-6 h-4 sm:h-6 bg-purple-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
