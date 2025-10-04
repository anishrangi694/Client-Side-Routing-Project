

function Home(){

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Welcome to Our Website
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        We are dedicated to providing the best services and resources for our
        community. Explore our website to learn more about what we do and how
        you can get involved. 
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
    )
}

export default Home;