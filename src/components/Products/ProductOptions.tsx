export const ProductOptions = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src="https://bonoxs.com/_next/image?url=https%3A%2F%2Fprod-bnx-public.s3.us-east-1.amazonaws.com%2Fmedia%2Fcatalog%2Fproduct%2Fm%2Fo%2Fmobileslegends_2.png&w=640&q=75"
            alt="Product"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-6 sm:mt-0">
          <h2 className="text-3xl font-semibold text-primary mb-4">Product Title</h2>
          <p className="text-lg text-secondary mb-4">Short product description or summary.</p>
          
          <div className="mb-4">
            <p className="text-xl font-semibold text-third">ARS 374,59</p>
            <p className="text-sm text-gray-400">Including bonuses and extra items</p>
          </div>

          {/* Diamond Packages */}
          <div className="space-y-4">
            <div className="bg-primary p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl text-white">11 Diamonds + 1 Bonus</h3>
                <p className="text-white">ARS 374,59</p>
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-lg">Buy Now</button>
            </div>
            <div className="bg-secondary p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl text-white">40 Diamonds + 4 Bonus</h3>
                <p className="text-white">ARS 1.284,40</p>
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-lg">Buy Now</button>
            </div>
            {/* Add more diamond packages as needed */}
          </div>

          {/* Purchase Button */}
          <div className="mt-6 text-center">
            <button className="bg-third text-white py-3 px-6 rounded-lg w-full sm:w-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}