'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { BedDouble, Bath, Wifi, Car, Zap, MapPin, Clock, Calendar } from 'lucide-react'
import { Header } from "@/components/header"
import Image from 'next/image'

export function HousingPageComponent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [bedrooms, setBedrooms] = useState("")
  const [leaseType, setLeaseType] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("price-low")

  const categories = [
    { name: 'Housing', icon: <Home className="w-4 h-4" /> },
    { name: 'Marketplace', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'Post', icon: <PlusCircle className="w-4 h-4" /> },
  ]

  const housingListings = [
    { id: 1, title: "Cozy Studio Near Campus", price: 800, bedrooms: 0, bathrooms: 1, type: "Apartment", leaseType: "Lease", distanceFromCampus: 0.5, availableFrom: "2023-09-01", amenities: ["wifi", "laundry"], image: "/placeholder.svg?height=200&width=300&text=Cozy+Studio", location: { lat: 40.7128, lng: -74.0060 } },
    { id: 2, title: "Shared 2BR Apartment", price: 600, bedrooms: 2, bathrooms: 1, type: "Apartment", leaseType: "Sublet", distanceFromCampus: 1.2, availableFrom: "2023-08-15", amenities: ["wifi", "parking", "gym"], image: "/placeholder.svg?height=200&width=300&text=Shared+2BR", location: { lat: 40.7282, lng: -73.9942 } },
    { id: 3, title: "Spacious 3BR House", price: 1800, bedrooms: 3, bathrooms: 2, type: "House", leaseType: "Lease", distanceFromCampus: 2.0, availableFrom: "2023-09-01", amenities: ["wifi", "parking", "backyard", "laundry"], image: "/placeholder.svg?height=200&width=300&text=Spacious+3BR", location: { lat: 40.7300, lng: -74.0100 } },
    { id: 4, title: "Modern 1BR Loft", price: 1200, bedrooms: 1, bathrooms: 1, type: "Apartment", leaseType: "Lease", distanceFromCampus: 1.5, availableFrom: "2023-08-20", amenities: ["wifi", "gym", "rooftop"], image: "/placeholder.svg?height=200&width=300&text=Modern+1BR", location: { lat: 40.7200, lng: -73.9900 } },
    { id: 5, title: "Summer Sublet Studio", price: 700, bedrooms: 0, bathrooms: 1, type: "Apartment", leaseType: "Sublet", distanceFromCampus: 0.8, availableFrom: "2023-06-01", amenities: ["wifi", "pool"], image: "/placeholder.svg?height=200&width=300&text=Summer+Sublet", location: { lat: 40.7150, lng: -74.0080 } },
    { id: 6, title: "4BR House for Group", price: 2400, bedrooms: 4, bathrooms: 2, type: "House", leaseType: "Lease", distanceFromCampus: 1.8, availableFrom: "2023-09-01", amenities: ["wifi", "parking", "backyard", "laundry"], image: "/placeholder.svg?height=200&width=300&text=4BR+House", location: { lat: 40.7220, lng: -74.0150 } },
  ]

  const filteredListings = housingListings.filter(listing =>
    listing.price >= priceRange[0] &&
    listing.price <= priceRange[1] &&
    (bedrooms === "" || listing.bedrooms.toString() === bedrooms) &&
    (leaseType === "" || listing.leaseType === leaseType) &&
    (searchQuery === "" || listing.title.toLowerCase().includes(searchQuery.toLowerCase()))
  ).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "distance") return a.distanceFromCampus - b.distanceFromCampus
    return 0
  })

  const ListingDialog = ({ listing }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full text-left">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{listing.title}</DialogTitle>
          <DialogDescription>${listing.price}/month</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Image src={listing.image} alt={listing.title} width={300} height={200} className="w-full h-48 object-cover" />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 mr-2" />
              <span>{listing.bedrooms} Bedroom{listing.bedrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-2" />
              <span>{listing.bathrooms} Bathroom{listing.bathrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{listing.distanceFromCampus} miles from campus</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Available from {listing.availableFrom}</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {listing.amenities.includes('wifi') && <Badge variant="secondary"><Wifi className="w-4 h-4 mr-1" /> WiFi</Badge>}
              {listing.amenities.includes('parking') && <Badge variant="secondary"><Car className="w-4 h-4 mr-1" /> Parking</Badge>}
              {listing.amenities.includes('gym') && <Badge variant="secondary"><Zap className="w-4 h-4 mr-1" /> Gym</Badge>}
              {listing.amenities.includes('laundry') && <Badge variant="secondary"><Clock className="w-4 h-4 mr-1" /> Laundry</Badge>}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />  { }
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Find Your College Home</h2>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Button className="mr-2 bg-green-600 hover:bg-green-700 text-white" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] border-gray-300">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="distance">Distance to Campus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showFilters && (
            <Card className="mb-4 border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-gray-900">Filters</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="price-range" className="text-gray-700">Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
                  <Slider
                    id="price-range"
                    min={0}
                    max={2000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="text-gray-900"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bedrooms" className="text-gray-700">Bedrooms</Label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger id="bedrooms" className="border-gray-300">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      <SelectItem value="0">Studio</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lease-type" className="text-gray-700">Lease Type</Label>
                  <Select value={leaseType} onValueChange={setLeaseType}>
                    <SelectTrigger id="lease-type" className="border-gray-300">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      <SelectItem value="Lease">Lease</SelectItem>
                      <SelectItem value="Sublet">Sublet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" className="text-gray-900 focus:ring-gray-500" />
                  <Label htmlFor="furnished" className="text-gray-700">Furnished</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="utilities-included" className="text-gray-900 focus:ring-gray-500" />
                  <Label htmlFor="utilities-included" className="text-gray-700">Utilities Included</Label>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredListings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
                  <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{listing.title}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-lg text-gray-900">${listing.price}/month</span>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">{listing.leaseType}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <BedDouble className="w-4 h-4 mr-1 text-gray-500" />
                        <span>{listing.bedrooms} Bed</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1 text-gray-500" />
                        <span>{listing.bathrooms} Bath</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{listing.distanceFromCampus} miles from campus</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {listing.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="border-gray-300 text-gray-600">
                          {amenity === 'wifi' && <Wifi className="w-4 h-4 mr-1" />}
                          {amenity === 'parking' && <Car className="w-4 h-4 mr-1" />}
                          {amenity === 'gym' && <Zap className="w-4 h-4 mr-1" />}
                          {amenity === 'laundry' && <Clock className="w-4 h-4 mr-1" />}
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <ListingDialog listing={listing} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-gray-900">Map View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Map component goes here</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">This is where you would integrate a map component (e.g., Google Maps or Mapbox) to show the locations of the listings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 px-6 mt-12 bg-gray-50">
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