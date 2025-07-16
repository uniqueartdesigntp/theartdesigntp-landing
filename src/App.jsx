import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-4">🔥 Welcome to TheArtDesignTp 🔥</h1>
      <p className="text-center mb-8 max-w-xl">
        Discover our full collection of Print On Demand products 👇
      </p>

      <div className="flex flex-col space-y-4 w-full max-w-sm">
        <a href="https://artdesigntp.fourthwall.com/" target="_blank" rel="noopener noreferrer">
          <button className="w-full p-4 text-lg border rounded-xl hover:bg-gray-100">🌐 Fourthwall Official Store</button>
        </a>
        <a href="https://artdesigntp.redbubble.com/" target="_blank" rel="noopener noreferrer">
          <button className="w-full p-4 text-lg border rounded-xl hover:bg-gray-100">🎨 Redbubble Designs</button>
        </a>
        <a href="http://tee.pub/lic/ff-EM3_cCdw" target="_blank" rel="noopener noreferrer">
          <button className="w-full p-4 text-lg border rounded-xl hover:bg-gray-100">👕 TeePublic Products</button>
        </a>
        <a href="https://www.amazon.com/shop/unique.artdesigntp" target="_blank" rel="noopener noreferrer">
          <button className="w-full p-4 text-lg border rounded-xl hover:bg-gray-100">🛒 Amazon Storefront</button>
        </a>
        <a href="https://www.etsy.com/shop/TheArtDesignTp" target="_blank" rel="noopener noreferrer">
          <button className="w-full p-4 text-lg border rounded-xl hover:bg-gray-100">🛍️ Etsy Official Store</button>
        </a>
      </div>
    </div>
  )
}

export default App
