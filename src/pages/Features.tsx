
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Cloud, 
  Lock, 
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Globe,
  Wifi,
  Eye
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast Sync',
      description: 'Your data syncs in milliseconds across all devices. No lag, no waiting.',
      details: [
        'Real-time synchronization',
        'Instant updates across devices',
        'Optimized for speed',
        'Zero-delay experience'
      ],
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Bank-level encryption ensures your data stays private and secure.',
      details: [
        'End-to-end encryption',
        'Zero knowledge architecture',
        'No data tracking',
        'GDPR compliant'
      ],
      gradient: 'from-green-400 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Universal Access',
      description: 'Works seamlessly on all your devices - phones, tablets, computers.',
      details: [
        'Cross-platform compatibility',
        'Native mobile apps',
        'Web interface',
        'Offline functionality'
      ],
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const additionalFeatures = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Reliable 99.9% uptime with global CDN for fastest access worldwide.',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Your information is encrypted at rest and in transit with AES-256.',
    },
    {
      icon: RefreshCw,
      title: 'Automatic Backup',
      description: 'Never lose your data with automatic, versioned backups.',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your links and tasks from anywhere in the world.',
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Continue working even without internet connection.',
    },
    {
      icon: Eye,
      title: 'Clean Interface',
      description: 'Beautifully designed, intuitive interface that gets out of your way.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Maximum Productivity
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover why QuickSync is the ultimate tool for managing your digital life. 
              Every feature designed with your productivity and privacy in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-xl text-muted-foreground mb-8">{feature.description}</p>
                  
                  <div className="space-y-4">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div className={`w-full h-80 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center`}>
                      <feature.icon className="w-32 h-32 text-white/30" />
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Even More Features
            </h2>
            <p className="text-xl text-muted-foreground">
              QuickSync is packed with features to make your life easier
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Experience All These Features Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who have transformed their digital productivity with QuickSync.
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
                Get Started Free
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

export default Features;
