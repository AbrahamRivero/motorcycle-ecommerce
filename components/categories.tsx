const categories = [
  {
    name: "Motorcycles",
    href: "#",
    imageSrc:
      "/268964158acf429229dc46f7c3980801.webp",
  },
  {
    name: "Riding Gear",
    href: "#",
    imageSrc:
      "/dhehaivan-hEK_nqe760k-unsplash.jpg",
  },
  {
    name: "Parts and Accessories",
    href: "#",
    imageSrc:
      "/photo-1652191337993-e4bcdd3bbc08.avif",
  },
  {
    name: "Electronics and Gadgets",
    href: "#",
    imageSrc:
      "/81kvSfIg1DL._AC_SX679_.jpg",
  },
  {
    name: "Custom Parts",
    href: "#",
    imageSrc:
      "/61IcMd4A+5L._AC_SY300_SX300_.jpg",
  },
];

export default function Categories() {
  return (
    <div className="py-16 sm:py-24 xl:mx-auto xl:container xl:px-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">
          Shop by Category
        </h2>
        <a
          href="#"
          className="hidden text-sm font-semibold text-zinc-200 hover:text-indigo-500 sm:block"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      alt=""
                      src={category.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-lg font-bold text-white">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 sm:hidden">
        <a
          href="#"
          className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
