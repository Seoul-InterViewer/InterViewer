export default function SearchPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Search Test Page</h1>
      
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Search Form</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Search Query</label>
              <input 
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter search query"
              />
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Search
              </button>
              <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Sample Result 1</h3>
              <p className="text-gray-600">This is a sample search result description.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Sample Result 2</h3>
              <p className="text-gray-600">Another sample search result description.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
