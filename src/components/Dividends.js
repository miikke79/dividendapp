import React from 'react'

export default function Dividends({dividends}) {

  const yields = ((dividends.dividendHistory[0].dividend / dividends.price)*100).toFixed(2)

  const lastYearDividend = dividends.dividendHistory.slice(0,5)

  const last5YearDividend = 
    (((lastYearDividend.reduce((sum, year)=> sum+year.dividend, 0))
    /5/dividends.price)*100)
    .toFixed(2)
  
  const weights = [3,2,1,1,1];
  var finalArray=[]
    for (var i =0; i<lastYearDividend.length; i++) {
      finalArray[i] = lastYearDividend[i].dividend * weights[i]
    }

  const WeightedYield = 
    ((finalArray.reduce( (sum, year) => sum+year, 0 )/weights.reduce((sum, w) => sum+w)/dividends.price)*100).toFixed(2)
  
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
            <td>Dividend yield-%:</td><td>{yields}%</td>
          </tr>
          <tr>
            <td>5-year average dividend yield-%:</td><td>{last5YearDividend}%</td>
          </tr>
          <tr>
            <td>5-year weighted average dividend yield-%:</td><td>{WeightedYield}%</td>
          </tr>
        </tbody>
      </table>
      <br/>
    </div>
  )

}