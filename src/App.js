import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';



const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-black">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: '1000'}}>
              <TooltipComponent content="settings" position="TopCenter">
                  <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:border-x-gray-300'
                    >
                    <FiSettings />
                  </button>
              </TooltipComponent>
              </div>  
          { activeMenu ? (
            <div className='w-72 fixed Sidebar dark:bg-secondary bg-white'>
              Sidebar
            </div>
          ) : (
            <div>
              Sidebar w-0
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
