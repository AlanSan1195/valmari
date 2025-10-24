import conffeti from "canvas-confetti";

export function shootConfettiMobile() {
  conffeti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
export function shootConfetti() {
  conffeti({
    particleCount: 100,
    spread: 70,
    angle: 60,
    origin: { x: 0, y: 1 },
  });
  conffeti({
    particleCount: 100,
    spread: 70,
    angle: 120,
    origin: { x: 1, y: 1 },
  });
}

// pnpm install canvas-confetti
// then
// pnpm  install @types/canvas-confetti
