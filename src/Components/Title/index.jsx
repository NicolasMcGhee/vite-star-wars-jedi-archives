// import React from "react";
// import "./index.css";
// import magnifyingGlass from "/Icons/magnifying-glass.svg";

// export default function Title() {
//   return (
//     <div className="bg-amber-300 w-full">
//       <div className="flex gap-3">
//         <h2>Jedi Achives</h2>
//         <ul className="flex gap-2">
//           <li>Jedi Arrow</li>
//           <li>Sith Arrow</li>
//           <li>Others Arrow</li>
//         </ul>
//       </div>
//       <div className="Title-Search">
//         <img src={magnifyingGlass} alt="" width={35} />
//         <input type="text" placeholder="Search The Archives" />
//       </div>
//     </div>
//   );
// }

import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export default function Title() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu>
      <MenuHandler>
        <Button className="text-black"> Menu</Button>
      </MenuHandler>
      <MenuList className="bg-slate-300 menu_Dropdown">
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={8}
        >
          <MenuHandler className="flex">
            <MenuItem>
              Nested Item
            </MenuItem>
          </MenuHandler>
          <MenuList className="bg-slate-500 menu_Dropdown">
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}