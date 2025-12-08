import { useEffect, useRef } from 'react';

interface HotlistsWidgetProps {
    exchange?: string;
    colorTheme?: 'light' | 'dark';
    dateRange?: '1D' | '1W' | '1M' | '3M' | '6M' | '12M' | '60M' | 'ALL';
    showChart?: boolean;
    locale?: string;
    largeChartUrl?: string;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    showFloatingTooltip?: boolean;
    plotLineColorGrowing?: string;
    plotLineColorFalling?: string;
    gridLineColor?: string;
    scaleFontColor?: string;
    belowLineFillColorGrowing?: string;
    belowLineFillColorFalling?: string;
    belowLineFillColorGrowingBottom?: string;
    belowLineFillColorFallingBottom?: string;
    symbolActiveColor?: string;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
}

/**
 * HotlistsWidget: A React component that embeds a TradingView Hotlists widget.
 * Displays hotlists for stocks in a specified exchange with customizable options.
 */
const HotlistsWidget: React.FC<HotlistsWidgetProps> = ({
                                                           exchange = 'US',
                                                           colorTheme = 'dark',
                                                           dateRange = '12M',
                                                           showChart = true,
                                                           locale = 'en',
                                                           largeChartUrl = '',
                                                           isTransparent = false,
                                                           showSymbolLogo = false,
                                                           showFloatingTooltip = false,
                                                           plotLineColorGrowing = 'rgba(41, 98, 255, 1)',
                                                           plotLineColorFalling = 'rgba(41, 98, 255, 1)',
                                                           gridLineColor = 'rgba(240, 243, 250, 0)',
                                                           scaleFontColor = '#DBDBDB',
                                                           belowLineFillColorGrowing = 'rgba(41, 98, 255, 0.12)',
                                                           belowLineFillColorFalling = 'rgba(41, 98, 255, 0.12)',
                                                           belowLineFillColorGrowingBottom = 'rgba(41, 98, 255, 0)',
                                                           belowLineFillColorFallingBottom = 'rgba(41, 98, 255, 0)',
                                                           symbolActiveColor = 'rgba(41, 98, 255, 0.12)',
                                                           width = "100%",
                                                           height = 550,
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
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            exchange,
            colorTheme,
            dateRange,
            showChart,
            locale,
            largeChartUrl,
            isTransparent,
            showSymbolLogo,
            showFloatingTooltip,
            plotLineColorGrowing,
            plotLineColorFalling,
            gridLineColor,
            scaleFontColor,
            belowLineFillColorGrowing,
            belowLineFillColorFalling,
            belowLineFillColorGrowingBottom,
            belowLineFillColorFallingBottom,
            symbolActiveColor,
            width: autosize ? '100%' : width,
            height: autosize ? '100%' : height,
            autosize,
        });

        // Append script to container
        containerRef.current.appendChild(script);

        // Cleanup on unmount or prop changes
        return () => {
            if (containerRef.current && script.parentNode) {
                containerRef.current.removeChild(script);
            }
        };
    }, [
        exchange,
        colorTheme,
        dateRange,
        showChart,
        locale,
        largeChartUrl,
        isTransparent,
        showSymbolLogo,
        showFloatingTooltip,
        plotLineColorGrowing,
        plotLineColorFalling,
        gridLineColor,
        scaleFontColor,
        belowLineFillColorGrowing,
        belowLineFillColorFalling,
        belowLineFillColorGrowingBottom,
        belowLineFillColorFallingBottom,
        symbolActiveColor,
        width,
        height,
        autosize,
    ]);

    // For the copyright link, assuming it's for US stocks as in the example
    const marketSlug = exchange.toLowerCase() === 'us' ? 'usa' : exchange.toLowerCase();

    return (
        <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget" />
            <div style={{display: "none"}} className="tradingview-widget-copyright">
                <a href={`https://www.tradingview.com/markets/stocks-${marketSlug}/`} rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Stocks today</span>
                </a>
                <span className="trademark"> by TradingView</span>
            </div>
        </div>
    );
};

export default HotlistsWidget;