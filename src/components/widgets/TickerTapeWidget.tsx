import { useEffect, useRef } from 'react';

const TickerTapeWidget = () => {
    const widgetContainerRef = useRef(null);
    const isScriptLoaded = useRef(false);

    useEffect(() => {
        if (!isScriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
                // symbols: [
                //     { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
                //     { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
                //     { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
                //     { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
                //     { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
                //     { description: '', proName: 'OANDA:NAS100USD' },
                // ],
                symbols: [
                    {
                        proName: "FOREXCOM:SPXUSD",
                        title: "S&P 500 Index"
                    },
                    {
                        proName: "FOREXCOM:NSXUSD",
                        title: "US 100 Cash CFD"
                    },
                    {
                        proName: "FX_IDC:EURUSD",
                        title: "EUR to USD"
                    },
                    {
                        proName: "BITSTAMP:BTCUSD",
                        title: "Bitcoin"
                    },
                    {
                        proName: "BITSTAMP:ETHUSD",
                        title: "Ethereum"
                    },
                    {
                        proName: "BINANCE:BTCUSDT",
                        title: ""
                    },
                    {
                        proName: "NASDAQ:TSLA",
                        title: ""
                    },
                    {
                        proName: "OANDA:USDJPY",
                        title: ""
                    },
                    {
                        proName: "SP:SPX",
                        title: ""
                    },
                    {
                        proName: "CAPITALCOM:GOLD",
                        title: ""
                    },
                    {
                        proName: "COINBASE:SOLUSD",
                        title: ""
                    },
                    {
                        proName: "NYSE:ORCL",
                        title: ""
                    }
                ],
                showSymbolLogo: true,
                isTransparent: false,
                displayMode: 'adaptive',
                colorTheme: 'dark',
                locale: 'en',
            });
            // @ts-ignore
            widgetContainerRef.current.appendChild(script);
            isScriptLoaded.current = true;
        }
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TickerTapeWidget;






