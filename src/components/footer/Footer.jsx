import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    

<footer className="border-t-[1px] border-gray-500 my-10 dark:bg-gray-900">
          <div className="mx-auto  max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="my-6 text-sm font-semibold  uppercase text-gray-400">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to={"about"} className=" hover:underline">About</Link>
                </li> 
                <li className="mb-4">
                    <Link to="contactus" className="hover:underline">Contact</Link>
                </li>
                {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Partner</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li> */}
            </ul>
        </div>
        <div>
            <h2 className="my-6 text-sm font-semibold  uppercase text-gray-400">Social Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
               
                <li className="mb-4">
                    <a href="https://twitter.com/nzaidna" className="hover:underline">Twitter</a>
                </li>
                {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li> */}
                <li className="mb-4">
                    <a href="https://www.linkedin.com/company/nz-aidna/" className="hover:underline">LinkedIn</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="my-6 text-sm font-semibold text-gray-400">Aidna</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <NavLink to={"udos"} href="#" className="hover:underline">üdos</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to={"ucdp"} href="#" className="hover:underline">ücdp</NavLink>
                </li>
                {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li> */}
            </ul>
        </div>
        <div>
            <h2 className="my-6 text-sm font-semibold text-gray-400">Usefull Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {/* <li className="mb-4">
                    <Link to={"/"} href="#" className="hover:underline">Home</Link>
                </li> */}
                <li className="mb-4">
                    <Link to={"about"} className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link to={"solutions"} className="hover:underline">Solutions</Link>
                </li>
                {/* <li className="mb-4"> */}
                    {/* <a href="#" className="hover:underline">Contact </a> */}
                {/* </li> */}
            </ul>
        </div>
    </div>
 
    </div>
</footer>

  )
}
