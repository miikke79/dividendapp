import React from 'react'

export default function Dividends({dividends}) {

  const dividendYields = ((dividends.dividendHistory[0].dividend/dividends.price)*100).toFixed(2);
  const lastYearDividend = dividends.dividendHistory.slice(0,5);
  
  return (
    <div>
            <p>Share:   {dividends.share}</p>
            <p>Company: {dividends.company}</p>
            <p>Price: {dividends.price}</p>
            <p>Last year dividend: {dividends.dividendHistory[0].dividend}%</p>
            <p>Dividend yield-%: {dividendYields}%</p>
            <p>5-year average dividend yield-%: ?</p>
            <p>5-year weighted average dividend yield-%: ?</p>
            <br/>
    </div>
  )

}