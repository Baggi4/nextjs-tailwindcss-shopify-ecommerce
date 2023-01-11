import { HomeIcon } from '@heroicons/react/20/solid'

const Breadcrumbs = ({ product }) => {
  return (
    <nav className="flex mt-0.5 bg-black" aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <a href="/" className="text-white hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li key={product.name} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <p
                
                className="ml-4 text-sm font-bold text-sky-800 hover:text-gray-500"
                aria-current={product.current ? 'page' : undefined}
              >
                {product.name}
              </p>
            </div>
          </li>
      </ol>
    </nav>
  )
}
export default Breadcrumbs