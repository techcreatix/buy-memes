import React from 'react'

export default function HottestCards() {
  return (
    <div class="items-center justify-center lg:justify-end  col-span-12 lg:col-span-4 flex">
    <div className="max-w-xs  bg-white rounded-lg  w-[300px] shadow-lg overflow-hidden">
      <div className="relative bg-red-500 h-[195px]">
        <div className="absolute top-2 right-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <g filter="url(#filter0_d_1_346)">
              <path
                d="M35.8636 18.9215C36.9821 17.6015 39.018 17.6015 40.1364 18.9215L41.4841 20.5122C42.1699 21.3217 43.2542 21.674 44.2849 21.4223L46.3101 20.9275C47.9908 20.517 49.6379 21.7137 49.7669 23.4389L49.9221 25.518C50.0012 26.576 50.6714 27.4984 51.6531 27.9005L53.5824 28.6907C55.1835 29.3464 55.8126 31.2827 54.9028 32.7542L53.8064 34.5275C53.2485 35.4299 53.2485 36.5701 53.8064 37.4725L54.9028 39.2458C55.8126 40.7173 55.1835 42.6536 53.5824 43.3093L51.6531 44.0996C50.6714 44.5016 50.0012 45.4241 49.9221 46.4819L49.7669 48.5611C49.6379 50.2863 47.9908 51.483 46.3101 51.0725L44.2849 50.5778C43.2542 50.3259 42.1699 50.6783 41.4841 51.4878L40.1364 53.0785C39.018 54.3985 36.9821 54.3985 35.8636 53.0785L34.516 51.4878C33.8301 50.6783 32.7458 50.3259 31.7151 50.5778L29.6899 51.0725C28.0092 51.483 26.3621 50.2863 26.2332 48.5611L26.0779 46.4819C25.9988 45.4241 25.3287 44.5016 24.3469 44.0996L22.4176 43.3093C20.8166 42.6536 20.1874 40.7173 21.0973 39.2458L22.1936 37.4725C22.7516 36.5701 22.7516 35.4299 22.1936 34.5275L21.0973 32.7542C20.1874 31.2827 20.8166 29.3464 22.4176 28.6907L24.3469 27.9005C25.3287 27.4984 25.9988 26.576 26.0779 25.518L26.2332 23.4389C26.3621 21.7137 28.0092 20.517 29.6899 20.9275L31.7151 21.4223C32.7458 21.674 33.8301 21.3217 34.516 20.5122L35.8636 18.9215Z"
                fill="#2081E2"
              />
            </g>
            <path
              d="M35.9 39.675L32.225 36L31 37.225L35.9 42.125L46.4 31.625L45.175 30.4L35.9 39.675Z"
              fill="white"
              stroke="white"
              stroke-width="0.666667"
            />
            <defs>
              <filter
                id="filter0_d_1_346"
                x="0.777857"
                y="-1.9685"
                width="74.4443"
                height="75.937"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="9.95" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_346"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_346"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="p-4">
        <div className="mt-2 flex justify-between items-center">
          <h2 className="text-lg font-bold">VIRTUAL</h2>
          <span className="text-green-500 text-sm font-bold">
            ▲ 0.59%
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-lg font-semibold">$2.74</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Market Cap</p>
            <p className="text-lg font-semibold">$1.7B</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
