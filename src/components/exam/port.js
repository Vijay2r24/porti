import React from 'react';

const PortfolioTemplate = () => {
  return (
    <div className="bg-[#12193f] min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">SUMATOSOFT</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Case Studies</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Insights</a>
        </nav>
        <button className="bg-pink-500 px-6 py-2 rounded-md">Get in Touch</button>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-10">
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            <span className="bg-gray-800 px-3 py-1 rounded-md">AWS</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Capistrano</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Websockets</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Bluemix IoT</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Nodered</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">redis</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Postgre SQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded-md">Ruby on Rails</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">A platform for vital farm animals signs monitoring</h1>
          <p className="text-lg">The Client develops a technology incorporated in a matchbox-sized wearable device allowing precise measurement of medically relevant vital data of farm animals.</p>
        </div>
        <div className="w-full max-w-lg">
          <img src="device-monitoring-image.png" alt="Monitoring device" className="w-full rounded-lg shadow-lg" />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 text-center bg-gray-800">
        <p className="text-sm">
          This website uses cookies to improve your website experience and provide more personalized services to you. 
          <a href="#" className="underline ml-1">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default PortfolioTemplate;
