import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-black text-white p-4 flex justify-between items-center shadow">
        <Link to="/" className="text-2xl font-bold text-yellow-400">Osbone-Stores</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        </nav>
      </header>

      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Osbone-Stores. All rights reserved.
      </footer>
    </div>
  )
}

export default App
