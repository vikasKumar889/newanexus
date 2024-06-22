// import React, { useState } from 'react'
// import Header from './Header'
// import SearchIcon from '@material-ui/icons/Search';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const SearchContainer = () => {
//     const searchOptions = [
//         'Technology', 'Health', 'Finance', 'Entertainment', 'Sports'
//       ];
//       const [selectedOption, setSelectedOption] = useState(null);

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     console.log("Selected category:", option);
//   };
//   return (
//     <div>
//       <Header/>
//       <div className="main_container2">
//         <div className="container">
//           <div className="header_search">
//             <SearchIcon className="header_searchIcon" />
//             <input
//               placeholder="Search for news articles by keyword or topic"
//               className="Search"
//               onChange={() => {
//                 console.log("hello");
//               }}
//             />
//           </div>
//           <div className="category_btn">
//             <Dropdown
//               options={searchOptions}
//               onChange={handleSelect}
//               value={selectedOption}
//               placeholder="Sort by category"
//               className="custom-dropdown"
//             />
//           </div>
//         </div>
//       </div>

//       <div className='card_main_container'>
//         <div className='card_container'>
//           {/* <span className='card_heading'>Latest Updates and Reports</span> */}
//           <div className='card_sub_container'>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//             <div className='card_img_container'>
//               <img src='https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' className='card_img' alt='DNA Profile Package'/>
//               <span className='card_img_heading'>Personal DNA Profile Package</span>
//               <span className='card_sub_heading'>Unlock the secrets of your DNA with our advanced genomics studies. Explore the blueprint of life for groundbreaking insights.</span>
//               <span className='card_timestamp'>12:00 PM, Thu</span>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default SearchContainer
