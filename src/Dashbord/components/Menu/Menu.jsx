import React from 'react'
import { menu } from '../../data'
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div className=" border-r border-[#384256] text-[#ddd] ">
      {menu.map((item) => (
        <div className="flex flex-col text-sm  " key={item.id}>
          <span className="mt-5 uppercase text-[#a9a7a7]">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="flex items-center gap-x-1" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="my-3 font-semibold text-lg">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu