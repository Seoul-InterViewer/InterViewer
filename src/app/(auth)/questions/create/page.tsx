export default function CreateQuestionPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Create Question Test Page</h1>
      
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Question Form</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input 
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter question title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter question content"
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
