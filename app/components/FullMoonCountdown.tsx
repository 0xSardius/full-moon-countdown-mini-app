"use client";

import { useState, useEffect } from "react";
import { getNextFullMoon, FullMoonData } from "../utils/moonData";
import { useCountdown } from "../hooks/useCountdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon } from "lucide-react";

export default function FullMoonCountdown() {
  const [nextFullMoon, setNextFullMoon] = useState<FullMoonData | null>(null);

  useEffect(() => {
    setNextFullMoon(getNextFullMoon());
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(
    nextFullMoon?.date || new Date()
  );

  if (!nextFullMoon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <Moon className="w-6 h-6" />
            Next Full Moon Countdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <p className="text-lg text-white/80">
              The next full moon in 2025 will be in the sign of
            </p>
            <p className="text-3xl font-bold text-white mt-2">
              {nextFullMoon.zodiacSign}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 mt-6">
            Full moon on: {nextFullMoon.date.toLocaleString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
