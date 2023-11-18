"use client";
import React, { useEffect } from "react";

const WidgetBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "BSE",
        "showChart": true,
        "locale": "in",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "showFloatingTooltip": false,
        "width": "450",
        "height": "390",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
      }
    `;
    document.querySelector(".tradingview-WidgetBanner").appendChild(script);

    return () => {
      document.querySelector(".tradingview-WidgetBanner").removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-banner">
      <div className="tradingview-WidgetBanner"></div>
    </div>
  );
};

export default WidgetBanner;
