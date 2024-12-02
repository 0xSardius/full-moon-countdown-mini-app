import { parseISO } from "date-fns";

export interface FullMoonData {
  date: Date;
  zodiacSign: string;
}

export const fullMoons: FullMoonData[] = [
  { date: parseISO("2025-01-13T22:27:00Z"), zodiacSign: "Cancer" },
  { date: parseISO("2025-02-12T13:54:00Z"), zodiacSign: "Leo" },
  { date: parseISO("2025-03-14T06:55:00Z"), zodiacSign: "Virgo" },
  { date: parseISO("2025-04-13T00:22:00Z"), zodiacSign: "Libra" },
  { date: parseISO("2025-05-12T16:56:00Z"), zodiacSign: "Scorpio" },
  { date: parseISO("2025-06-11T07:43:00Z"), zodiacSign: "Sagittarius" },
  { date: parseISO("2025-07-10T20:38:00Z"), zodiacSign: "Capricorn" },
  { date: parseISO("2025-08-09T07:56:00Z"), zodiacSign: "Aquarius" },
  { date: parseISO("2025-09-07T18:00:00Z"), zodiacSign: "Pisces" },
  { date: parseISO("2025-10-07T03:48:00Z"), zodiacSign: "Aries" },
  { date: parseISO("2025-11-05T13:19:00Z"), zodiacSign: "Taurus" },
  { date: parseISO("2025-12-04T22:15:00Z"), zodiacSign: "Gemini" },
];

export function getNextFullMoon(from: Date = new Date()): FullMoonData | null {
  return fullMoons.find((moon) => moon.date > from) || null;
}
