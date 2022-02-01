import React from 'react'

export default function Dividends({dividends}) {

  const dividendYields = ((dividends.dividendHistory[0].dividend/dividends.price)*100).toFixed(2);
  const lastYearDividend = dividends.dividendHistory.slice(0,5);
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Share:</td><td>{dividends.share}</td>
          </tr>
          <tr>
            <td>Company:</td><td>{dividends.company}</td>
          </tr>
          <tr>
            <td>Price:</td><td>{dividends.price}</td>
          </tr>
          <tr>
            <td>Last year dividend:</td><td>{dividends.dividendHistory[0].dividend}%</td>
          </tr>
          <tr>
            <td>Dividend yield-%:</td><td>{dividendYields}%</td>
          </tr>
          <tr>
            <td>5-year average dividend yield-%:</td><td>?</td>
          </tr>
          <tr>
            <td>5-year weighted average dividend yield-%:</td><td>?</td>
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  )

}