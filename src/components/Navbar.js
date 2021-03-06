import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (event) => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="relative container mx-auto mt-10">
        <div className="flex justify-end">
          <button
            id="menu-btn"
            className="block hamburger focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-4xl font-medium text-offBlack">
                          Links
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 flex-col">
                        <ul className="menu">
                          {/* <li className="text-2xl text-offBlack my-8 py-2 menu-option">
                            <a href="https://www.google.com">About</a>
                          </li> */}
                          <li className="text-2xl text-offBlack my-8 py-2 menu-option">
                            <a href="https://www.github.com/dylandkim">
                              Github
                            </a>
                          </li>
                          <li className="text-2xl text-offBlack my-8 py-2 menu-option">
                            <a href="https://dribbble.com/DohyunK">Dribbble</a>
                          </li>
                          {/* <li className="text-2xl text-offBlack my-8 py-2 menu-option">
                            <a href="www.google.com">Download Resume</a>
                          </li> */}
                          <li className="text-2xl text-offBlack my-8 py-2 menu-option">
                            <a href="https://www.linkedin.com/in/dylandkim/">
                              <svg
                                class="w-6 h-6 text-blue-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </nav>
    </>
  );
}
