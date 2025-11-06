'use client'

import { useState } from 'react'

interface Theme {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  rating: number
  sales: number
}

const themes: Theme[] = [
  {
    id: 1,
    name: 'Modern Dashboard',
    category: 'Admin',
    price: 49,
    image: '🎨',
    description: 'Clean and modern admin dashboard template',
    rating: 4.8,
    sales: 1234
  },
  {
    id: 2,
    name: 'E-Commerce Pro',
    category: 'E-Commerce',
    price: 79,
    image: '🛍️',
    description: 'Full-featured e-commerce theme with cart',
    rating: 4.9,
    sales: 2156
  },
  {
    id: 3,
    name: 'Portfolio Elite',
    category: 'Portfolio',
    price: 39,
    image: '💼',
    description: 'Professional portfolio theme for creatives',
    rating: 4.7,
    sales: 892
  },
  {
    id: 4,
    name: 'Blog Master',
    category: 'Blog',
    price: 29,
    image: '📝',
    description: 'Beautiful blog theme with rich typography',
    rating: 4.6,
    sales: 567
  },
  {
    id: 5,
    name: 'Corporate Suite',
    category: 'Business',
    price: 59,
    image: '🏢',
    description: 'Professional corporate website theme',
    rating: 4.8,
    sales: 1023
  },
  {
    id: 6,
    name: 'Landing Page Kit',
    category: 'Landing',
    price: 35,
    image: '🚀',
    description: 'High-converting landing page templates',
    rating: 4.9,
    sales: 1876
  },
  {
    id: 7,
    name: 'Restaurant Deluxe',
    category: 'Restaurant',
    price: 45,
    image: '🍽️',
    description: 'Elegant restaurant and cafe theme',
    rating: 4.7,
    sales: 445
  },
  {
    id: 8,
    name: 'Education Hub',
    category: 'Education',
    price: 55,
    image: '📚',
    description: 'Complete learning management system theme',
    rating: 4.8,
    sales: 789
  },
  {
    id: 9,
    name: 'SaaS Starter',
    category: 'SaaS',
    price: 69,
    image: '☁️',
    description: 'Modern SaaS application theme',
    rating: 4.9,
    sales: 1567
  }
]

const categories = ['All', 'Admin', 'E-Commerce', 'Portfolio', 'Blog', 'Business', 'Landing', 'Restaurant', 'Education', 'SaaS']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredThemes = themes.filter(theme => {
    const matchesCategory = selectedCategory === 'All' || theme.category === selectedCategory
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theme.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (themeId: number) => {
    if (!cart.includes(themeId)) {
      setCart([...cart, themeId])
    }
  }

  const removeFromCart = (themeId: number) => {
    setCart(cart.filter(id => id !== themeId))
  }

  const cartTotal = cart.reduce((total, id) => {
    const theme = themes.find(t => t.id === id)
    return total + (theme?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🎨</span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Theme Store</h1>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                <span>🛒</span>
                <span>Cart ({cart.length})</span>
                {cartTotal > 0 && (
                  <span className="bg-white text-indigo-600 px-2 py-1 rounded text-sm font-bold">
                    ${cartTotal}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <input
          type="text"
          placeholder="Search themes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Themes Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredThemes.map(theme => (
            <div
              key={theme.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-6xl">
                {theme.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{theme.name}</h3>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm font-semibold">
                    {theme.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{theme.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{theme.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">({theme.sales} sales)</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">${theme.price}</span>
                </div>
                {cart.includes(theme.id) ? (
                  <button
                    onClick={() => removeFromCart(theme.id)}
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-medium"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(theme.id)}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-xl">No themes found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Cart Summary</h3>
          <div className="space-y-2 mb-4">
            {cart.map(id => {
              const theme = themes.find(t => t.id === id)
              return theme ? (
                <div key={id} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{theme.name}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${theme.price}</span>
                </div>
              ) : null
            })}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${cartTotal}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-bold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
