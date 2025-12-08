import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import useAllUsers from '../../hooks/auth/useAllUsers';
import useCreateTrade from '../../hooks/trade/useCreateTrade';
import type { User, createTradeRequest } from '../../utils/interfacesAndTypes';

const AddTrade: React.FC = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userId: '',
    tradeCategory: '',
    amount: '',
    tradingPair: '',
    tradeInterval: '',
    tradeType: '',
    tradeLeverage: '',
    stopLoss: '',
    takeProfit: '',
    entryPrice: ''
  });

  const [users, setUsers] = useState<User[]>([]);
  const [randomEndPrice, setRandomEndPrice] = useState<number>(0);

  const { fetchAllUsers, isSubmitting: isFetchingUsers } = useAllUsers();
  const { createTrade, isSubmitting: isCreatingTrade } = useCreateTrade();

  const tradeCategories = ['Forex', 'Crypto', 'Commodities', 'CFD', 'Stocks'];

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

  const tradeIntervals = ['1 Minute', '5 Minutes', '15 Minutes', '1 Hour', '4 Hours', '1 Day'];
  const tradeTypes = ['Buy', 'Sell'];
  const leverageOptions = ['0.5X', '1.0X', '1.5X', '2.0X', '5X', '10X'];

  const generateRandomEndPrice = () => {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomEndPrice(parseInt(result));
  };

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      if (fetchedUsers) setUsers(fetchedUsers);
    };
    loadUsers();
    generateRandomEndPrice();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'userEmail') {
      const selectedUser = users.find(user => user.email === value);
      setFormData(prev => ({
        ...prev,
        userEmail: value,
        userId: selectedUser ? selectedUser.userId.toString() : ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        ...(name === 'tradeCategory' ? { tradingPair: '' } : {})
      }));
    }
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const calculateEndTime = (interval: string): string => {
    const now = new Date();
    let minutesToAdd = 0;
    switch (interval) {
      case '1 Minute': minutesToAdd = 1; break;
      case '5 Minutes': minutesToAdd = 5; break;
      case '15 Minutes': minutesToAdd = 15; break;
      case '1 Hour': minutesToAdd = 60; break;
      case '4 Hours': minutesToAdd = 240; break;
      case '1 Day': minutesToAdd = 1440; break;
    }
    now.setMinutes(now.getMinutes() + minutesToAdd);
    return formatDate(now);
  };

  const generateTradeReference = (): string => {
    return 'TR-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.userId) {
      toast.error('Please select a valid user email');
      return;
    }

    const requiredFields = ['amount', 'tradingPair', 'tradeInterval', 'tradeType', 'tradeLeverage', 'stopLoss', 'takeProfit', 'entryPrice'];
    if (requiredFields.some(field => !formData[field as keyof typeof formData])) {
      toast.error('Please fill all required fields');
      return;
    }

    const tradeData: createTradeRequest = {
      userId: formData.userId,
      tradeTime: formatDate(new Date()),
      symbolTraded: formData.tradingPair,
      amountTrade: parseFloat(formData.amount) || 0,
      expectedPayout: 0,
      leverage: formData.tradeLeverage,
      endPrice: randomEndPrice,
      marketType: formData.tradeCategory,
      endTime: calculateEndTime(formData.tradeInterval),
      tradeStatus: 'pending',
      tradeReference: generateTradeReference(),
      tradeType: formData.tradeType,
      stopLoss: parseFloat(formData.stopLoss) || 0,
      takeProfit: parseFloat(formData.takeProfit) || 0,
      entryPrice: parseFloat(formData.entryPrice) || 0
    };

    const success = await createTrade(tradeData);

    if (success) {
      setFormData({
        userEmail: '',
        userId: '',
        tradeCategory: '',
        amount: '',
        tradingPair: '',
        tradeInterval: '',
        tradeType: '',
        tradeLeverage: '',
        stopLoss: '',
        takeProfit: '',
        entryPrice: ''
      });
      generateRandomEndPrice();
      toast.success('Trade created successfully!');
    }
  };

  const getCurrentPairs = () => formData.tradeCategory ? tradingPairs[formData.tradeCategory] || [] : [];

  return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[80vh] p-4">
          <div className="w-full max-w-4xl">
            <div className="bg-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">PLACE TRADE</h1>
                <p className="text-gray-300">Create a new trade for a user</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* User Email */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Select User Email</label>
                    <select
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleInputChange}
                        required
                        disabled={isFetchingUsers}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    >
                      <option value="">Select User Email</option>
                      {users.map(user => (
                          <option key={user.userId} value={user.email}>{user.email}</option>
                      ))}
                    </select>
                  </div>

                  {/* Trade Category */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Trade Category</label>
                    <select
                        name="tradeCategory"
                        value={formData.tradeCategory}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      {tradeCategories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Trading Pair */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Trading Pair</label>
                    <select
                        name="tradingPair"
                        value={formData.tradingPair}
                        onChange={handleInputChange}
                        required
                        disabled={!formData.tradeCategory}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    >
                      <option value="">Choose Pair</option>
                      {getCurrentPairs().map(pair => (
                          <option key={pair} value={pair}>{pair}</option>
                      ))}
                    </select>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="e.g. 1000"
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Trade Type */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Trade Type</label>
                    <select
                        name="tradeType"
                        value={formData.tradeType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Type</option>
                      {tradeTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Trade Leverage */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Leverage</label>
                    <select
                        name="tradeLeverage"
                        value={formData.tradeLeverage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Leverage</option>
                      {leverageOptions.map(lev => (
                          <option key={lev} value={lev}>{lev}</option>
                      ))}
                    </select>
                  </div>

                  {/* Trade Interval */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Trade Interval</label>
                    <select
                        name="tradeInterval"
                        value={formData.tradeInterval}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Interval</option>
                      {tradeIntervals.map(int => (
                          <option key={int} value={int}>{int}</option>
                      ))}
                    </select>
                  </div>

                  {/* Entry Price */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Entry Price</label>
                    <input
                        type="number"
                        name="entryPrice"
                        value={formData.entryPrice}
                        onChange={handleInputChange}
                        placeholder="e.g. 9.00"
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Stop Loss */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Stop Loss</label>
                    <input
                        type="number"
                        name="stopLoss"
                        value={formData.stopLoss}
                        onChange={handleInputChange}
                        placeholder="e.g. 8.50"
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Take Profit */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Take Profit</label>
                    <input
                        type="number"
                        name="takeProfit"
                        value={formData.takeProfit}
                        onChange={handleInputChange}
                        placeholder="e.g. 10.50"
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                    type="submit"
                    disabled={isCreatingTrade || isFetchingUsers}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isCreatingTrade ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                      'Place Trade'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
  );
};

export default AddTrade;