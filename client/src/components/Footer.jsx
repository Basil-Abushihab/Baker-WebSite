import React from 'react'

function Footer() {
  return (
    <section>
    <footer className="w-full py-14 mt-26">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            <img
              alt="Logo"
              className="w-[100px] mx-auto"
              src="../src/assets/image2-removebg-preview (1).png"
            />
          </span>
          <div className="flex space-x-10 justify-center items-center mb-14">
           <p className='w-[300px]'><p className='text-amber-900 text-center w-[210px] '>Envato</p>
    Level 13, 2 Elizabeth
    Victoria 3000
    Australia</p>
            <a
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
              href="#"
            >
              {/* <svg
                className="w-[1.688rem] h-[1.688rem]"
                fill="none"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="currentColor"
                />
              </svg> */}
    
              <p className='text-amber-900 font-serif text-3xl mx-16 w-[300px]'>+61 (0) 3 8376 6284</p>
            </a>
            <div class=" text-left ml-[700px] ">
                       
                        <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Our team</a></li>
                            <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">products</a></li>
                            <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">Certificates</a></li>
                            <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Clients</a></li>
                            <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">history</a></li>
                        </ul>
                    </div>
            <a
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
              href="#"
            >
              <svg
                className="w-[1.688rem] h-[1.688rem]"
                fill="none"
                viewBox="0 0 29 29"
                xmlns="http://www.w3.org/2000/svg"
              >
                
              </svg>
            </a>
          </div>
          <p className="text-center text-sm text-gray-500">
            © 2024 B baker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
    
    </section>
  )
}

export default Footer;
