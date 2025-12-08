import { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
    const containerRef = useRef(null);
    const widgetConfig = {
        colorTheme: "dark",
        dateRange: "12M",
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showFloatingTooltip: false,
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "#DBDBDB",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
            {
                title: "Indices",
                symbols: [
                    { s: "FOREXCOM:SPXUSD", d: "S&P 500 Index" },
                    { s: "FOREXCOM:NSXUSD", d: "US 100 Cash CFD" },
                    { s: "FOREXCOM:DJI", d: "Dow Jones Industrial Average Index" },
                    { s: "INDEX:NKY", d: "Japan 225" },
                    { s: "INDEX:DEU40", d: "DAX Index" },
                    { s: "FOREXCOM:UKXGBP", d: "FTSE 100 Index" },
                    { s: "BLACKBULL:NAS100", d: "", "currency-logoid": "country/US" },
                    { s: "BIST:XBANK", d: "", logoid: "country/TR", "currency-logoid": "country/TR" },
                    { s: "CBOE:VIX9D", d: "", logoid: "indices/volatility-s-and-p-500" },
                    { s: "ICMARKETS:JP225", d: "", "currency-logoid": "country/JP" },
                    { s: "INDEX:HSI", d: "Hang Seng Index" },
                    { s: "INDEX:FR40", d: "CAC 40 Index" },
                    { s: "INDEX:ASX200", d: "ASX 200 Index" },
                    { s: "INDEX:SX5E", d: "Euro Stoxx 50" },
                    { s: "INDEX:IBEX35", d: "IBEX 35 Index" },
                    { s: "INDEX:FTMIB", d: "FTSE MIB Index" },
                    { s: "INDEX:KOSPI", d: "KOSPI Index" },
                    { s: "INDEX:SENSEX", d: "BSE Sensex Index" },
                    { s: "INDEX:NIFTY", d: "NIFTY 50 Index" },
                    { s: "INDEX:CHINA50", d: "China A50 Index" },
                ],
                originalTitle: "Indices",
            },
            {
                title: "Futures",
                symbols: [
                    { s: "BMFBOVESPA:ISP1!", d: "S&P 500" },
                    { s: "BMFBOVESPA:EUR1!", d: "Euro" },
                    { s: "CMCMARKETS:GOLD", d: "Gold" },
                    { s: "PYTH:WTI3!", d: "WTI Crude Oil" },
                    { s: "BMFBOVESPA:CCM1!", d: "Corn" },
                    { s: "CME:6B1!", d: "Pounds" },
                    { s: "CME:6J1!", d: "Yen" },
                    { s: "CME:6M1!", d: "Peso" },
                    { s: "HKEX:HSI1!", d: "" },
                    { s: "EUREX:FDXM1!", d: "" },
                    { s: "CME:GC1!", d: "Gold Futures" },
                    { s: "CME:SI1!", d: "Silver" },
                    { s: "CME:CL1!", d: "Crude Oil" },
                    { s: "CME:NG1!", d: "Natural Gas" },
                    { s: "CBOT:ZC1!", d: "Corn" },
                    { s: "CBOT:ZS1!", d: "Soybeans" },
                    { s: "CBOT:ZW1!", d: "Wheat" },
                    { s: "ICE:SB1!", d: "Sugar" },
                    { s: "ICE:KC1!", d: "Coffee" },
                    { s: "ICE:CC1!", d: "Cocoa" },
                ],
                originalTitle: "Futures",
            },
            {
                title: "Forex",
                symbols: [
                    { s: "FX:EURUSD", d: "EUR to USD" },
                    { s: "FX:GBPUSD", d: "GBP to USD" },
                    { s: "FX:USDJPY", d: "USD to JPY" },
                    { s: "FX:USDCHF", d: "USD to CHF" },
                    { s: "FX:AUDUSD", d: "AUD to USD" },
                    { s: "FX:USDCAD", d: "USD to CAD" },
                    { s: "FX:CADCHF", d: "", "base-currency-logoid": "country/CA", "currency-logoid": "country/CH" },
                    { s: "ICMARKETS:GBPJPY", d: "", "base-currency-logoid": "country/GB", "currency-logoid": "country/JP" },
                    { s: "FX_IDC:CNYUSD", d: "", "base-currency-logoid": "country/CN", "currency-logoid": "country/US" },
                    { s: "CAPITALCOM:CHFNOK", d: "", "base-currency-logoid": "country/CH", "currency-logoid": "country/NO" },
                    { s: "FX:NZDUSD", d: "NZD to USD" },
                    { s: "FX:EURGBP", d: "EUR to GBP" },
                    { s: "FX:EURJPY", d: "EUR to JPY" },
                    { s: "FX:AUDJPY", d: "AUD to JPY" },
                    { s: "FX:CADJPY", d: "CAD to JPY" },
                    { s: "FX:CHFJPY", d: "CHF to JPY" },
                    { s: "FX:EURCAD", d: "EUR to CAD" },
                    { s: "FX:AUDCAD", d: "AUD to CAD" },
                    { s: "FX:NZDJPY", d: "NZD to JPY" },
                    { s: "FX:USDMXN", d: "USD to MXN" },
                ],
                originalTitle: "Forex",
            },
            {
                title: "Crypto",
                symbols: [
                    { s: "BINANCE:BTCUSDT", d: "", "base-currency-logoid": "crypto/XTVCBTC", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BITSTAMP:BTCUSD", d: "", "base-currency-logoid": "crypto/XTVCBTC", "currency-logoid": "country/US" },
                    { s: "BINANCE:ETHUSDT", d: "", "base-currency-logoid": "crypto/XTVCETH", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:BTCUSDT.P", d: "", "base-currency-logoid": "crypto/XTVCBTC", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:SOLUSDT", d: "", "base-currency-logoid": "crypto/XTVCSOL", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:XRPUSDT", d: "", "base-currency-logoid": "crypto/XTVCXRP", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:AVAXUSDT", d: "", "base-currency-logoid": "crypto/XTVCAVAX", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:LTCUSDT", d: "", "base-currency-logoid": "crypto/XTVCLTC", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:ETCUSDT", d: "", "base-currency-logoid": "crypto/XTVCETC", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:RENDERUSDT", d: "", "base-currency-logoid": "crypto/XTVCRNDR", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:ADAUSDT", d: "", "base-currency-logoid": "crypto/XTVCADA", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:BNBUSDT", d: "", "base-currency-logoid": "crypto/XTVCBNB", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "COINBASE:BTCUSD", d: "", "base-currency-logoid": "crypto/XTVCBTC", "currency-logoid": "country/US" },
                    { s: "BITSTAMP:ETHUSD", d: "", "base-currency-logoid": "crypto/XTVCETH", "currency-logoid": "country/US" },
                    { s: "COINBASE:ETHUSD", d: "", "base-currency-logoid": "crypto/XTVCETH", "currency-logoid": "country/US" },
                    { s: "BINANCE:DOGEUSDT", d: "", "base-currency-logoid": "crypto/XTVCDOGE", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:DOTUSDT", d: "", "base-currency-logoid": "crypto/XTVCDOT", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:LINKUSDT", d: "", "base-currency-logoid": "crypto/XTVCLINK", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:MATICUSDT", d: "", "base-currency-logoid": "crypto/XTVCMATIC", "currency-logoid": "crypto/XTVCUSDT" },
                    { s: "BINANCE:SHIBUSDT", d: "", "base-currency-logoid": "crypto/XTVCSHIB", "currency-logoid": "crypto/XTVCUSDT" },
                ],
                originalTitle: "Crypto",
            },
            {
                title: "Stocks",
                symbols: [
                    { s: "NASDAQ:TSLA", d: "", logoid: "tesla", "currency-logoid": "country/US" },
                    { s: "NASDAQ:AAPL", d: "", logoid: "apple", "currency-logoid": "country/US" },
                    { s: "NASDAQ:NVDA", d: "", logoid: "nvidia", "currency-logoid": "country/US" },
                    { s: "NASDAQ:PLTR", d: "", logoid: "palantir", "currency-logoid": "country/US" },
                    { s: "NASDAQ:AMZN", d: "", logoid: "amazon", "currency-logoid": "country/US" },
                    { s: "NASDAQ:AMD", d: "", logoid: "advanced-micro-devices", "currency-logoid": "country/US" },
                    { s: "NASDAQ:MSFT", d: "", logoid: "microsoft", "currency-logoid": "country/US" },
                    { s: "NASDAQ:META", d: "", logoid: "meta-platforms", "currency-logoid": "country/US" },
                    { s: "NYSE:ORCL", d: "", logoid: "oracle", "currency-logoid": "country/US" },
                    { s: "NASDAQ:GOOGL", d: "", logoid: "alphabet", "currency-logoid": "country/US" },
                    { s: "NASDAQ:ADBE", d: "", logoid: "adobe", "currency-logoid": "country/US" },
                    { s: "NASDAQ:PYPL", d: "", logoid: "paypal", "currency-logoid": "country/US" },
                    { s: "NYSE:RDDT", d: "", logoid: "reddit", "currency-logoid": "country/US" },
                    { s: "NASDAQ:ABNB", d: "", logoid: "airbnb", "currency-logoid": "country/US" },
                    { s: "NYSE:IBM", d: "", logoid: "ibm", "currency-logoid": "country/US" },
                    { s: "NYSE:KO", d: "", logoid: "coca-cola", "currency-logoid": "country/US" },
                    { s: "NYSE:PEP", d: "", logoid: "pepsico", "currency-logoid": "country/US" },
                    { s: "NYSE:JPM", d: "", logoid: "jpmorgan-chase", "currency-logoid": "country/US" },
                    { s: "NYSE:GS", d: "", logoid: "goldman-sachs", "currency-logoid": "country/US" },
                    { s: "NYSE:BA", d: "", logoid: "boeing", "currency-logoid": "country/US" },
                ],
                originalTitle: "Stocks",
            },
        ],
        support_host: "https://www.tradingview.com",
        backgroundColor: "#0f0f0f",
        width: "100%",
        height: "100%",
        showSymbolLogo: true,
        showChart: true,
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify(widgetConfig);
        // @ts-ignore
        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                // @ts-ignore
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright hidden">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Market data by TradingView</span>
                </a>
            </div>
        </div>
    );
};

export default TradingViewWidget;