import { useEffect, useRef } from 'react';

interface SingleQuoteWidgetProps {
    symbol?: string;
    colorTheme?: 'light' | 'dark';
    isTransparent?: boolean;
    locale?: string;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
}


/**
 * SingleQuoteWidget: A React component that embeds a TradingView Single Quote widget.
 * Displays a single quote overview for a specified symbol (e.g., NASDAQ:TSLA) with customizable options.
 */
const SingleQuoteWidget4: React.FC<SingleQuoteWidgetProps> = ({
                                                                  symbol = 'NASDAQ:MSFT',
                                                                  colorTheme = 'dark',
                                                                  isTransparent = false,
                                                                  locale = 'en',
                                                                  // @ts-ignore
                                                                  width = 270,
                                                                  // @ts-ignore
                                                                  height = 'auto',
                                                                  autosize = false,
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
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol,
            colorTheme,
            isTransparent,
            locale,
            autosize: true, // Enable autosize for responsive behavior
            // Width and height omitted to let autosize handle sizing based on container
        });

        // Append script to container
        containerRef.current.appendChild(script);

        // Cleanup on unmount or prop changes
        return () => {
            if (containerRef.current && script.parentNode) {
                containerRef.current.removeChild(script);
            }
        };
    }, [symbol, colorTheme, isTransparent, locale, autosize]);

    // Extract ticker for copyright link (e.g., AAPL from NASDAQ:AAPL)
    const ticker = symbol.split(':')[1] || symbol;
    const symbolPath = symbol.replace(':', '-');

    return (
        <div className="tradingview-widget-container w-full md:w-[270px]" ref={containerRef}>
            <div className="tradingview-widget-container__widget" />
            <div style={{display: "none"}} className="tradingview-widget-copyright">
                <a href={`https://www.tradingview.com/symbols/${symbolPath}/`} rel="noopener nofollow" target="_blank">
                    <span className="blue-text">{ticker} stock price</span>
                </a>
                <span className="trademark"> by TradingView</span>
            </div>
        </div>
    );
};

export default SingleQuoteWidget4;