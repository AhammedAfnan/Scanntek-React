import NavTab from "./NavTab";
import NavEnd from "./NavEnd";

export default function Navbar() {
    return (
      <header className="flex h-20 w-full items-center">
        <div className="flex items-center">
          <button>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0834 18.75L4.33337 13L10.0834 7.25L10.85 8.01667L6.40839 12.4583H21.6667V13.5417H6.40839L10.85 17.9833L10.0834 18.75Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="px-2 text-lg text-white">Branch name</span>
        </div>
        <div className="flex ml-6 space-x-3">
          <NavTab isActive to="/">
            Dashboard
          </NavTab>
          <NavTab to="/">Sales</NavTab>
          <NavTab to="/">Payment</NavTab>
          <NavTab to="/">Tax</NavTab>
          <NavTab to="/">MIS</NavTab>
          <NavTab to="/">Purchase entry</NavTab>
        </div>
        <NavEnd />
      </header>
    );
  }
  

  


