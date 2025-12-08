import { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  chartOnly?: boolean;
  dateRange?: '1D' | '1W' | '1M' | '3M' | '6M' | '12M' | '60M' | 'ALL';
  noTimeScale?: boolean;
  colorTheme?: 'light' | 'dark';
  isTransparent?: boolean;
  locale?: string;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
}

/**
 * CFDMiniWidget: A React component that embeds a TradingView Mini Symbol Overview widget.
 * Displays a compact chart for a specified CFD symbol (e.g., CAPITALCOM:US500) with customizable options.
 */
const CFDMiniWidget: React.FC<TradingViewWidgetProps> = ({
  symbol = 'CAPITALCOM:US500',
  chartOnly = false,
  dateRange = '12M',
  noTimeScale = false,
  colorTheme = 'dark',
  isTransparent = false,
  locale = 'en',
  width = '100%',
  height = '100%',
  autosize = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure container exists
    if (!containerRef.current) {
      console.error('TradingView widget container not found');
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      chartOnly,
      dateRange,
      noTimeScale,
      colorTheme,
      isTransparent,
      locale,
      width,
      height,
      autosize,
    });

    // Append script to container
    containerRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (containerRef.current && script.parentNode) {
        containerRef.current.removeChild(script);
      }
    };
  }, [symbol, chartOnly, dateRange, noTimeScale, colorTheme, isTransparent, locale, width, height, autosize]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
</div>
);
};

export default CFDMiniWidget;
