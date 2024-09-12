// 'use client'

// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
// import { Search, Bell, MessageSquare, User, Home, ShoppingBag, PlusCircle, Share2 } from 'lucide-react'

// const categories = [
//   { name: 'Textbooks', icon: '📚' },
//   { name: 'Electronics', icon: '💻' },
//   { name: 'Furniture', icon: '🪑' },
//   { name: 'Clothing', icon: '👕' },
//   { name: 'Bikes', icon: '🚲' },
//   { name: 'Sports', icon: '⚽' },
//   { name: 'Music', icon: '🎸' },
//   { name: 'Art', icon: '🎨' },
//   { name: 'Tickets', icon: '🎟️' },
//   { name: 'Free Stuff', icon: '🆓' },
// ]

// const listings = [
//   { id: 1, title: "Calculus Textbook (8th Edition)", price: 45, seller: "Alice Smith", image: "/placeholder.svg?height=200&width=300&text=Calculus+Textbook", status: "Like New" },
//   { id: 2, title: "Dorm Room Mini Fridge", price: 80, seller: "Bob Johnson", image: "/placeholder.svg?height=200&width=300&text=Mini+Fridge", status: "Good Condition" },
//   { id: 3, title: "MacBook Pro (2019)", price: 800, seller: "Charlie Brown", image: "/placeholder.svg?height=200&width=300&text=MacBook+Pro", status: "Refurbished" },
//   { id: 4, title: "Chemistry Lab Coat", price: 15, seller: "Diana Prince", image: "/placeholder.svg?height=200&width=300&text=Lab+Coat", status: "New" },
//   { id: 5, title: "Desk Lamp", price: 20, seller: "Ethan Hunt", image: "/placeholder.svg?height=200&width=300&text=Desk+Lamp", status: "Used" },
//   { id: 6, title: "Acoustic Guitar", price: 150, seller: "Fiona Apple", image: "/placeholder.svg?height=200&width=300&text=Acoustic+Guitar", status: "Like New" },
// ]

// export function MarketplacePageComponent() {
//   const [searchQuery, setSearchQuery] = useState("")

//   return (
//     <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
//       <header className="border-b border-gray-200 py-4 px-6 sticky top-0 z-10 bg-white shadow-sm">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-green-800">Nexus</h1>
//           <div className="flex-1 max-w-xl mx-4">
//             <div className="relative">
//               <Input
//                 type="search"
//                 placeholder="Search marketplace..."
//                 className="w-full pl-10 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
//               <Home className="w-4 h-4 mr-2" />
//               <span>Housing</span>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
//               <ShoppingBag className="w-4 h-4 mr-2" />
//               <span>Marketplace</span>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
//               <PlusCircle className="w-4 h-4 mr-2" />
//               <span>Post</span>
//             </a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//               <Bell className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//               <MessageSquare className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//               <User className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="flex-grow container mx-auto px-4 py-8">
//         <ScrollArea className="w-full whitespace-nowrap rounded-md border">
//           <div className="flex w-max space-x-4 p-4">
//             {categories.map((category) => (
//               <Button key={category.name} variant="outline" className="flex-shrink-0">
//                 <span className="mr-2">{category.icon}</span>
//                 {category.name}
//               </Button>
//             ))}
//           </div>
//           <ScrollBar orientation="horizontal" />
//         </ScrollArea>

//         <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Listings</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {listings.map((listing) => (
//             <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//               <CardHeader className="p-0">
//                 <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
//               </CardHeader>
//               <CardContent className="p-4">
//                 <CardTitle className="text-lg font-semibold mb-2">{listing.title}</CardTitle>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="font-bold text-lg">${listing.price}</span>
//                   <Badge variant="secondary">{listing.status}</Badge>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <User className="w-4 h-4 mr-1" />
//                   <span>{listing.seller}</span>
//                 </div>
//               </CardContent>
//               <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
//                 <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
//                   Message Seller
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <Share2 className="w-5 h-5" />
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </main>

//       <footer className="border-t border-gray-200 py-8 px-6 mt-12 bg-gray-50">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-900">About Nexus Market</h3>
//             <p className="text-sm text-gray-600">Connecting students for buying and selling within the campus community.</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Safety Tips</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Prohibited Items</a></li>
//               <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Support</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Search, User, Share2 } from 'lucide-react'
import { Header } from "@/components/header"  // Import the shared Header component

const categories = [
  { name: 'Textbooks', icon: '📚' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Furniture', icon: '🪑' },
  { name: 'Clothing', icon: '👕' },
  { name: 'Bikes', icon: '🚲' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Music', icon: '🎸' },
  { name: 'Art', icon: '🎨' },
  { name: 'Tickets', icon: '🎟️' },
  { name: 'Free Stuff', icon: '🆓' },
]

const listings = [
  { id: 1, title: "Calculus Textbook (8th Edition)", price: 45, seller: "Alice Smith", image: "/placeholder.svg?height=200&width=300&text=Calculus+Textbook", status: "Like New" },
  { id: 2, title: "Dorm Room Mini Fridge", price: 80, seller: "Bob Johnson", image: "/placeholder.svg?height=200&width=300&text=Mini+Fridge", status: "Good Condition" },
  { id: 3, title: "MacBook Pro (2019)", price: 800, seller: "Charlie Brown", image: "/placeholder.svg?height=200&width=300&text=MacBook+Pro", status: "Refurbished" },
  { id: 4, title: "Chemistry Lab Coat", price: 15, seller: "Diana Prince", image: "/placeholder.svg?height=200&width=300&text=Lab+Coat", status: "New" },
  { id: 5, title: "Desk Lamp", price: 20, seller: "Ethan Hunt", image: "/placeholder.svg?height=200&width=300&text=Desk+Lamp", status: "Used" },
  { id: 6, title: "Acoustic Guitar", price: 150, seller: "Fiona Apple", image: "/placeholder.svg?height=200&width=300&text=Acoustic+Guitar", status: "Like New" },
]

export function MarketplacePageComponent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />  {/* Use the shared Header component */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search marketplace..."
            className="w-full max-w-xl pl-10 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((category) => (
              <Button key={category.name} variant="outline" className="flex-shrink-0">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">{listing.title}</CardTitle>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">${listing.price}</span>
                  <Badge variant="secondary">{listing.status}</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-1" />
                  <span>{listing.seller}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
                <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                  Message Seller
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 px-6 mt-12 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">About Nexus Market</h3>
            <p className="text-sm text-gray-600">Connecting students for buying and selling within the campus community.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Prohibited Items</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}