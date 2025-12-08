import { useEffect, useRef } from 'react';

const TradingViewScreener = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      isTransparent: false,
      locale: 'en',
      width: '100%',
      height: 550,
    });

    // Append the script to the container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup: Remove the script when the component unmounts
    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewScreener;
