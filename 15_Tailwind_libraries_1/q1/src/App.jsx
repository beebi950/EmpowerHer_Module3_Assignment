function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-600 text-white gap-4">
        <h1 className="text-xl font-bold">Tailwind App</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center p-10">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Tailwind CSS Basics
        </h2>

       <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Hero"
        className="mx-auto mt-6 rounded-lg shadow-lg hover:scale-105 transition"
      />

      </section>

      {/* Button */}
      <div className="text-center">
        <button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded px-6 py-2 transition">
          Click Me
        </button>
      </div>

      {/* List */}
      <ul className="list-disc list-inside pl-5 mt-6 text-center">
        <li className="hover:text-blue-600">Feature One</li>
        <li className="hover:text-blue-600">Feature Two</li>
        <li className="hover:text-blue-600">Feature Three</li>
      </ul>

      {/* Cards Grid */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://picsum.photos/400/250"
              className="rounded mb-3"
            />
            <h3 className="font-bold text-lg">Card Title</h3>
            <p className="text-gray-600">Card description goes here.</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        ))}
      </section>

      {/* Table */}
      <div className="p-6 overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {["A","B","C"].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-gray-200"}>
                <td className="border p-2">User {row}</td>
                <td className="border p-2">Developer</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form */}
      <section className="p-6 max-w-md mx-auto">
        <form className="bg-white shadow-lg rounded p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
