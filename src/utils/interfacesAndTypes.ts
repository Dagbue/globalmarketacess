export interface ErrorType {
  description?: string;
  message?: string;
  detail?: string;
  data?: string;
  result?: {
    message: string;
  };
}

export interface BaseResponse {
  responseCode: number,
  responseMessage: string,
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string | number;
  referralCode: string;
  frontId: string;
  backId: string;
  totalDepositedAmount: number;
  phoneNumber: string | number;
  totalWithdrawals: number;
  btcBalance: number;
  displayPicture: string;
  walletAddress: string | number;
  walletName: string;
  twoFactorAuthenticationCode: string;
  userStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  country: string;
  address: string;
  otp: number | null;
  realizedProfit: number;
  profit: number;
  loss: number;

  currentPlan: string | null;
  currency: string;
  creditScore: string;
  copyProfit: number;
  copiedTraders: string;
}

export type allUsersResponse = User[];

export interface loginRequest {
  email: string,
  password: string,
}

export interface loginResponse {
  responseCode: string,
  responseMessage: string,
  user: User
}

export interface createUserRequest {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  referralCode: string,
  frontId: string,
  backId: string,
  totalDepositedAmount: number,
  phoneNumber: number,
  totalWithdrawals: number,
  btcBalance: number,
  realizedProfit: number,
  profit: number,
  loss: number,
  displayPicture: string,
  walletAddress: string,
  walletName: string,
  twoFactorAuthenticationCode: string,
  userStatus: string,
  role: string,
  country: string,
  address: string
  otp: number | null;

  currentPlan: string | null;
  currency: string | "USD";
  creditScore: string;
  copyProfit: number;
  copiedTraders: string;
}

export interface updateUserRequest {
  userId: string;
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  referralCode: string,
  frontId: string,
  backId: string,
  totalDepositedAmount: number,
  phoneNumber: number | string,
  totalWithdrawals: number,
  btcBalance: number,
  realizedProfit: number,
  profit: number,
  loss: number,
  displayPicture: string,
  walletAddress: string,
  walletName: string,
  twoFactorAuthenticationCode: string,
  userStatus: string,
  role: string,
  country: string,
  address: string
  otp: number | null;

  currentPlan: string | null;
  currency: string;
  creditScore: string;
  copyProfit: number;
  copiedTraders: string;
}

export interface deleteUserRequest {
  userId: string,
}

export interface resetPasswordRequest {
  email: string,
  newPassword: string
}

export interface readUserByIdRequest {
  userId: string,
}

export interface readUserByIdResponse {
  responseCode: number,
  responseMessage: string,
  user: User
}

export interface updateUserStatusRequest {
  userId: string;
  userStatus: string;
}

export interface resendOtpRequest {
  userId: string;
}

export interface createTradeRequest {
  userId: string,
  tradeTime: string,
  symbolTraded: string,
  amountTrade: number,
  expectedPayout: number,
  leverage: string,
  endPrice: number,
  marketType: string,
  endTime: string,
  tradeStatus: string,
  tradeReference: string,
  tradeType: string,
  stopLoss: number,
  takeProfit: number,
  entryPrice: number
}

export interface updateTradeRequest {
  userId : number | string,
  tradeId: number | string;
  tradeTime: string,
  symbolTraded: string,
  amountTrade: number,
  expectedPayout: number,
  leverage: string,
  endPrice: number,
  marketType: string,
  endTime: string,
  tradeStatus: string,
  tradeReference: string,
  tradeType: string,
  stopLoss: number | string,
  takeProfit: number | string,
  entryPrice: number
}

export interface deleteTradeRequest {
  tradeId: number | string;
}

export interface readTradeByIdRequest {
  tradeId: number | string;
}

export interface readTradeByIdResponse {
  responseCode: number,
  responseMessage: string,
  trade: {
    tradeId: number | string;
    userId: number;
    tradeTime: string,
    symbolTraded: string,
    amountTrade: number,
    expectedPayout: number,
    leverage: string,
    endPrice: number,
    marketType: string,
    endTime: string,
    tradeStatus: string,
    tradeReference: string,
    tradeType: string,
    stopLoss: number,
    takeProfit: number,
    entryPrice: number,
    createdAt: string,
    updatedAt: string,
    email: string;
    firstName: string;
    lastName: string;
  }
}

export interface readUserTradeRequest {
  userId : string,
}

export interface Trade {
  tradeId: number | string;
  userId: number;
  tradeTime: string,
  symbolTraded: string,
  amountTrade: number,
  expectedPayout: number,
  leverage: string,
  endPrice: number,
  marketType: string,
  endTime: string,
  tradeStatus: string,
  tradeReference: string,
  tradeType: string,
  stopLoss: number,
  takeProfit: number,
  entryPrice: number,
  email: string;
  firstName: string;
  lastName: string;
}

export interface readUserTradeResponse {
  responseCode: string;
  responseMessage: string;
  trades: Trade[];
}

export interface readAllTradeResponse {
  responseCode: number,
  responseMessage: string,
  trades: Trade[]
}

export interface updateTradeStatusRequest {
  tradeId: number | string;
  tradeStatus : string
}

export interface createDepositRequest {
  userId : string;
  amount : number;
  transactionMethod : string;
  transactionType : string;
  transactionReference : string;
  depositStatus : string;
  additionalComment : string | undefined;
}

export interface updateDepositRequest {
  depositId: number | string;
  userId : string;
  amount : number;
  transactionMethod : string;
  transactionType : string;
  transactionReference : string;
  depositStatus : string;
  additionalComment : string | undefined;
}

export interface deleteDepositRequest {
  depositId: number | string;
}

export interface readDepositByIdRequest {
  depositId: number | string;
}

export interface readDepositByIdResponse {
  responseCode: number,
  responseMessage: string,
  deposit: {
    depositId: number | string;
    userId: number;
    planId: number | string;
    amount: number;
    startDate: string;
    endDate: string;
    depositStatus: string;
    transactionMethod: string;
    transactionType: string;
    transactionReference: string;
    additionalComment: string;
    createdAt: string;
    updatedAt: string;
  }
}

export interface readUserDepositRequest {
  userId: string;
}

export interface updateDepositStatusRequest {
  depositId: number | string;
  depositStatus: string;
}

interface Deposit {
  depositId: number | string;
  userId: number;
  planId: number | string;
  amount: number;
  startDate: string;
  endDate: string;
  depositStatus: string;
  transactionMethod: string;
  transactionType: string;
  transactionReference: string;
  additionalComment: string;
  createdAt: string;
  updatedAt: string;
}

export interface readUserDepositResponse {
  responseCode: string,
  responseMessage: string,
  deposits: Deposit[]
}

export interface readAllDepositResponse {
  responseCode: number,
  responseMessage: string,
  deposits: Deposit[]
}

export interface createWithdrawalRequest {
  userId : string;
  amount : number;
  transactionMethod : string;
  transactionType : string;
  transactionReference : string;
  additionalComment : string;
  walletAddress : string;
}

export interface updateWithdrawalRequest {
  withdrawalId: number | string;
  userId : string;
  amount : number;
  transactionMethod : string;
  transactionType : string;
  transactionReference : string;
  additionalComment : string;
  withdrawalStatus: string;
}

export interface deleteWithdrawalRequest {
  withdrawalId: number | string;
}

export interface readWithdrawalByIdRequest {
  withdrawalId: number | string;
}

export interface readWithdrawalByIdResponse {
  responseCode: number,
  responseMessage: string,
  withdrawal: {
    withdrawalId: number | string;
    userId: number;
    amount: number;
    withdrawalStatus: string;
    transactionMethod: string;
    transactionType: string;
    transactionReference: string;
    walletAddress: string;
    createdAt: string;
    updatedAt: string;
  }
}

export interface readUserWithdrawalRequest {
  userId: string;
}

export interface updateWithdrawalStatusRequest {
  withdrawalId: number | string;
  withdrawalStatus: string;
}

export interface Withdrawal {
  withdrawalId: number | string;
  userId: number;
  amount: number;
  transactionMethod: string;
  transactionType: string;
  transactionReference: string;
  withdrawalStatus: string;
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface readUserWithdrawalResponse {
  responseCode: string,
  responseMessage: string,
  withdrawals: Withdrawal[]
}

export interface readAllWithdrawalResponse {
  responseCode: number,
  responseMessage: string,
  withdrawal: Withdrawal[]
}



export interface createPaymentWalletRequest {
  bitcoinAddress: string;
  ethereumAddress: string;
  UsdtERC20Address: string;
  UsdtTRC20Address: string;
  LitecoinAddress: string;
  DogecoinAddress: string;
  XRPAddress: string;
  bankName: string;
  accountNumber: string | number;
  routingNumber: string | number;
}

export interface updatePaymentWalletRequest {
  walletId: number | string;
  bitcoinAddress: string;
  ethereumAddress: string;
  UsdtERC20Address: string;
  UsdtTRC20Address: string;
  LitecoinAddress: string;
  DogecoinAddress: string;
  XRPAddress: string;
  bankName: string;
  accountNumber: string | number;
  routingNumber: string | number;
}

export interface deletePaymentWalletRequest {
  walletId: number | string;
}

export interface readPaymentWalletByIdRequest {
  walletId: number | string;
}

export interface readPaymentWalletByIdResponse {
  responseCode: number,
  responseMessage: string,
  paymentWallet: {
    walletId: number | string;
    userId: number | null;
    bitcoinAddress: string;
    ethereumAddress: string;
    UsdtERC20Address: string;
    UsdtTRC20Address: string;
    LitecoinAddress: string;
    DogecoinAddress: string;
    XRPAddress: string;
    bankName: string;
    accountNumber: string | number;
    routingNumber: string | number;
    createdAt: string;
    updatedAt: string;
  }
}

interface PaymentWallets {
  walletId: number | string;
  bitcoinAddress: string;
  ethereumAddress: string;
  UsdtERC20Address: string;
  UsdtTRC20Address: string;
  LitecoinAddress: string;
  DogecoinAddress: string;
  XRPAddress: string;
  bankName: string;
  accountNumber: string | number;
  routingNumber: string | number;
}

export interface readAllPaymentWalletResponse {
  responseCode: number,
  responseMessage: string,
  paymentWallets: PaymentWallets[]
}


export interface createLoanRequest {
  userId : string;
  amount : number;
  loanPlan : string;
  transactionReference : string;
  loanDepositMethod : string;
  loanAdditionalComment : string;
  loanPrepaymentFee : number;
  loanStatus : string;
  loanDuration: string;
}

export interface updateLoanRequest {
  loanId: number | string;
  userId : string;
  amount : number;
  loanPlan : string;
  transactionReference : string;
  loanDepositMethod : string;
  loanAdditionalComment : string;
  loanPrepaymentFee : number;
  loanStatus : string;
  loanDuration: string;
}

export interface deleteLoanRequest {
  loanId: number | string;
}

export interface readLoanByIdRequest {
  loanId: number | string;
}

export interface readLoanByIdResponse {
  responseCode: number,
  responseMessage: string,
  loan: {
    loanId: number | string;
    userId: number;
    amount: number;
    loanPlan: string;
    transactionReference: string;
    loanDepositMethod: string;
    loanAdditionalComment: string;
    loanPrepaymentFee: number;
    loanStatus: string;
    createdAt: string;
    updatedAt: string;
    loanDuration: string;
  }
}

export interface readUserLoanRequest {
  userId: string;
}

export interface updateLoanStatusRequest {
  loanId: number | string;
  loanStatus: string;
}

interface Loan {
  loanId: number | string;
  userId: number;
  amount: number;
  loanPlan: string;
  transactionReference: string;
  loanDepositMethod: string;
  loanAdditionalComment: string;
  loanPrepaymentFee: number;
  loanStatus: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  loanDuration: string;
}

export interface readUserLoanResponse {
  responseCode: string,
  responseMessage: string,
  loans: Loan[]
}

export interface readAllLoanResponse {
  responseCode: number,
  responseMessage: string,
  loan: Loan[]
}


export interface uploadBase64 {
  username: string | "banner_2347849392789_1662737051442";
  base64: string;
  region: "us-east-1";
  source: "qucoon";
  s3bucket: "apvertise-repo";
}


export interface uploadBase64Response {
  url: string;
  customerType: string;
  responseCode: string;
  responseMessage: string;
}

export interface createExpertRequest {
  userId: string;
  expertImage: string;
  expertName: string;
  expertWinRate: string | number;
  profitShare: string | number;
  wins: string | number;
  losses: string | number;
  expertStatus: string;
  copyDuration: string;
}

export interface updateExpertRequest {
  expertId: number | string;
  userId: string;
  expertImage: string;
  expertName: string;
  expertWinRate: string;
  profitShare: string;
  wins: string;
  losses: string;
  expertStatus: string;
  copyDuration: string;
}

export interface deleteExpertRequest {
  expertId: number | string;
}

export interface readExpertByIdRequest {
  expertId: number | string;
}

export interface readUserExpertRequest {
  userId: string;
}

export interface updateExpertStatusRequest {
  expertId: number | string;
  expertStatus: string;
}

export interface Expert {
  expertId: number | string;
  userId: string;
  expertImage: string;
  expertName: string;
  expertWinRate: string;
  profitShare: string;
  wins: string;
  losses: string;
  expertStatus: string;
  copyDuration: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface readAllExpertResponse {
  responseCode: string;
  responseMessage: string;
  experts: Expert[];
}

export interface readUserExpertResponse {
  responseCode: string;
  responseMessage: string;
  experts: Expert[];
}

export interface readExpertByIdResponse {
  responseCode: string;
  responseMessage: string;
  expert: {
    expertId: number | string;
    userId: string;
    expertImage: string;
    expertName: string;
    expertWinRate: string;
    profitShare: string;
    wins: string;
    losses: string;
    expertStatus: string;
    copyDuration: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}



export interface createTradeBotRequest {
  userId: string;
  botImage: string;
  botName: string;
  botWinRate: string;
  botPrice: number;
  botStatus: string;
  copyDuration: string;
}

export interface updateTradeBotRequest {
  botId: number | string;
  userId: string;
  botImage: string;
  botName: string;
  botWinRate: string;
  botPrice: number;
  botStatus: string;
  copyDuration: string;
}

export interface deleteTradeBotRequest {
  botId: number | string;
}

export interface readTradeBotByIdRequest {
  botId: number | string;
}

export interface readUserTradeBotRequest {
  userId: string;
}

export interface updateTradeBotStatusRequest {
  botId: number | string;
  botStatus: string;
}

export interface TradingBot {
  botId: number | string;
  userId: string;
  botImage: string;
  botName: string;
  botWinRate: string;
  botPrice: string;
  botStatus: string;
  copyDuration: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface readAllTradeBotResponse {
  responseCode: string;
  responseMessage: string;
  tradingBots: TradingBot[];
}

export interface readUserTradeBotResponse {
  responseCode: string;
  responseMessage: string;
  tradingBots: TradingBot[];
}

export interface readTradeBotByIdResponse {
  responseCode: string;
  responseMessage: string;
  bot: {
    botId: number | string;
    userId: string;
    botImage: string;
    botName: string;
    botWinRate: string;
    botPrice: string;
    botStatus: string;
    copyDuration: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}