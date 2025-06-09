'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signInWithGoogle, logout } = useAuth();

  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '/download' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
  ];

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QuickSync
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                      <AvatarFallback>
                        {user.displayName?.[0] || user.email?.[0] || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2" onClick={logout}>
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                onClick={handleGetStarted}
              >
                Get Started Free
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <Button 
                variant="ghost"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            ) : (
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                onClick={(e) => {
                  setIsOpen(false);
                  handleGetStarted(e);
                }}
              >
                Get Started Free
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
