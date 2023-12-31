import { format } from "date-fns";

/**
 * Date객체를 받아서 문자열 날짜로 return하는 함수
 * @param date 변경하고 싶은 Date객체
 * @returns 문자열 날짜
 */
export const dateFormatter = (date: Date, sep = "-") => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = new Date().getFullYear() - 2000;
    return `${year}${sep}${zeroTen(month)}${sep}${zeroTen(day)}`;
};

/**
 * 날짜 + 요일 조합으로 출력
 * @param date
 * @returns
 */
export const dateWeekFormatter = (date: Date, sep = "-") => {
    const week = date.getDay();
    const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
    return `${dateFormatter(date, sep)} ${weekArr[week]}요일`;
};

/**
 * react-calendar에서 각 달력마다 날짜를 출력하는 함수
 * 단순하게 숫자만 나오도록 한다
 * @param locale
 * @param date
 * @returns
 */
export const reactCalendarDayFormat = (
    locale: string | undefined,
    date: Date
) => {
    return `${date.getDate()}`;
};

/**
 * 자리수 2자리로 맞출때 사용
 * @param n
 * @returns
 */
export const zeroTen = (n: number) => {
    return n < 10 ? `0${n}` : `${n}`;
};

export const dateFormat = (date: Date, sep = "-"): string => {
    return format(date, `yyyy${sep}MM${sep}dd`);
};
export const dateFullFormat = (date: Date, sep = "-"): string => {
    return format(date, `yyyy${sep}MM${sep}dd HH:mm:ss`);
};
export const hhmmFormat = (date: Date, sep = ":"): string => {
    return format(date, `HH${sep}mm`);
};
