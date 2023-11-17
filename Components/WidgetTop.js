"use client";
import React, { useEffect } from "react";
import styles from "./styles/WidgetTop.css";

const WidgetTop = () => {
  useEffect(() => {
    // Check if the script has already been appended
    if (
      document.querySelector(".tradingview-widget-container__widget").children
        .length === 0
    ) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;

      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BSE:SENSEX", title: "BSE Sensex" },
          { proName: "BSE:SBIN", title: "SBI India" },
          { proName: "FX_IDC:INRUSD", title: "INR to USD" },
          { proName: "BSE:RELIANCE", title: "Reliance Industries Ltd" },
          { proName: "BSE:TATAMTRDVR", title: "Tata Motors Ltd" },
          { proName: "BSE:ASIANPAINT", title: " Asian Paints Ltd" },
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "in",
      });

      document
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default WidgetTop;
