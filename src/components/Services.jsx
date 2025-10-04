function Services(){

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Services</h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-10">
        We offer a wide range of services to support our clients and community.  
        Our goal is to deliver solutions that create real impact and help you grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl mb-3">Web Development</h3>
          <p className="text-gray-600">
            Modern, responsive, and user-friendly websites designed to showcase your brand.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl mb-3">Mobile App Solutions</h3>
          <p className="text-gray-600">
            Cross-platform mobile applications to connect with your audience on the go.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl mb-3">IT Consultancy</h3>
          <p className="text-gray-600">
            Expert guidance and strategy planning to transform your ideas into reality.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Services;