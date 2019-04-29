import React from "react"
import cryptonHome from "./cryptonHome.png"
import cryptonHome2 from "./cryptonHome2.png"

const CryptonHome = () => (
  <div style={{ minHeight: "100vh", width: "100%", background: "black" }}>
    <div style={{ display: "flex", justifyContent: "space-around", }}>
      <div style={{ color: "white", padding: "40px", textAlign: "justify" }}>
        <h3>
          I started the Crypton Investment Fund in 2017 in an attempt to capitalize on the high
          volatility historically observed in crypto-currency markets.  The screen shots bellow and to the right
          show the pertinent parts of the dashboard.
          The Fund continuously trades 25 assets using the software I developed.  2018 was a rought year for crypto in
          general and for the Fund specifically, although the software performed well despite market conditions.
        </h3>
        <h3>
          One of the challenges with this project was creating
          an accounting suite that could handle the volume of trade activity.
          The fund has seen single trading days with more than 20,000 transactions.
          I needed to develop an software that could handle that many transactions and
          apply tax treatment to the Fund's advantage.  The IRS treats trading between digital assets
          as both an aquisition and a disposal which can make the accounting tough.  I ended up using
          MongoDB for the backend and ruby for front end.
      </h3>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "40px" }}>
          <img src={cryptonHome2} style={{ border: "solid white 2px" }} />
        </div>
      </div>
      <div style={{ padding: "40px", marginTop: "20px", }}>
        <img src={cryptonHome} style={{ border: "solid white 2px" }} />
      </div>
    </div>
  </div>
)

export default CryptonHome