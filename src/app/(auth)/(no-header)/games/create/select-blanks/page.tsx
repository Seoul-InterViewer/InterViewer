export default function SelectBlanksPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Select Blanks</h2>
        <p className="text-gray-600">Choose which words to make into blanks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Word 1</h3>
          <p>Sample word content</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Word 2</h3>
          <p>Sample word content</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Word 3</h3>
          <p>Sample word content</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-500 text-white rounded px-4 py-2">Select All</button>
        <button className="bg-gray-500 text-white rounded px-4 py-2">Deselect All</button>
        <button className="bg-green-500 text-white rounded px-4 py-2">Continue</button>
      </div>
    </div>
  );
}
