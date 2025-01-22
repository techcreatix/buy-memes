import React from 'react'
import { CardData } from '../content/CardData'

export default function HottestCards() {
  return (
    <div className="grid grid-cols-4   gap-4">
    {CardData.map((card, index) => (
      <div key={index} className="items-center flex" >
        <div className="max-w-xs bg-white rounded-lg w-[300px] shadow-lg overflow-hidden">
          <div className="relative h-[195px]">
            <img src={card.Image} alt="Hottest Card"/>
          </div>
          <div className="p-4">
            <div className="mt-2 flex justify-between items-center">
             <div class="flex">
             <h2 className="text-lg font-bold">{card.Ticker}</h2>
              {card.cardCheck && (
                <img src={card.cardCheck} alt=""></img>
              )
              }
             </div>
            {
              card.Change && (
                <span className="text-green-500 text-sm font-bold">
                ▲ {card.Change}
              </span>
              )
            }
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="text-lg font-semibold">{card.Price}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Market Cap</p>
                <p className="text-lg font-semibold">{card["Market Cap"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
