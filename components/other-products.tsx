import React from "react";

const ShopGearProducts = () => {
  return (
    <section>
      <div className="mx-auto container px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between mb-2">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-slate-50"
          >
            Shop Gear & Accessories
          </h2>
          <a
            href="#"
            className="hidden text-sm font-medium text-zinc-200 hover:text-indigo-500 md:block"
          >
            Shop more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <p className="text-gray-400 mb-8">
          Level up your style with our handpicked selection of trendy pieces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt={`product ${index}`}
                    src="https://placehold.co/600x400?text=No+Image"
                    className="aspect-h-3 aspect-w-4 object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium">
                  <h3>
                    <a href="#" className="text-slate-100">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {`Product ${index}`}
                    </a>
                  </h3>
                  <p className="text-slate-300">{`$${750}`}</p>
                </div>
                <p className="mt-1 text-sm text-slate-200">
                  {`Category ${index}`}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGearProducts;
