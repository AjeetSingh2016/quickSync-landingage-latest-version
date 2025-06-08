
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Target, 
  Users, 
  Zap,
  Shield,
  Globe,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Every feature is designed with real user needs in mind',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data belongs to you, and we keep it that way',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly improving and adding new capabilities',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Free and available to everyone, everywhere',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8★', label: 'App Rating' },
    { number: '0$', label: 'Cost Forever' },
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
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                QuickSync
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to simplify digital organization for everyone. 
              No complexity, no cost, just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's digital world, we all accumulate countless links, tasks, and pieces of information 
                across multiple devices. The frustration of not being able to access what you need, when you need it, 
                inspired us to create QuickSync.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that powerful productivity tools shouldn't be locked behind paywalls or limited by device compatibility. 
                That's why QuickSync is completely free, works everywhere, and puts your privacy first.
              </p>
              <div className="flex items-center">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-semibold">Making digital organization effortless for everyone</span>
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
                <h3 className="text-2xl font-bold mb-4">Why QuickSync?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <span>Born from personal frustration with existing tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <span>Designed by users, for users</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <span>No venture capital, no shareholders - just great software</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                    <span>Committed to staying free forever</span>
                  </li>
                </ul>
              </div>
              
              {/* Floating element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Heart className="w-10 h-10 text-yellow-900" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              QuickSync by the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Growing every day, staying free forever
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built with Care
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              QuickSync is crafted by a small, dedicated team that believes technology should enhance your life, 
              not complicate it. We're developers, designers, and everyday users who understand the pain points 
              of digital organization.
            </p>
            <div className="bg-blue-50 rounded-3xl p-8">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Community-Driven Development</h3>
              <p className="text-muted-foreground">
                Our roadmap is shaped by user feedback. Every feature request is considered, 
                and the best ideas make it into the app. Because QuickSync belongs to its users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the QuickSync Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of digital organization. Free forever, available everywhere.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <motion.a
                href="/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center"
              >
                Get Started Today
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

export default About;
