// 'use client'

// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search, Bell, MessageSquare, User, Home, ShoppingBag, PlusCircle } from 'lucide-react'

// export function Header() {
//     const categories = [
//         { name: 'Housing', icon: <Home className="w-4 h-4" /> },
//         { name: 'Marketplace', icon: <ShoppingBag className="w-4 h-4" /> },
//         { name: 'Post', icon: <PlusCircle className="w-4 h-4" /> },
//     ]

//     return (
//         <header className="border-b border-gray-200 py-4 px-6 sticky top-0 z-10 bg-white shadow-sm">
//             <div className="container mx-auto flex justify-between items-center">
//                 <h1 className="text-2xl font-bold text-green-800">Nexus</h1>
//                 <div className="flex-1 max-w-xl mx-4">
//                     <div className="relative">
//                         <Input
//                             type="search"
//                             placeholder="Search housing, roommates, or items..."
//                             className="w-full pl-10 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
//                         />
//                         <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     </div>
//                 </div>
//                 <nav className="hidden md:flex space-x-8">
//                     {categories.map((category, index) => (
//                         <a key={index} href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
//                             {category.icon}
//                             <span className="ml-2">{category.name}</span>
//                         </a>
//                     ))}
//                 </nav>
//                 <div className="flex items-center space-x-4">
//                     <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//                         <Bell className="w-5 h-5" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//                         <MessageSquare className="w-5 h-5" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
//                         <User className="w-5 h-5" />
//                     </Button>
//                 </div>
//             </div>
//         </header>
//     )
// }

'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, MessageSquare, User, Home, ShoppingBag, PlusCircle } from 'lucide-react'

export function Header() {
    const categories = [
        { name: 'Housing', icon: <Home className="w-4 h-4" />, href: '/housing' },
        { name: 'Marketplace', icon: <ShoppingBag className="w-4 h-4" />, href: '/marketplace' },
        { name: 'Post', icon: <PlusCircle className="w-4 h-4" />, href: '/post' },
    ]

    return (
        <header className="border-b border-gray-200 py-4 px-6 sticky top-0 z-10 bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-green-800">
                    Nexus
                </Link>
                <div className="flex-1 max-w-xl mx-4">
                    <div className="relative">
                        <Input
                            type="search"
                            placeholder="Search housing, roommates, or items..."
                            className="w-full pl-10 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                        />
                        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
                <nav className="hidden md:flex space-x-8">
                    {categories.map((category, index) => (
                        <Link key={index} href={category.href} className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                            {category.icon}
                            <span className="ml-2">{category.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                        <Bell className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                        <MessageSquare className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}