function Contact(){

    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
        Have questions, suggestions, or want to collaborate with us? 
        We’d love to hear from you! Reach out through the details below 
        or send us a quick message.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <p className="mb-2"><span className="font-semibold">Address:</span> 123 Main Street, Pali,Rajasthan, India</p>
        <p className="mb-2"><span className="font-semibold">Email:</span> manishrangi694@gmail.com</p>
        <p className="mb-2"><span className="font-semibold">Phone:</span> +91 98.......</p>
      </div>

      
    </div>
    )
}

export default Contact;