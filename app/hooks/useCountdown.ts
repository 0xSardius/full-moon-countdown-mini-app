import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(
    differenceInSeconds(targetDate, new Date())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = differenceInSeconds(targetDate, new Date());
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return { days, hours, minutes, seconds };
}
