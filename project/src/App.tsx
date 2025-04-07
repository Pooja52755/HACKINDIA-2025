import React, { useState } from 'react';
import { Wallet, Upload, Image as ImageIcon, Settings2, BarChart3, Shield, Layers, ChevronRight } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('marketplace');

  const features = [
    {
      title: "Deploy Your Smart Contract",
      description: "Create and manage your own NFT smart contracts with full ownership and control",
      icon: <Wallet className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Custom Royalties",
      description: "Set and manage your own royalty structures for secondary sales",
      icon: <BarChart3 className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Multi-Chain Support",
      description: "Deploy across multiple blockchain networks for wider reach",
      icon: <Layers className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced security measures to protect your digital assets",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    }
  ];

  const mockNFTs = [
    {
      id: 1,
      title: "Digital Dreamscape #1",
      creator: "0x742...3d9",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Cosmic Collection #42",
      creator: "0x156...8f4",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Abstract Harmony",
      creator: "0x932...1a7",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <ImageIcon className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CreatorNFT</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                Connect Wallet
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Create NFT
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Own Your Creation
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Deploy your own smart contracts, set custom royalties, and maintain full control of your digital assets.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketplace Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured NFTs</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              Recent
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
              Trending
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockNFTs.map((nft) => (
            <div key={nft.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src={nft.image} alt={nft.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{nft.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Created by {nft.creator}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-900">{nft.price}</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Tools Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Creator Tools</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Upload className="w-6 h-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Deploy Contract</h3>
              <p className="mt-2 text-gray-500">Create and deploy your own smart contract with custom parameters</p>
              <ChevronRight className="w-5 h-5 text-gray-400 mt-4" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Settings2 className="w-6 h-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Manage Royalties</h3>
              <p className="mt-2 text-gray-500">Set and update your royalty structure for secondary sales</p>
              <ChevronRight className="w-5 h-5 text-gray-400 mt-4" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <BarChart3 className="w-6 h-6 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
              <p className="mt-2 text-gray-500">Track your NFT performance and sales analytics</p>
              <ChevronRight className="w-5 h-5 text-gray-400 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;