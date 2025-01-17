'use client'
import Link from "next/link"
 export default function Component() {
  return (<>
    <header
      className="flex items-center justify-between px-6 py-4 bg-white shadow-sm dark:bg-gray-900">
      <Link
        className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100"
        href="#">
        <LeafIcon className="w-6 h-6 text-green-500" />
        FoodSave
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Surplus Food
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Business
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Donate
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Learn
        </Link>
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Community
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          href="#">
          Login
        </Link>
        <Link
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
          href="#">
          Sign Up
        </Link>
      </div>
    </header>
    <main>
      <section className="bg-gray-50 dark:bg-gray-800 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Reduce Food Waste, Feed the Community
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our platform connects businesses with surplus food to local organizations and individuals in need,
              helping to reduce food waste and feed the community.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              Get Started
            </Link>
          </div>
          <div>
            <img
              alt="Food Waste Reduction"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Surplus Food"
              className="rounded-lg object-cover"
              height={400}
              src=""
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Surplus Food Listings</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Browse our database of surplus food items from local businesses. View details on quantity, expiration
              date, and pickup/delivery options.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              View Surplus Food
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Business Inventory Management</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Easily manage your business's food inventory, update availability, and track donations through our
              intuitive platform.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              Manage Inventory
            </Link>
          </div>
          <div>
            <img
              alt="Inventory Management"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Donation Matching"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Intelligent Donation Matching</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our algorithm intelligently matches businesses with surplus food to nearby organizations and individuals
              in need, ensuring efficient food distribution.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              Donate Food
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Educational Resources</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our comprehensive educational resources on food safety, storage, and waste reduction techniques
              to help you adopt sustainable practices.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              Learn More
            </Link>
          </div>
          <div>
            <img
              alt="Educational Resources"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-20 md:py-32">
        <div
          className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              alt="Community Forum"
              className="rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Join the Community</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Connect with like-minded individuals, share experiences, and collaborate on food waste reduction
              initiatives through our vibrant community forum.
            </p>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              href="#">
              Join the Forum
            </Link>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div
        className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <LeafIcon className="w-6 h-6 text-green-500" />
          <span className="text-lg font-bold">FoodSave</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link className="hover:text-gray-100" href="#">
            About
          </Link>
          <Link className="hover:text-gray-100" href="#">
            Contact
          </Link>
          <Link className="hover:text-gray-100" href="#">
            Privacy
          </Link>
          <Link className="hover:text-gray-100" href="#">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  </>);
}

function LeafIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>)
  );
}
