import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, BookOpen, Cloud, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Simplified with Clear Value Prop */}
      <section className="relative min-h-[80vh] flex items-center bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Local Business District"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center bg-blue-600/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400">Trusted by 900+ Local Businesses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simplify Your Business with Tally
              <span className="block text-blue-400 mt-2">Local Support in Your Language</span>
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Free GST Training & Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Access Tally Anywhere with Cloud</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>24/7 Local Technical Support</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Free Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://wa.me/919131771382" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits - Mobile First */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">28+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">900+</div>
              <div className="text-sm text-gray-600">Local Clients</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Local Offices</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">⭐⭐⭐</div>
              <div className="text-sm text-gray-600">Tally Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Solutions for Your Business</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your business efficiently</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Cloud className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Tally on Cloud</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Access from anywhere</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Auto data backup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Multi-user access</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">GST Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Free GST training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Filing assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Compliance support</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700">
                Get Started →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Local Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>24/7 assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>On-site support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Training in Hindi</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/919131771382"
                target="_blank"
                rel="noopener noreferrer" 
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700"
              >
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Local Businesses</h2>
            <p className="text-xl text-gray-600">See what our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              text="HCS helped us modernize our entire billing system. Their local support team is always there when we need them."
              author="Anil Gupta"
              position="Owner"
              company="Retail Business, Singrauli"
            />
            <TestimonialCard
              text="The GST training was exactly what we needed. Now I can manage all my businesses from anywhere using Tally on Cloud."
              author="Anjani Keshari"
              position="Owner"
              company="Multiple Businesses, Singrauli"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with a free demo and consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
              Schedule Free Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+919131771382"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;