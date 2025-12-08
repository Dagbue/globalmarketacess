import { sub } from "date-fns";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

export const formatAmount = (amount: number | undefined) => {
  if (!amount) {
    return "0.00";
  }
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return formattedAmount;
};

export function capitalizeFirstLetter(str: string) {
  if (!str || str.length <= 3) return str; // Handle empty strings
  const strArr = str.split(" ");

  if (strArr.length === 1) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  if (strArr.length > 1) {
    return strArr
        .map(
            (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        )
        .join(" ");
  }
}

export const truncateWithEllipsis = (str: string, limit: number) => {
  if (str && str.length <= limit) {
    return str;
  }
  return str?.substring(0, limit) + "..." || "";
};

export const formatNumber = (value: number | string) => {
  const rawValue = value?.toString().replace(/\D/g, ""); // Remove non-numeric characters
  return new Intl.NumberFormat().format(Number(rawValue)) || "";
};

export const unformatMoney = (value: string) => {
  return value.replace(/[^\d]/g, "");
};

export const calculateDays = () => {
  const today = new Date();
  const ninetyDaysBack = sub(today, { days: 90 });
  return ninetyDaysBack;
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp < now;
  } catch {
    return true;
  }
};

export function buildHeaders(
    input?: Record<string, any>
): Record<string, string | number | boolean> {
  const output: Record<string, string | number | boolean> = {};
  for (const key in input) {
    const value = input[key];
    if (value !== undefined && value !== null) {
      output[key] = value;
    }
  }
  return output;
}

export function formatDate(value: string | Date | null | undefined): string {
  if (!value) return "";
  return moment(value).format("MMM Do YYYY");
}

export function formatDate2(value: string | Date | null | undefined): string {
  if (!value) return "";
  return moment(value).format("YYYY MM DD HH:mm");
}