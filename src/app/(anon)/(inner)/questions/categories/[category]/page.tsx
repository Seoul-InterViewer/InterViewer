export default function CategoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Category Page</h2>
        <p className="text-gray-600">Testing category page layout and components</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Question 1</h3>
          <p>Sample question content</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Question 2</h3>
          <p>Sample question content</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Question 3</h3>
          <p>Sample question content</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-500 text-white rounded px-4 py-2">Filter</button>
        <button className="bg-gray-500 text-white rounded px-4 py-2">Sort</button>
        <button className="bg-green-500 text-white rounded px-4 py-2">New Question</button>
      </div>
    </div>
  );
}
