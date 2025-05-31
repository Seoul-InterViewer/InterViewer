export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="absolute top-[64px] left-0 right-0 h-[calc(100vh-64px)] bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome to Our Platform</h1>
          <p className="text-lg">Discover amazing features and possibilities</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-8 mt-[calc(100vh-64px)]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Layout Test Page</h2>
          <p className="text-gray-600">Testing different layout components and spacing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Card 1</h3>
            <p>Testing card layout and spacing</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
            <p>Testing card layout and spacing</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Card 3</h3>
            <p>Testing card layout and spacing</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2">Button 1</button>
          <button className="bg-gray-500 text-white rounded px-4 py-2">Button 2</button>
          <button className="bg-green-500 text-white rounded px-4 py-2">Button 3</button>
        </div>
      </main>
    </div>
  );
}
