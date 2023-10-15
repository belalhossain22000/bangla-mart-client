
import { Fragment, useContext, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'


const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/women/tops' },
            { name: 'Dresses', href: '/women/dress' },
            { name: 'Pants', href: '/women/pants' },
            { name: 'Denim', href: '/women/denim' },
            { name: 'Sweaters', href: '/women/sweaters' },
            { name: 'T-Shirts', href: '/women/t-shirt' },
            { name: 'Jackets', href: '/women/jackets' },
            { name: 'Activewear', href: '/women/activewear' },
            { name: 'Browse All', href: 'store' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/top' },
            { name: 'Pants', href: '/pants' },
            { name: 'Sweaters', href: '/sweaters' },
            { name: 'T-Shirts', href: '/t-shirts' },
            { name: 'Jackets', href: 'jackets' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '/store' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '/store' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logOut } = useContext(AuthContext);

  // loguot 
  const handleLogOut = () => {
    console.log("clicked");
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => console.log(error.message));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white relative ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* desktop menu */}
      <header className="relative bg-white  ">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* rs btn */}
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="data:image/jpeg;base64,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K78FPtqikkMSZEmXiEREQBERAEREASDJkYgGC5tlqKVcZB/WZT9RsGoPg71PZbgR3eMu+JgurdaqFHGQflzlLMw43x9pLhljHyHU/gokTb1Cweg2DvUn0W7/AB5zUnM2VyhJxktNG7hOM13R4EREwMhERAEREAREQBETHWrKil3YKqjJJhLb0g3oV6y01L1CFVRkkz0dB0FrhlubxCEUhre3YdXEVag+93Lw8eqdn9Dau63V2hVFIa3t24HrFWoPvdy8PGXMCdDg4Kr/ANSfP9Goysrv+mPAE+oibUoiIiAIiIAiIgCIiAIiIBEGTEA17igtRSrjIP6zKjqWntQbB3oey30POXWYbigtVSjjKmUsvDjkR9pLhljHvlU/gocTe1PTmoN3oey30POaM5myuVcu2S8o3cJxnHuiIiJgZCIiAIiY7iutNC7noqu8n6AcTynqTfhBtLkV6y01LuwVV6yf1vM9LQNDau63V4hVFIa3tmHUeFWoPvdy8PGfWz2hNVZbq8QqF9K3tm9TuqOOL9w9XxlynQYOAq/rn+b+jUZWV3/THj+yMSZMTalEREQBERAEREAREQBERAEREAREQBIkxAMFxQWopVxkGVHU9Oag3eh6m+h5y6GYq9BailXGQ24iU8vEjkR+Vwyei+VUvgoUT09R0epSJZFLp+HtqOa8fETyPPpnolgG4q3osPFTvE5y3GtqepRNzXdCxbizJEx1KyJ23VfaYD85joXDVj0bWm9durKDFMc2qH0R7szGFNk3qMWzKVkYrbZ93FdKal3OFHvyeAA4nlPW2f0BnZbm9TBGGoWzbxS7ncdRqf2+M2NE2aKOte9ZalZd9OmuTRok8RntN+I+7EtIm+wsBU/XP839Gqycp2fTHgCJMTZlIREQBERAEREAREQBERAEREAREQBERAEREASMSYgEYmvXs6dTdVpo47nRW/MTZiAedT0S0TetrRU5zlaFMHPfuE3lQDcAAO4DAn3E80kCMSYiegREQBERAEREAREQBERAP//Z"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch  z-50">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </Link>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <Link to={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {
                    user ? (<>
                      <div onClick={handleClick} className='cursor-pointer' >
                        <Avatar alt="profile" src={user.photoURL}/>
                      </div>
                      <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={handleClose}
                      >
                        <MenuItem className='cursor-pointer' onClick={handleClose}>Profile</MenuItem>
                        <Link to="/order">
                        <MenuItem className='cursor-pointer' onClick={handleClose}>My Order</MenuItem></Link>
                        <MenuItem  className='cursor-pointer'onClick={() => { handleClose(); handleLogOut(); }}>Logout</MenuItem>
                      </Menu>

                    </>
                    ) : (
                      <Link to="register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Sign in
                      </Link>
                    )
                  }

                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link to="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
                {/* dashbord */}
                <div className="flex lg:ml-6">
                  <Link to="/dashboard" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Dashboard</span>
                   Dashboard
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Navbar