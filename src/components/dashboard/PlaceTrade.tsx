import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setTradingType } from '../../redux/reduxSlices/tradingStatusSlice';
import useCreateTrade from '../../hooks/trade/useCreateTrade';
import { createTradeRequest } from '../../utils/interfacesAndTypes';
import { toast } from 'sonner';
import Select, { SingleValue } from 'react-select';
import ForexWidget from "../widgets/ForexWidget.tsx";
import CryptoWidget from "../widgets/CryptoWidget.tsx";
import StocksWidget from "../widgets/StocksWidget.tsx";
import CFDWidget from "../widgets/CFDWidget.tsx";
import CommoditiesWidget from "../widgets/CommoditiesWidget.tsx";
import { DateTime } from 'luxon';


const tradingPairs: { [key: string]: string[] } = {
  Forex: [
    'AUD/BRL', 'AUD/CAD', 'AUD/CHF', 'AUD/CNH', 'AUD/CNY', 'AUD/CZK', 'AUD/DKK', 'AUD/HKD', 'AUD/HUF', 'AUD/IDR', 'AUD/INR', 'AUD/JPY', 'AUD/KRW', 'AUD/MXN', 'AUD/MYR', 'AUD/NOK', 'AUD/NZD', 'AUD/PHP', 'AUD/PLN', 'AUD/RUB', 'AUD/SEK', 'AUD/SGD', 'AUD/THB', 'AUD/TRY', 'AUD/USD', 'AUD/VND', 'AUD/ZAR',
    'CAD/BRL', 'CAD/CHF', 'CAD/CNH', 'CAD/CNY', 'CAD/CZK', 'CAD/DKK', 'CAD/HKD', 'CAD/HUF', 'CAD/IDR', 'CAD/INR', 'CAD/JPY', 'CAD/KRW', 'CAD/MXN', 'CAD/MYR', 'CAD/NOK', 'CAD/PHP', 'CAD/PLN', 'CAD/RUB', 'CAD/SEK', 'CAD/SGD', 'CAD/THB', 'CAD/TRY', 'CAD/VND', 'CAD/ZAR',
    'CHF/BRL', 'CHF/CNH', 'CHF/CNY', 'CHF/CZK', 'CHF/DKK', 'CHF/HKD', 'CHF/HUF', 'CHF/IDR', 'CHF/INR', 'CHF/JPY', 'CHF/KRW', 'CHF/MXN', 'CHF/MYR', 'CHF/NOK', 'CHF/PHP', 'CHF/PLN', 'CHF/RUB', 'CHF/SEK', 'CHF/SGD', 'CHF/THB', 'CHF/TRY', 'CHF/VND', 'CHF/ZAR',
    'DKK/CZK', 'DKK/HKD', 'DKK/HUF', 'DKK/MXN', 'DKK/NOK', 'DKK/PLN', 'DKK/SEK', 'DKK/SGD', 'DKK/ZAR',
    'EUR/AUD', 'EUR/BRL', 'EUR/CAD', 'EUR/CHF', 'EUR/CNH', 'EUR/CNY', 'EUR/CZK', 'EUR/DKK', 'EUR/GBP', 'EUR/HKD', 'EUR/HUF', 'EUR/IDR', 'EUR/ILS', 'EUR/INR', 'EUR/JPY', 'EUR/KRW', 'EUR/MXN', 'EUR/MYR', 'EUR/NOK', 'EUR/NZD', 'EUR/PHP', 'EUR/PLN', 'EUR/RUB', 'EUR/SEK', 'EUR/SGD', 'EUR/THB', 'EUR/TRY', 'EUR/USD', 'EUR/VND', 'EUR/ZAR',
    'GBP/AUD', 'GBP/BRL', 'GBP/CAD', 'GBP/CHF', 'GBP/CNH', 'GBP/CNY', 'GBP/CZK', 'GBP/DKK', 'GBP/HKD', 'GBP/HUF', 'GBP/IDR', 'GBP/INR', 'GBP/JPY', 'GBP/KRW', 'GBP/MXN', 'GBP/MYR', 'GBP/NOK', 'GBP/NZD', 'GBP/PHP', 'GBP/PLN', 'GBP/RUB', 'GBP/SEK', 'GBP/SGD', 'GBP/THB', 'GBP/TRY', 'GBP/USD', 'GBP/VND', 'GBP/ZAR',
    'JPY/BRL', 'JPY/CNY', 'JPY/CZK', 'JPY/DKK', 'JPY/HKD', 'JPY/HUF', 'JPY/IDR', 'JPY/INR', 'JPY/KRW', 'JPY/MXN', 'JPY/MYR', 'JPY/NOK', 'JPY/PHP', 'JPY/PLN', 'JPY/RUB', 'JPY/SEK', 'JPY/SGD', 'JPY/THB', 'JPY/TRY', 'JPY/VND', 'JPY/ZAR',
    'NOK/CZK', 'NOK/HKD', 'NOK/HUF', 'NOK/MXN', 'NOK/PLN', 'NOK/SEK', 'NOK/SGD', 'NOK/ZAR',
    'NZD/BRL', 'NZD/CAD', 'NZD/CHF', 'NZD/CNY', 'NZD/CZK', 'NZD/DKK', 'NZD/HKD', 'NZD/HUF', 'NZD/IDR', 'NZD/INR', 'NZD/JPY', 'NZD/KRW', 'NZD/MXN', 'NZD/MYR', 'NZD/NOK', 'NZD/PHP', 'NZD/PLN', 'NZD/RUB', 'NZD/SEK', 'NZD/SGD', 'NZD/THB', 'NZD/TRY', 'NZD/USD', 'NZD/VND', 'NZD/ZAR',
    'USD/BRL', 'USD/CAD', 'USD/CHF', 'USD/CNH', 'USD/CNY', 'USD/CZK', 'USD/DKK', 'USD/HKD', 'USD/HUF', 'USD/IDR', 'USD/ILS', 'USD/INR', 'USD/JPY', 'USD/KRW', 'USD/MXN', 'USD/MYR', 'USD/NOK', 'USD/PHP', 'USD/PLN', 'USD/RUB', 'USD/SEK', 'USD/SGD', 'USD/THB', 'USD/TRY', 'USD/VND', 'USD/ZAR'
  ].sort(),
  Crypto: [
    'AAVE/BTC', 'AAVE/ETH', 'AAVE/EUR', 'AAVE/GBP', 'AAVE/USD', 'ADA/BTC', 'ADA/ETH', 'ADA/EUR', 'ADA/GBP', 'ADA/USD', 'ADA/USDT', 'ALGO/BTC', 'ALGO/ETH', 'ALGO/EUR', 'ALGO/GBP', 'ALGO/USD', 'ALICE/USDT', 'ARB/USDT', 'ASTER/USDT', 'AVAX/BTC', 'AVAX/ETH', 'AVAX/EUR', 'AVAX/GBP', 'AVAX/USD', 'AVAX/USDT', 'BCH/BTC', 'BCH/EUR', 'BCH/GBP', 'BCH/USDT', 'BNB/BTC', 'BNB/ETH', 'BNB/EUR', 'BNB/FDUSD', 'BNB/GBP', 'BNB/USD', 'BNB/USDC', 'BNB/USDT', 'BONK/USDT', 'BTC/EUR', 'BTC/FDUSD', 'BTC/GBP', 'BTC/JPY', 'BTC/KRW', 'BTC/USD', 'BTC/USDC', 'BTC/USDT', 'CAKE/USDT', 'CBBTC/WETH', 'COMP/BTC', 'COMP/ETH', 'COMP/EUR', 'COMP/GBP', 'COMP/USD', 'CRV/USDT', 'DOGE/BTC', 'DOGE/ETH', 'DOGE/EUR', 'DOGE/FDUSD', 'DOGE/GBP', 'DOGE/KRW', 'DOGE/USD', 'DOGE/USDT', 'DOT/BTC', 'DOT/ETH', 'DOT/EUR', 'DOT/GBP', 'DOT/USD', 'DOT/USDT', 'DUSD/BSC-USD', 'EDEN/USDT', 'ENA/USDT', 'ENS0/USDT', 'EOS/BTC', 'EOS/EUR', 'EOS/USD', 'ETC/BTC', 'ETC/EUR', 'ETC/GBP', 'ETC/USD', 'ETC/USDT', 'ETH/BTC', 'ETH/EUR', 'ETH/FDUSD', 'ETH/GBP', 'ETH/KRW', 'ETH/USD', 'ETH/USDC', 'ETH/USDT', 'FDUSD/USDC', 'FDUSD/USDT', 'FET/USDT', 'FIL/BTC', 'FIL/ETH', 'FIL/EUR', 'FIL/GBP', 'FIL/USD', 'FIL/USDT', 'HBAR/USDT', 'HYPE/USDT', 'ICP/BTC', 'ICP/ETH', 'ICP/EUR', 'ICP/GBP', 'ICP/USD', 'KOGE/BSC-USD', 'KSM/BTC', 'KSM/ETH', 'KSM/EUR', 'KSM/GBP', 'KSM/USD', 'LINK/BTC', 'LINK/ETH', 'LINK/EUR', 'LINK/GBP', 'LINK/USD', 'LINK/USDT', 'LTC/BTC', 'LTC/EUR', 'LTC/GBP', 'LTC/USD', 'LTC/USDT', 'MATIC/BTC', 'MATIC/ETH', 'MATIC/EUR', 'MATIC/GBP', 'MATIC/USD', 'MKR/BTC', 'MNT/USDT', 'NEAR/USDT', 'NEO/BTC', 'NEO/ETH', 'NEO/EUR', 'NEO/GBP', 'NEO/USD', 'OKB/USDT', 'OM/USDT', 'ONDO/USDT', 'OP/USDT', 'PAXG/USDT', 'PCP-BTC', 'PEPE/USDT', 'PENGU/USDT', 'PUMP/USDT', 'QUQ/BSC-USD', 'REP/BTC', 'REP/USD', 'SBUSDT/USDC', 'SHIB/BTC', 'SHIB/ETH', 'SHIB/EUR', 'SHIB/GBP', 'SHIB/USD', 'SHIB/USDT', 'SNX/USDT', 'SOL/BTC', 'SOL/ETH', 'SOL/EUR', 'SOL/FDUSD', 'SOL/GBP', 'SOL/KRW', 'SOL/USD', 'SOL/USDC', 'SOL/USDT', 'SUI/USDC', 'SUI/USDT', 'TAO/USDT', 'TRUMP/USDT', 'TRX/BTC', 'TRX/ETH', 'TRX/EUR', 'TRX/GBP', 'TRX/USD', 'TRX/USDT', 'TXR/GBP', 'UNI/BTC', 'UNI/ETH', 'UNI/EUR', 'UNI/GBP', 'UNI/USD', 'UNI/USDT', 'USDC/ETH', 'USDC/EUR', 'USDC/USDT', 'USDC/WETH', 'USDE/USDT', 'USDT/KRW', 'USDT/USD', 'USDT/USDC', 'VET/BTC', 'VET/ETH', 'VET/EUR', 'VET/GBP', 'VET/USD', 'WAVAX/USDC', 'WETH/USDC', 'WETH/USDT', 'WIF/USDT', 'WLFI/USDT', 'WLD/USDT', 'XAUT/USDT', 'XLM/BTC', 'XLM/EUR', 'XLM/USD', 'XLM/USDT', 'XMR/USDT', 'XPL/USDT', 'XRP/BTC', 'XRP/EUR', 'XRP/FDUSD', 'XRP/KRW', 'XRP/USD', 'XRP/USDC', 'XRP/USDT', 'XTZ/BTC', 'XTZ/ETH', 'XTZ/EUR', 'XTZ/GBP', 'XTZ/USD', 'ZEC/BTC', 'ZEC/USDT', 'ZRX/BTC', 'ZRX/EUR', 'ZRX/USD'
  ].sort(),
  CFD: [
    '3D Systems', 'ASML', 'AbbVie', 'Abbott', 'Accenture', 'Adidas', 'Adobe', 'Air France-KLM', 'Airbnb Inc', 'Airbus', 'Airbus Group SE', 'Allianz', 'Alphabet (Google)', 'Amazon.com', 'American Airlines', 'American Express', 'Anheuser-Busch Inbev', 'Annaly Capital', 'Apple', 'Applied Materials', 'Arista', 'Armenia Index', 'AstraZeneca', 'Aurora Cannabis Inc', 'Australia 200', 'Australian OZ', 'Austrian 20', 'Azerbaijan 20', 'BASF', 'BP', 'Bahrain 15', 'Baltic 10', 'Baltic 20', 'Bangladesh 30', 'Bank of America', 'Barclays', 'Barrick Gold', 'Bayer', 'Belgium 20', 'Berkshire Hathaway', 'Beyond Meat', 'Bilibili Inc', 'BioNTech', 'BlackBerry', 'Blackrock', 'Blackstone', 'Boeing Co', 'Bulgaria 10', 'CAC40', 'Cambodia Index', 'Campari', 'Canada 60', 'Canopy Growth', 'Cameco', 'CAT', 'CCB (Asia)', 'Ceconomy', 'Cellnex', 'ChargePoint Holdings Inc', 'Chevron', 'Chile 40', 'China A50', 'China Life', 'Chipotle', 'Christian Dior', 'Cisco Systems', 'Citigroup', 'Coca-Cola Co (NYSE)', 'Coinbase Inc', 'Colombia 20', 'Comcast', 'Conoco Phillips', 'Continental', 'Costco', 'CrowdStrike Holdings', 'Cyprus Index', 'Czech 20', 'Danish 20', 'Dave & Buster\'s', 'Deere', 'Delivery Hero SE', 'DeltaAir', 'Deutsche Bank', 'Diageo', 'DoorDash', 'Dutch 25', 'easyJet', 'eBay', 'Egypt Index', 'Electrolux', 'Eli Lilly', 'Eni', 'Etsy', 'Europe 50', 'Exxon Mobil', 'FAANG', 'Fedex', 'Finnish 25', 'FirstRand', 'Ford', 'Freeport McMoRan', 'French 75', 'Fresnillo', 'Fuelcell', 'FR40', 'General Electric', 'General Motors', 'Gen Digital Inc', 'Georgia Index', 'German Tech 30', 'Germany 30', 'Gilead', 'Glencore plc', 'Golar LNG', 'Goldman Sachs', 'GoPro', 'Greek 20', 'HSBC', 'HSBC HK', 'Hammerson', 'HDFC Bank', 'Hermes', 'Home Depot', 'Hubspot', 'Hungary 12', 'IAG', 'IBM', 'Iberdrola', 'Icelandic Index', 'Inditex', 'India 50', 'Infosys', 'Intel', 'Italian 40', 'JP Morgan', 'JD.com', 'JnJ', 'Jordan 15', 'Jumia Technologies', 'Kuaishou', 'Kuwait 20', 'Kyrgyzstan Index', 'L\'Oreal', 'LVMH', 'Laos Index', 'Lebanon Index', 'Lemonade', 'Li Auto', 'Linde PLC', 'Lithium Americas Corp', 'Lloyds', 'Lockheed Martin', 'Lucid', 'Lufthansa', 'Lululemon', 'Lyft', 'MENA 50', 'Malaysia 30', 'Malta Index', 'Marriott', 'Marston\'s', 'Mastercard', 'McDonald\'s', 'Medtronic', 'MercadoLibre.com', 'MerckCo USA', 'Meta (Formerly Facebook)', 'Mexico 35', 'Micron', 'Microsoft', 'Moderna Inc', 'Mongolia Index', 'Myanmar Index', 'Nasdaq', 'Naspers', 'Nel ASA', 'Netflix', 'New Oriental', 'Nike', 'Nio', 'Nordic 30', 'Norwegian Air Shuttle', 'Norwegian 25', 'Novavax', 'Nvidia', 'ON Semiconductor', 'Oracle', 'PG&E', 'Pakistan 50', 'Palantir Technologies Inc', 'Palo Alto Networks', 'Panama 20', 'Paraguay Index', 'PayPal', 'PepsiCo', 'Pfizer', 'Philippines 30', 'Philip Morris', 'Pinterest Inc', 'Plug Power', 'Poland 20', 'Porsche', 'Porsche AG', 'Portuguese 20', 'ProSiebenSat.1', 'Procter & Gamble', 'Prosus N.V.', 'Qorvo', 'Qatar 20', 'Qualcomm', 'RTX Corp', 'Raytheon Technologies Corp', 'Rio Tinto', 'Rivian Automotive', 'Robinhood', 'Roblox Corp', 'Roku Inc', 'Rolls-Royce', 'Romania 15', 'Royal Bank Canada', 'Russia 50', 'SAP', 'SMCI', 'Salesforce.com', 'Santander', 'Sartorius AG', 'Saudi 30', 'Schlumberger', 'Sea', 'Shell plc (LSE)', 'Siemens', 'Singapore 30', 'Slovakia Index', 'Snap', 'Snowflake', 'Sony', 'South Africa 40', 'South Korea 200', 'Spanish 35', 'Spotify', 'Starbucks', 'Swedish 30', 'Swiss 20', 'Syria Index', 'T-Mobile', 'Taiwan Index', 'Taiwan Semi', 'Tajikistan Index', 'Target', 'Telecom Italia', 'Teleperformance', 'Teladoc', 'Telefónica SA', 'Tencent', 'Tesla', 'Thailand 50', 'The Cheesecake Factory', 'The Trade Desk', 'Thermo Fisher', 'ThyssenKrupp AG', 'Tilray', 'Toro', 'Total', 'Toyota', 'Trump Media & Technology Group', 'TUI', 'Turkey 20', 'Turkmenistan Index', 'Twilio', 'Two Harbors Investment Corp', 'Uber', 'UiPath Inc', 'UAE 40', 'UPS', 'Unicredit', 'Unilever', 'Unilever PLC', 'United Airlines Holdings Inc', 'UnitedHealth', 'Unity Software', 'Upstart Holdings Inc', 'Upwork Inc.', 'Uruguay Index', 'Uzbekistan 20', 'Verizon', 'Vipshop', 'Vir Biotechnology', 'Visa', 'Vodafone', 'Volkswagen', 'Vonovia', 'Wal-Mart Stores', 'Wayfair', 'Wells Fargo', 'Xiaomi', 'XPeng Inc', 'Zoom Video Communications', 'ZIM Integrated Shipping Services Ltd'
  ].sort(),
  Stocks: [
    'A', 'AA', 'AACB', 'AACG', 'AACI', 'AAL', 'AAM', 'AAME', 'AAMI', 'AAOI', 'AAON', 'AAP', 'AAPG', 'AAPL', 'AARD', 'AAT', 'AAUC', 'AB', 'ABAT', 'ABBV', 'ABCB', 'ABCL', 'ABEO', 'ABEV', 'ABG', 'ABL', 'ABLV', 'ABM', 'ABNB', 'ABOS', 'ABP', 'ABR', 'ABSI', 'ABT', 'ABTC', 'ABTS', 'ABUS', 'ABVC', 'ABVE', 'ABVX', 'ACA', 'ACAD', 'ACB', 'ACCO', 'ACCS', 'ACDC', 'ACEL', 'ACET', 'ACFN', 'ACGL', 'ACHC', 'ACHR', 'ACHV', 'ACI', 'ACIC', 'ACIU', 'ACIW', 'ACLS', 'ACLX', 'ACM', 'ACMR', 'ACN', 'ACNB', 'ACNT', 'ACOG', 'ACON', 'ACR', 'ACRE', 'ACRS', 'ACRV', 'ACT', 'ACTG', 'ACTU', 'ACU', 'ACVA', 'ACXP', 'AD', 'ADAG', 'ADAM', 'ADAP', 'ADBE', 'ADC', 'ADCT', 'ADEA', 'ADGM', 'ADI', 'ADIL', 'ADM', 'ADMA', 'ADN', 'ADNT', 'ADP', 'ADPT', 'ADSE', 'ADSK', 'ADT', 'ADTN', 'ADTX', 'ADUR', 'ADUS', 'ADV', 'ADVB', 'ADVM', 'ADXN', 'AEBI', 'AEC', 'AEE', 'AEG', 'AEHL', 'AEHR', 'AEI', 'AEIS', 'AEM', 'AEMD', 'AENT', 'AEO', 'AEON', 'AEP', 'AER', 'AERT', 'AES', 'AESI', 'AEVA', 'AEXA', 'AEYE', 'AFBI', 'AFCG', 'AFG', 'AFJK', 'AFL', 'AFRI', 'AFRM', 'AFYA', 'AG', 'AGAE', 'AGCO', 'AGEN', 'AGH', 'AGI', 'AGIO', 'AGL', 'AGM', 'AGM.A', 'AGMH', 'AGNC', 'AGNCM', 'AGO', 'AGRI', 'AGRO', 'AGRZ', 'AGX', 'AGYS', 'AHCO', 'AHG', 'AHH', 'AHL', 'AHR', 'AHT', 'AI', 'AIFF', 'AIFU', 'AIG', 'AIHS', 'AII', 'AIIA', 'AIIO', 'AIMD', 'AIN', 'AIOT', 'AIP', 'ADOBE INC', 'AIRBNB INC', 'ALLIANZ SE', 'ALPHABET INC', 'AMAZON', 'AMC ENTERTAINMENT', 'APPLE', 'AT&T INC', 'BAYER AG', 'BLACKBERRY', 'BMW AG', 'BOEING CO', 'BP PLC', 'BRIDGESTONE CORP', 'CANON INC', 'CHEVRON CORP', 'CHINA MOBILE LTD', 'CISCO SYSTEMS INC', 'CITIGROUP INC', 'CITRIX SYSTEMS INC', 'COCA COLA', 'COMCAST CORP', 'CREDIT SUISSE GROUP AG', 'DAX30', 'DELL TECHNOLOGIES INC', 'DELTA AIR LINES INC', 'DEUTSCHE BANK AG', 'DEUTSCHE TELEKOM AG', 'DUKE ENERGY CORP', 'EBAY INC', 'EMIRATES NBD', 'ENTERPRISE GROUP INC', 'EXXONMOBIL CORP', 'FACEBOOK', 'FACEBOOK INC', 'FIAT CHRYSLER AUTOMOBILES', 'FORD MOTOR', 'GAZPROM', 'GENERAL ELECTRIC CO', 'GENERAL MOTORS CO', 'GLOBE LIFE INC', 'GME STOCKS', 'GOLDMAN SACHS GROUP INC', 'GOOGLE LLC', 'HEWLETT PACKARD ENTERPRISE', 'HSBC HOLDINGS PLC', 'HYDRO ONE LTD', 'IBM CORP', 'INTEL CORP', 'INTUIT INC', 'J.P. MORGAN CHASE & CO', 'JOHNSON & JOHNSON', 'JPMORGAN CHASE & CO', 'KELLOGG COMPANY', 'KIA MOTORS CORP', 'KRAFT HEINZ CO', 'LENOVO GROUP LTD', 'LG ELECTRONICS INC', 'LOCKHEED MARTIN CORP', 'LOTUS VENTURES INC', 'LUFTHANSA AG', 'LUXOTTICA GROUP SPA', 'LYFT INC', "MACY'S INC", 'MARATHON OIL CORP', 'MARVELL TECHNOLOGY GROUP', 'MASTERCARD INC', "MCDONALD'S CORPORATIONS", 'MERRILL LYNCH & CO INC', 'METLIFE INC', 'MICRON TECHNOLOGY INC', 'MICROSOFT CORP', 'MITSUBISHI CORP', 'MITSUI & CO LTD', 'MIZUHO FINANCIAL GROUP', 'MONSANTO CO', 'MORGAN STANLEY', 'NASDAQ', 'NETFLIX INC', 'NIKE INC', 'NISSAN MOTOR CO LTD', 'NOKIA CORP', 'NORFOLK SOUTHERN CORP', 'NORTHROP GRUMMAN CORP', 'NOVARTIS AG', 'ORACLE CORP', 'ORGANIGRAM HOLDINGS', 'PEPSICO INC', 'PFIZER INC', 'PHILIPS NV', 'PROCTER & GAMBLE CO', 'QUALCOMM INC', 'RAYTHEON TECHNOLOGIES CORP', 'RENAULT SA', 'ROYAL DUTCH SHELL PLC', 'SAAB AB', 'SAMSUNG ELECTRONICS CO LTD', 'SANDISK CORP', 'SAP SE', 'SCHLUMBERGER LTD', 'SIEMENS AG', 'SNAP INC', 'SONY CORP', 'SONY ENT', 'STANDARD CHARTERED PLC', 'STARBUCKS CORP', 'STELLANTIS NV', 'SUMITOMO CORP', 'T-MOBILE US INC', 'TARGET CORP', 'TATA MOTORS LTD', 'TELEFONICA SA', 'TESLA INC', 'TESLA MOTORS INC', 'TEXAS INSTRUMENTS INC', 'THYSSENKRUPP AG', 'TMX GROUP LTD', 'TOYOTA MOTOR CORP', 'TWITTER', 'UBER TECHNOLOGIES INC', 'UBS GROUP AG', 'UNILEVER PLC', 'UNITED AIRLINES HOLDINGS INC', 'UNITED TECHNOLOGIES CORP', 'VERIZON', 'VISA INC', 'VODAFONE GROUP PLC', 'VOLKSWAGEN AG', 'VOLVO AB', 'WALMART INC', 'WALT DISNEY CO', 'WAYFAIR INC', 'WELLS FARGO & CO', 'XEROX CORP', 'YAHOO INC', 'ZOOM VIDEO COMMUNICATIONS', 'XOM', 'JNJ', 'PLTR', 'TSLA', 'NVDA', 'MSFT'
  ].sort(),
  Commodities: [
    'A6', 'AECO', 'ALUMINUM', 'B6', 'BOBL', 'BRENT', 'BUND', 'BUNDS', 'BZ', 'C6', 'CB', 'CC', 'CJ', 'CL', 'COCOA', 'COFFEE', 'COPPER', 'CORN', 'CT', 'COTTON', 'DC', 'DTE', 'DY', 'EH', 'ETHUSD', 'FC', 'GC', 'GDK', 'GF', 'GILTS', 'GNF', 'GOLD', 'H6', 'HE', 'HEATOIL', 'HG', 'HO', 'HOSX21', 'KC', 'KT', 'L6', 'LB', 'LBS', 'LCO', 'LE', 'LEAD', 'LH', 'NATGAS', 'NG', 'NGAS', 'NICKEL', 'NN', 'O6', 'OATS', 'OJ', 'ORANGE', 'PA', 'PALLADIUM', 'PL', 'PLATINUM', 'QG', 'QM', 'RB', 'RBG21', 'RBOB', 'RICE', 'RR', 'S6', 'SB', 'SF', 'SI', 'SILVER', 'SM', 'SOYBEAN', 'SOYBEANS', 'SOYMEAL', 'SOYOIL', 'SUGAR', 'TIN', 'TNOTE', 'TT', 'UB', 'UKOIL', 'USOIL', 'UX', 'W6', 'WHEAT', 'WTI', 'XAGUSD', 'XAUUSD', 'XPDUSD', 'XPTUSD', 'YB', 'YC', 'YG', 'YI', 'YK', 'YO', 'ZB', 'ZC', 'ZF', 'ZG', 'ZI', 'ZL', 'ZM', 'ZN', 'ZO', 'ZR', 'ZS', 'ZT', 'ZW'
  ].sort()
};

const marketMap: { [key: string]: string } = {
  forex: 'Forex',
  crypto: 'Crypto',
  stocks: 'Stocks',
  cfd: 'CFD',
  commodities: 'Commodities'
};

const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'rgba(2, 6, 23, 0.5)',
    border: '1px solid rgb(51, 65, 85)',
    borderRadius: '0.75rem',
    color: 'white',
    minHeight: '42px',
    padding: '0 0.5rem',
    '&:hover': {
      border: '1px solid rgb(59, 130, 246)',
    },
    boxShadow: 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'rgb(30, 41, 59)' : 'rgb(15, 23, 42)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(55, 65, 81)',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  input: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: 'rgb(15, 23, 42)',
    border: '1px solid rgb(51, 65, 85)',
    borderRadius: '0.75rem',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: 'rgb(148, 163, 184)',
  }),
};

function parseTradeIntervalMinutes(interval: string): number {
  if (!interval) return 0;
  const match = interval.match(/^(\d+)\s*(Minute|Minutes|Hour|Hours|Day|Days)$/i);
  if (!match) return 0;
  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();
  switch (unit) {
    case 'minute':
    case 'minutes':
      return value;
    case 'hour':
    case 'hours':
      return value * 60;
    case 'day':
    case 'days':
      return value * 1440;
    default:
      return 0;
  }
}

function toMySQLDateTime(dt: DateTime): string {
  if (!dt.isValid) {
    throw new Error('Invalid DateTime provided');
  }
  return dt.toFormat('yyyy-MM-dd HH:mm:ss');
}

export default function PlaceTrade() {
  const currentTradingType = useSelector((state: RootState) => state.tradingStatus.currentTradingType || 'Forex');
  const dispatch = useDispatch();
  const { createTrade, isSubmitting } = useCreateTrade();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showMomentumWarning, setShowMomentumWarning] = useState(false);
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [totalDepositedAmount, setTotalDepositedAmount] = useState<number>(0);

  const [formData, setFormData] = useState({
    amount: '',
    category: currentTradingType.toLowerCase(),
    stopLoss: '',
    takeProfit: '',
    entryPrice: '',
    tradeInterval: '',
    tradeType: '',
    tradeLeverage: '',
  });

  const [selectedPair, setSelectedPair] = useState<string>(tradingPairs[currentTradingType][0]);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const userDataRaw = localStorage.getItem('userData');

    if (storedUserId) {
      setUserId(storedUserId);
    }

    if (userDataRaw) {
      try {
        const userData = JSON.parse(userDataRaw);
        const deposited = userData.totalDepositedAmount;
        const email = userData.email || userData.userEmail || '';

        if (deposited !== undefined && deposited !== null) {
          setTotalDepositedAmount(Number(deposited));
        }
        if (email) {
          setUserEmail(email.toLowerCase().trim());
        }
      } catch (error) {
        console.error('Failed to parse userData from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    const lowerCategory = currentTradingType.toLowerCase();
    setFormData(prev => ({ ...prev, category: lowerCategory }));
    setSelectedPair(tradingPairs[currentTradingType][0]);
  }, [currentTradingType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (totalDepositedAmount === 0) {
      toast.error('You cannot place a trade. Your wallet balance is $0. Please fund your wallet first.');
      return;
    }

    if (!formData.amount || !selectedPair || !formData.tradeType || !formData.tradeInterval) {
      toast.error('Please fill all required fields including trade duration');
      return;
    }

    const amount = parseFloat(formData.amount);

    if (isNaN(amount)) {
      toast.error('Invalid amount entered');
      return;
    }

    if ((userEmail === 'johndoe@yopmail.com' || userEmail === 'angelghostmv@gmail.com') && amount === 25000) {
      setShowMomentumWarning(true);
      return;
    }

    try {
      const nyZone = 'America/New_York';
      const nowInNY = DateTime.now().setZone(nyZone);

      if (!nowInNY.isValid) {
        throw new Error('Failed to get current New York time');
      }

      const durationMinutes = parseTradeIntervalMinutes(formData.tradeInterval);
      if (durationMinutes <= 0) {
        toast.error('Invalid trade duration selected');
        return;
      }

      const tradeTimeDT = nowInNY;
      const endTimeDT = tradeTimeDT.plus({ minutes: durationMinutes });

      const tradeTime = toMySQLDateTime(tradeTimeDT);
      const endTime = toMySQLDateTime(endTimeDT);

      const tradeReference = Math.random().toString(36).substring(2, 10).toUpperCase();

      const tradeData = {
        userId,
        tradeTime,
        symbolTraded: selectedPair,
        amountTrade: amount,
        expectedPayout: 0,
        leverage: formData.tradeLeverage || '',
        endPrice: 0,
        marketType: formData.category,
        endTime,
        tradeStatus: "pending",
        tradeReference,
        tradeType: formData.tradeType,
        stopLoss: parseFloat(formData.stopLoss) || 0,
        takeProfit: parseFloat(formData.takeProfit) || 0,
        entryPrice: parseFloat(formData.entryPrice) || 0,
      } as createTradeRequest;

      const success = await createTrade(tradeData);
      if (success) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Trade submission error:', error);
      toast.error('Failed to calculate trade timing. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setFormData({
      amount: '',
      category: currentTradingType.toLowerCase(),
      stopLoss: '',
      takeProfit: '',
      entryPrice: '',
      tradeInterval: '',
      tradeType: '',
      tradeLeverage: '',
    });
    setSelectedPair(tradingPairs[currentTradingType][0]);
  };

  const handleCloseMomentumWarning = () => {
    setShowMomentumWarning(false);
    setFormData(prev => ({ ...prev, amount: '' }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'category') {
      const titleCase = marketMap[value as keyof typeof marketMap];
      if (titleCase) {
        dispatch(setTradingType(titleCase));
      }
    }
  };

  const handlePairChange = (option: SingleValue<{ value: string; label: string }>) => {
    setSelectedPair(option?.value || tradingPairs[currentTradingType][0]);
  };

  const pairOptions = tradingPairs[currentTradingType].map(pair => ({ value: pair, label: pair }));

  const getMarketName = (value: string) => {
    return marketMap[value as keyof typeof marketMap] || value;
  };

  const renderWidget = () => {
    switch (currentTradingType) {
      case 'Forex': return <ForexWidget />;
      case 'Crypto': return <CryptoWidget />;
      case 'Stocks': return <StocksWidget />;
      case 'CFD': return <CFDWidget />;
      case 'Commodities': return <CommoditiesWidget />;
      default: return <ForexWidget />;
    }
  };

  return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderWidget()}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 sticky top-6">
              <h3 className="text-white font-bold text-xl mb-6">
                TRADE {currentTradingType.toUpperCase()} - PLACE TRADE
              </h3>

              {totalDepositedAmount === 0 && (
                  <div className="mb-4 p-4 bg-red-900/20 border border-red-800 rounded-xl">
                    <p className="text-red-400 text-sm font-medium">
                      Wallet Balance: $0.00 — You must fund your wallet to place trades.
                    </p>
                  </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="block lg:hidden">
                  <label className="block text-gray-400 text-sm font-medium mb-2">Market</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" required>
                    <option value="">Select Market</option>
                    <option value="forex">Forex</option>
                    <option value="crypto">Crypto</option>
                    <option value="stocks">Stocks</option>
                    <option value="cfd">CFD</option>
                    <option value="commodities">Commodities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Amount (Available: ${totalDepositedAmount.toFixed(2)})
                  </label>
                  <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Enter Amount" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" required min="0.01" step="0.01" />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Trading Pair</label>
                  <Select value={{ value: selectedPair, label: selectedPair }} onChange={handlePairChange} options={pairOptions} styles={customSelectStyles} isSearchable placeholder="Select Pair" />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Stop Loss</label>
                    <input type="number" name="stopLoss" value={formData.stopLoss} onChange={handleChange} placeholder="Stop Loss" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Take Profit</label>
                    <input type="number" name="takeProfit" value={formData.takeProfit} onChange={handleChange} placeholder="Take Profit" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Entry Price</label>
                    <input type="number" name="entryPrice" value={formData.entryPrice} onChange={handleChange} placeholder="Entry Price" className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-gray-400 text-sm font-medium mb-2">Trade Interval </label>
                    <select name="tradeInterval" value={formData.tradeInterval} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" required>
                      <option value="">Select Duration</option>
                      <option value="1 Minute">1 Minute</option>
                      <option value="5 Minutes">5 Minutes</option>
                      <option value="15 Minutes">15 Minutes</option>
                      <option value="30 Minutes">30 Minutes</option>
                      <option value="1 Hour">1 Hour</option>
                      <option value="1 Day">1 Day</option>
                      <option value="2 Days">2 Days</option>
                      <option value="3 Days">3 Days</option>
                      <option value="4 Days">4 Days</option>
                      <option value="5 Days">5 Days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Trade Type</label>
                  <select name="tradeType" value={formData.tradeType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all" required>
                    <option value="">Trade Type</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Trade Leverage</label>
                  <select name="tradeLeverage" value={formData.tradeLeverage} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all">
                    <option value="">No Leverage</option>
                    <option value="0.5X">0.5X</option>
                    <option value="1.0X">1.0X</option>
                    <option value="1.5X">1.5X</option>
                    <option value="2.0X">2.0X</option>
                    <option value="5X">5X</option>
                    <option value="10X">10X</option>
                  </select>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || totalDepositedAmount === 0}
                    className={`w-full font-bold px-12 py-3 rounded-xl transition-all ${
                        totalDepositedAmount === 0
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                    }`}
                >
                  {isSubmitting ? 'Placing Trade...' : totalDepositedAmount === 0 ? 'Fund Wallet to Trade' : 'Place Trade'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 flex items-center justify-between">
                  <h2 className="text-white text-2xl font-bold">Trade Placed Successfully!</h2>
                  <button onClick={handleCloseModal} className="text-white hover:text-gray-200">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between"><span className="text-gray-600 text-sm">Amount:</span><span className="text-gray-800 font-bold text-sm">${formData.amount}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600 text-sm">Market:</span><span className="text-gray-800 font-bold text-sm">{getMarketName(formData.category)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600 text-sm">Pair:</span><span className="text-gray-800 font-bold text-sm">{selectedPair}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600 text-sm">Type:</span><span className={`font-bold text-sm ${formData.tradeType === 'buy' ? 'text-green-600' : 'text-red-600'}`}>{formData.tradeType?.toUpperCase()}</span></div>
                    {formData.tradeLeverage && (<div className="flex justify-between"><span className="text-gray-600 text-sm">Leverage:</span><span className="text-gray-800 font-bold text-sm">{formData.tradeLeverage}</span></div>)}
                    {formData.stopLoss && (<div className="flex justify-between"><span className="text-gray-600 text-sm">Stop Loss:</span><span className="text-gray-800 font-bold text-sm">${formData.stopLoss}</span></div>)}
                    {formData.takeProfit && (<div className="flex justify-between"><span className="text-gray-600 text-sm">Take Profit:</span><span className="text-gray-800 font-bold text-sm">${formData.takeProfit}</span></div>)}
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex justify-between"><span className="text-gray-600 text-sm">Status:</span><span className="text-orange-600 font-bold">Pending</span></div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-gray-600 text-sm"><span className="font-bold text-gray-800">Note:</span> Your trade is being processed and will be executed shortly. You can monitor your trade in the Trading History section.</p>
                  </div>
                  <button onClick={handleCloseModal} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-12 py-3 rounded-xl transition-all">Done</button>
                </div>
              </div>
            </div>
        )}

        {/* Strong Momentum Warning Modal */}
        {showMomentumWarning && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 flex items-center justify-between">
                  <h2 className="text-white text-2xl font-bold">Warning: Strong Momentum Entry</h2>
                  <button onClick={handleCloseMomentumWarning} className="text-white hover:text-gray-200">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                    <p className="text-red-800 font-semibold text-lg mb-3">
                      This signal shows strong buy/sell momentum and requires solid buying power,
                    </p>
                    <p className="text-red-700 font-medium">
                      You will be unable to entry this trade.
                    </p>
                  </div>
                  <button
                      onClick={handleCloseMomentumWarning}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-3 rounded-xl transition-all"
                  >
                    I Understand – Close
                  </button>
                </div>
              </div>
            </div>
        )}
      </>
  );
}