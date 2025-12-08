import { useEffect, useRef, useState } from 'react';

const CFDWidget = () => {
    const widgetContainerRef = useRef<HTMLDivElement | null>(null);
    const isScriptLoaded = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const initializeWidget = () => {
            if (!isScriptLoaded.current && widgetContainerRef.current) {
                // Create script element
                const script = document.createElement('script');
                script.src = 'https://s3.tradingview.com/tv.js';
                script.async = true;

                // Initialize widget after script loads
                script.onload = () => {
                    // @ts-ignore
                    if (window.TradingView) {
                        // @ts-ignore
                        new window.TradingView.widget({
                            symbol: 'FX:USDOLLAR',
                            interval: isMobile ? '15' : 'D', // Use shorter interval for mobile
                            timezone: 'Etc/UTC',
                            theme: 'dark',
                            style: '1', // Candlestick chart
                            locale: 'en',
                            toolbar_bg: '#f1f3f6',
                            enable_publishing: false,
                            hide_side_toolbar: isMobile, // Hide side toolbar on mobile
                            allow_symbol_change: !isMobile, // Disable symbol change on mobile
                            save_image: !isMobile, // Disable save image on mobile
                            withdateranges: !isMobile, // Hide date ranges on mobile
                            show_popup_button: false, // Disable popup on mobile
                            studies: [],
                            studies_overrides: {},
                            container_id: 'tradingview_cfd_chart',
                            autosize: true,
                            utm_source: 'infiniteprotrades.com',
                            utm_medium: 'widget',
                            utm_campaign: 'chart',
                            utm_term: 'FX:USDOLLAR',
                        });
                        isScriptLoaded.current = true;
                        setIsLoading(false);
                        console.log('TradingView CFD widget initialized');
                    } else {
                        console.error('TradingView library not loaded');
                        setIsLoading(false);
                    }
                };

                script.onerror = () => {
                    console.error('Failed to load TradingView script');
                    setIsLoading(false);
                };

                // Append script to the document body
                document.body.appendChild(script);

                // Cleanup on unmount
                return () => {
                    if (script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                };
            }
        };

        initializeWidget();

        // Handle window resize to reinitialize widget and update mobile state
        const handleResize = () => {
            const newIsMobile = window.innerWidth < 768;
            setIsMobile(newIsMobile);
            if (isScriptLoaded.current && widgetContainerRef.current) {
                // Clear existing widget
                widgetContainerRef.current.innerHTML = '';
                isScriptLoaded.current = false;
                initializeWidget();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minHeight: '300px', // Minimum height for mobile
                maxHeight: 'calc(100vh - 120px)', // Prevent overflow on mobile
            }}
            className="relative"
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}
            <div
                id="tradingview_cfd_chart"
                ref={widgetContainerRef}
                className="tradingview-widget-container__widget"
                style={{
                    width: '100%',
                    height: isMobile ? '500px' : '100%', // 500px height on mobile, 100% on desktop
                    margin: 0,
                    padding: 0,
                }}
            ></div>
        </div>
    );
};

export default CFDWidget;