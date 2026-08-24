export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col p-8 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">NIGERIA NETWORK INTELLIGENCE</h1>
        <p className="text-gray-400">Live network health and infrastructure monitoring.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Metric Cards */}
        <div className="bg-[#111] border border-gray-800 p-6 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 uppercase">Network Health</h2>
          <div className="text-4xl font-bold text-green-500 mt-2">97.8%</div>
        </div>
        <div className="bg-[#111] border border-gray-800 p-6 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 uppercase">Active Incidents</h2>
          <div className="text-4xl font-bold text-orange-500 mt-2">7</div>
        </div>
        <div className="bg-[#111] border border-gray-800 p-6 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 uppercase">Critical Incidents</h2>
          <div className="text-4xl font-bold text-red-500 mt-2">2</div>
        </div>
        <div className="bg-[#111] border border-gray-800 p-6 rounded-lg">
          <h2 className="text-sm font-medium text-gray-500 uppercase">Known Towers</h2>
          <div className="text-4xl font-bold text-white mt-2">34,192</div>
        </div>
      </div>
      
      {/* Map Preview or additional charts can go here */}
      <div className="flex-1 bg-[#111] border border-gray-800 rounded-lg flex items-center justify-center min-h-[400px]">
         <p className="text-gray-500">Dashboard Visualizations (Phase 10)</p>
      </div>
    </div>
  );
}
