'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, ShoppingBag, User, BedDouble, Bath } from 'lucide-react'
import { Header } from "@/components/header"
import Image from 'next/image';


export function Homepage() {
  const features = [
    { title: "Find Your Perfect Home", description: "Browse through a wide range of student-friendly housing options near your campus.", icon: <Home className="w-6 h-6" /> },
    { title: "Connect with Roommates", description: "Find compatible roommates and make your college experience even better.", icon: <User className="w-6 h-6" /> },
    { title: "Marketplace", description: "Buy and sell textbooks, furniture, and more within your college community.", icon: <ShoppingBag className="w-6 h-6" /> },
  ]

  const testimonials = [
    { name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", text: "Nexus made finding a great apartment near campus so easy!" },
    { name: "Sarah Lee", avatar: "/placeholder.svg?height=40&width=40", text: "I found amazing roommates through Nexus. Highly recommend!" },
    { name: "Chris Taylor", avatar: "/placeholder.svg?height=40&width=40", text: "The marketplace feature helped me save a lot on textbooks." },
  ]

  const housingListings = [
    { id: 1, title: "Cozy Studio Near Campus", price: 800, bedrooms: 0, bathrooms: 1, image: "/placeholder.svg?height=200&width=300&text=Cozy+Studio" },
    { id: 2, title: "Shared 2BR Apartment", price: 600, bedrooms: 2, bathrooms: 1, image: "/placeholder.svg?height=200&width=300&text=Shared+2BR" },
    { id: 3, title: "Spacious 3BR House", price: 1800, bedrooms: 3, bathrooms: 2, image: "/placeholder.svg?height=200&width=300&text=Spacious+3BR" },
    { id: 4, title: "Modern 1BR Loft", price: 1200, bedrooms: 1, bathrooms: 1, image: "/placeholder.svg?height=200&width=300&text=Modern+1BR" },
    { id: 5, title: "Summer Sublet Studio", price: 700, bedrooms: 0, bathrooms: 1, image: "/placeholder.svg?height=200&width=300&text=Summer+Sublet" },
    { id: 6, title: "4BR House for Group", price: 2400, bedrooms: 4, bathrooms: 2, image: "/placeholder.svg?height=200&width=300&text=4BR+House" },
  ]

  const marketplaceItems = [
    { id: 1, title: "Calculus Textbook", price: 50, image: "/placeholder.svg?height=150&width=150&text=Calculus+Book" },
    { id: 2, title: "Desk Lamp", price: 20, image: "/placeholder.svg?height=150&width=150&text=Desk+Lamp" },
    { id: 3, title: "Bicycle", price: 100, image: "/placeholder.svg?height=150&width=150&text=Bicycle" },
    { id: 4, title: "Coffee Maker", price: 30, image: "/placeholder.svg?height=150&width=150&text=Coffee+Maker" },
    { id: 5, title: "Mini Fridge", price: 80, image: "/placeholder.svg?height=150&width=150&text=Mini+Fridge" },
    { id: 6, title: "Study Chair", price: 40, image: "/placeholder.svg?height=150&width=150&text=Study+Chair" },
  ]

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />  {/* Use the new Header component here */}

      <main className="flex-grow">
        <section className="bg-green-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Nexus</h2>
            <p className="text-xl mb-8">Your one-stop platform for college housing, roommates, and marketplace.</p>
            <Button className="bg-white text-green-800 hover:bg-gray-100">Get Started</Button>
          </div>
        </section>

        <section className="py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Listings</h2>
            <div className="space-y-8">
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4">Housing</h3>
                <div className="flex animate-scroll-rtl">
                  {[...housingListings, ...housingListings].map((listing, index) => (
                    <Card key={index} className="flex-shrink-0 w-64 mr-4 overflow-hidden border-gray-200">
                      <Image src={listing.image} alt={listing.title} width={300} height={200} className="w-full h-40 object-cover" />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-2 truncate">{listing.title}</h4>
                        <p className="font-bold text-lg text-gray-900">${listing.price}/month</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center">
                            <BedDouble className="w-4 h-4 mr-1 text-gray-500" />
                            <span>{listing.bedrooms} Bed</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-4 h-4 mr-1 text-gray-500" />
                            <span>{listing.bathrooms} Bath</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4">Marketplace</h3>
                <div className="flex animate-scroll-ltr">
                  {[...marketplaceItems, ...marketplaceItems].map((item, index) => (
                    <Card key={index} className="flex-shrink-0 w-48 mr-4 overflow-hidden border-gray-200">
                      <Image src={item.image} alt={item.title} width={150} height={150} className="w-full h-32 object-cover" />
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-2 truncate">{item.title}</h4>
                        <p className="font-bold text-lg text-gray-900">${item.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How Nexus Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="flex flex-col items-center">
                    <div className="bg-green-100 p-3 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-b mb-12 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">Nexus User</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8 px-6 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">About Nexus</h3>
            <p className="text-sm text-gray-600">Connecting students for housing and marketplace needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 20s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 20s linear infinite;
        }
      `}</style>
    </div>
  )
}