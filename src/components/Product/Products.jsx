
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from './ProductCard'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import Loader from '../Loader/Loader'
const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'sm', label: 'sm', checked: false },
      { value: 'md', label: 'ms', checked: false },
      { value: 'L', label: 'L', checked: false },
      { value: 'xl', label: 'xl', checked: false },

    ],
  },
]
const singleFilters = [
  {
    id: 'Price',
    name: 'Price',
    options: [
      { value: '159-399', label: '$ 159-399', },
      { value: '399-999', label: '$ 399-999', },
      { value: '999-1999', label: '$ 999-1999', checked: true },
      { value: '1999-2999', label: '$ 1999-2999', },
      { value: '2999-3999', label: '$ 2999-3999', },
      { value: '3999-4999', label: '$ 3999-4999', },
    ],
  },
  {
    id: 'Discount',
    name: 'Discount Range',
    options: [
      { value: '20', label: '20% And Above', },
      { value: '30', label: '30% And Above', },
      { value: '40', label: '40% And Above', },
      { value: '50', label: '50% And Above', },
      { value: '60', label: '60% And Above', },
      { value: '70', label: '70% And Above', },
      { value: '80', label: '80% And Above', },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock', },
      { value: 'out_of_stock', label: 'Out Of Stock', },

    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const location = useLocation()
  const { pathname } = location
  console.log(location)
  const { data, isLoading } = useGetProductsQuery()
  const shirt = data?.filter(item => item.thirdLavelCategory == "shirt");
  const jeans = data?.filter(item => item.thirdLavelCategory == "men_jeans");
  const punjabi = data?.filter(item => item.thirdLavelCategory == "mens_kurta");
  const womenDress = data?.filter(item => item.thirdLavelCategory == "women_dress");
  const tops = data?.filter(item => item.thirdLavelCategory == "top");
  const womenJeans = data?.filter(item => item.thirdLavelCategory == "women_jeans");
  const lenghaCholi = data?.filter(item => item.thirdLavelCategory == "lengha_choli");


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="bg-white container mx-auto overflow-x-hidden">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-4 relative">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-5 ">
              {/* Filters */}

              <form className="hidden lg:block sticky top-5 ">
                <div className='flex justify-between items-center py-10'>
                  <h3 className='font-bold opacity-60 text-xl'>Filter</h3>
                  < FilterListIcon />
                </div>
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {singleFilters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">

                            <FormLabel sx={{ color: "black" }} className="font-medium text-gray-900" id="demo-radio-buttons-group-label">{section.name}</FormLabel>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            <FormControl>
                              {section.options.map((option) => (
                                <div key={option.value} className="flex items-center">


                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name={`${section.id}[]`}
                                  >
                                    <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                                  </RadioGroup>

                                </div>
                              ))}
                            </FormControl>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4">
                <div className='flex grid grid-cols-4 flex-wrap justify-center bg-white py-5'>
                  {pathname === '/women/tops'
                    ? tops.map((item, index) => <ProductCard key={index} product={item} />)
                    : pathname === '/women/dress'
                      ? womenDress?.map((item, index) => <ProductCard key={index} product={item} />)
                      : pathname === '/women/pants'
                        ? womenJeans?.map((item, index) => <ProductCard key={index} product={item} />)
                        : pathname === '/women/Lehenga'
                          ? lenghaCholi?.map((item, index) => <ProductCard key={index} product={item} />)
                          : pathname === '/mens/top'
                            ? punjabi?.map((item, index) => <ProductCard key={index} product={item} />)
                            : pathname === '/mens/pants'
                              ? jeans?.map((item, index) => <ProductCard key={index} product={item} />)
                              : pathname === '/mens/punjabi'
                                ? punjabi?.map((item, index) => <ProductCard key={index} product={item} />)
                                : pathname === '/mens/shirts'
                                  ? shirt?.map((item, index) => <ProductCard key={index} product={item} />)
                                  : data.map((item, index) => <ProductCard key={index} product={item} />)
                  }
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
//a=3?3