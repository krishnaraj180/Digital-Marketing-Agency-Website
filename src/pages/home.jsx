import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Skeleton } from '../components/ui/skeleton';
import { 
  Search, 
  Target, 
  Share2, 
  Palette, 
  ArrowRight, 
  Star,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings with our proven SEO strategies and techniques.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted Google Ads and social media advertising campaigns.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'A/B Testing']
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Build your brand presence across all major social media platforms.',
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Analytics']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: 'E-commerce Growth',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'SEO & PPC'
    },
    {
      id: 2,
      title: 'SaaS Launch Campaign',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Digital Marketing'
    },
    {
      id: 3,
      title: 'Restaurant Rebranding',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Brand Design'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'DigitalFlow transformed our online presence completely. Our traffic increased by 300% in just 6 months!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team\'s expertise in paid advertising helped us achieve a 400% ROI on our campaigns. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Professional, creative, and results-driven. DigitalFlow exceeded all our expectations for our brand redesign.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const ServiceSkeleton = () => (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="h-12 w-12 rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );

  const TestimonialSkeleton = () => (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Grow Your Business with
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Digital Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  We help ambitious businesses scale through strategic digital marketing, 
                  stunning design, and data-driven campaigns that deliver real results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold border-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">300%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5 Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Digital Marketing Team" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <ServiceSkeleton key={index} />
              ))
            ) : (
              services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardHeader className="pb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg w-fit group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Success stories from businesses we've helped grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">{project.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>
          
          <div className="relative">
            {isLoading ? (
              <TestimonialSkeleton />
            ) : (
              <div className="max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevTestimonial}
                        className="hover:bg-blue-100 dark:hover:bg-gray-700"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextTestimonial}
                        className="hover:bg-blue-100 dark:hover:bg-gray-700"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, index) => (
                          <Star key={index} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                          <AvatarFallback>{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 dark:text-white text-lg">
                            {testimonials[currentTestimonial].name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {testimonials[currentTestimonial].role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals and drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
              View Our Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">DigitalFlow</span>
              </div>
              <p className="text-gray-400">
                Helping businesses grow through strategic digital marketing and innovative design solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paid Advertising</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Design</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@digitalflow.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Chennai, 600001</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DigitalFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;