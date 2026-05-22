"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import Grainient from "@/components/Grainient";

const LIGHT_COLORS = {
  color1: "#EDE9FE", // violet-100
  color2: "#C4B5FD", // violet-300
  color3: "#FDF2F8", // pink-50
};

const DARK_COLORS = {
  // Mostly near-black with a restrained indigo hint up top.
  color1: "#0B0A18", // near-black with a violet undertone
  color2: "#312E81", // indigo-900 — the only "color" accent
  color3: "#050410", // deeper near-black
};

function detectWebGL2(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("webgl2");
  } catch {
    return false;
  }
}

// Client-only check via useSyncExternalStore: returns false on the server
// (matching the SSR fallback) and the real value after hydration, without
// the setState-in-effect pattern.
const subscribe = () => () => {};
function useHasWebGL2(): boolean {
  return React.useSyncExternalStore(
    subscribe,
    detectWebGL2,
    () => false
  );
}

function cssFallback(isDark: boolean): React.CSSProperties {
  return isDark
    ? {
        background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${DARK_COLORS.color2}66, transparent 65%), linear-gradient(180deg, ${DARK_COLORS.color1}, ${DARK_COLORS.color3})`,
      }
    : {
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${LIGHT_COLORS.color2}80, transparent 70%), linear-gradient(135deg, ${LIGHT_COLORS.color1}, ${LIGHT_COLORS.color3})`,
      };
}

export function HeroBackground() {
  const { resolvedTheme } = useTheme();
  const hasWebGL2 = useHasWebGL2();

  const isDark = resolvedTheme === "dark";
  const palette = isDark ? DARK_COLORS : LIGHT_COLORS;

  if (!hasWebGL2) {
    return <div className="h-full w-full" style={cssFallback(isDark)} />;
  }

  return (
    <Grainient
      {...palette}
      timeSpeed={0.15}
      warpStrength={1.1}
      warpFrequency={4.5}
      warpAmplitude={60}
      blendAngle={isDark ? 90 : 20}
      blendSoftness={isDark ? 0.18 : 0.12}
      rotationAmount={420}
      grainAmount={0.07}
      grainScale={2.4}
      grainAnimated={false}
      contrast={isDark ? 1.05 : 1.2}
      gamma={1.0}
      saturation={isDark ? 0.85 : 1.0}
      zoom={0.9}
      className="h-full w-full"
    />
  );
}
