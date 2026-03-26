"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type FamilyAtmosphereVariant =
  | "high-agency"
  | "editorial-typography"
  | "grid-product"
  | "immersive-premium"
  | "tactile-organic"
  | "experimental-loud";

type FamilyAtmosphereProps = {
  variant: FamilyAtmosphereVariant;
  className?: string;
};

type Palette = {
  bg: string;
  bgAlt: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accent2: string;
};

type PointerState = {
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  inside: boolean;
};

type Ripple = {
  x: number;
  y: number;
  startedAt: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

type RuntimeState = {
  width: number;
  height: number;
  pointer: PointerState;
  ripples: Ripple[];
  particles: Particle[];
};

const staticStyles: Record<FamilyAtmosphereVariant, CSSProperties> = {
  "high-agency": {
    background:
      "linear-gradient(135deg, color-mix(in srgb, var(--theme-accent) 16%, transparent) 0%, transparent 42%), linear-gradient(180deg, color-mix(in srgb, var(--theme-bg-alt) 52%, transparent) 0%, transparent 78%)",
  },
  "editorial-typography": {
    background:
      "radial-gradient(circle at 16% 18%, color-mix(in srgb, var(--theme-accent) 8%, transparent) 0, transparent 22%), linear-gradient(180deg, color-mix(in srgb, var(--theme-border) 26%, transparent) 0, transparent 100%)",
  },
  "grid-product": {
    background:
      "linear-gradient(180deg, color-mix(in srgb, var(--theme-bg-alt) 58%, transparent) 0%, transparent 78%), radial-gradient(circle at 84% 18%, color-mix(in srgb, var(--theme-accent-2) 12%, transparent) 0, transparent 22%)",
  },
  "immersive-premium": {
    background:
      "radial-gradient(circle at 22% 22%, color-mix(in srgb, var(--theme-accent-2) 24%, transparent) 0, transparent 26%), radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--theme-accent) 20%, transparent) 0, transparent 22%), linear-gradient(180deg, color-mix(in srgb, var(--theme-bg-alt) 54%, transparent) 0, transparent 84%)",
  },
  "tactile-organic": {
    background:
      "radial-gradient(circle at 20% 18%, color-mix(in srgb, var(--theme-accent) 14%, transparent) 0, transparent 24%), radial-gradient(circle at 82% 24%, color-mix(in srgb, var(--theme-accent-2) 14%, transparent) 0, transparent 24%), linear-gradient(180deg, color-mix(in srgb, var(--theme-bg-alt) 62%, transparent) 0, transparent 86%)",
  },
  "experimental-loud": {
    background:
      "linear-gradient(125deg, color-mix(in srgb, var(--theme-accent) 16%, transparent) 0%, transparent 36%), radial-gradient(circle at 78% 22%, color-mix(in srgb, var(--theme-accent-2) 18%, transparent) 0, transparent 24%)",
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function hash(seedX: number, seedY: number, seed = 0) {
  const value = Math.sin(seedX * 127.1 + seedY * 311.7 + seed * 74.7) * 43758.5453123;
  return value - Math.floor(value);
}

function readCssVariable(style: CSSStyleDeclaration, name: string, fallback: string) {
  const value = style.getPropertyValue(name).trim();
  return value || fallback;
}

function colorWithAlpha(color: string, alpha: number) {
  const value = color.trim();

  if (value.startsWith("#")) {
    const hex = value.slice(1);
    const normalized =
      hex.length === 3
        ? hex
            .split("")
            .map((char) => char + char)
            .join("")
        : hex;
    const red = Number.parseInt(normalized.slice(0, 2), 16);
    const green = Number.parseInt(normalized.slice(2, 4), 16);
    const blue = Number.parseInt(normalized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  if (value.startsWith("rgba(")) {
    const segments = value.slice(5, -1).split(",").slice(0, 3).map((part) => part.trim());
    return `rgba(${segments.join(", ")}, ${alpha})`;
  }

  if (value.startsWith("rgb(")) {
    return value.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
  }

  return value;
}

function readPalette(node: HTMLElement): Palette {
  const style = getComputedStyle(node);

  return {
    bg: readCssVariable(style, "--theme-bg", "#f6f1e8"),
    bgAlt: readCssVariable(style, "--theme-bg-alt", "#eadfce"),
    text: readCssVariable(style, "--theme-text", "#181412"),
    muted: readCssVariable(style, "--theme-muted", "#655b53"),
    border: readCssVariable(style, "--theme-border", "rgba(24, 20, 18, 0.12)"),
    accent: readCssVariable(style, "--theme-accent", "#c76434"),
    accent2: readCssVariable(style, "--theme-accent-2", "#23443d"),
  };
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function initializeParticles(width: number, height: number) {
  const area = width * height;
  const particleCount = clamp(Math.round(area / 12000), 36, 110);

  return Array.from({ length: particleCount }, (_, index) => ({
    x: hash(index, 1) * width,
    y: hash(index, 2) * height,
    vx: (hash(index, 3) - 0.5) * 0.18,
    vy: (hash(index, 4) - 0.5) * 0.18,
    radius: 10 + hash(index, 5) * 34,
    phase: hash(index, 6) * Math.PI * 2,
  }));
}

function drawHighAgency(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer } = state;
  const lineCount = 14;
  const tilt = 0.34;

  ctx.fillStyle = colorWithAlpha(palette.bgAlt, 0.12);
  ctx.fillRect(0, 0, width, height);

  for (let index = 0; index < lineCount; index += 1) {
    const progress = index / Math.max(lineCount - 1, 1);
    const baseX = -width * 0.22 + progress * width * 1.18;
    const drift = Math.sin(elapsed * 0.00045 + index * 0.6) * 28;

    ctx.beginPath();
    ctx.strokeStyle = colorWithAlpha(index % 3 === 0 ? palette.accent : palette.border, 0.18);
    ctx.lineWidth = index % 4 === 0 ? 1.8 : 1;
    ctx.moveTo(baseX + drift, -30);
    ctx.lineTo(baseX + drift + height * tilt, height + 30);
    ctx.stroke();

    for (let segment = 0; segment < 3; segment += 1) {
      const travel = ((elapsed * 0.00016 + progress * 1.3 + segment * 0.28) % 1 + 1) % 1;
      const y = -40 + travel * (height + 80);
      const x = baseX + drift + y * tilt;
      const influence =
        pointer.inside
          ? clamp(1 - Math.hypot(pointer.currentX - x, pointer.currentY - y) / 180, 0, 1)
          : 0;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tilt);
      ctx.fillStyle = colorWithAlpha(segment % 2 === 0 ? palette.accent : palette.text, 0.22 + influence * 0.36);
      drawRoundedRect(ctx, -26, -4, 52 + influence * 16, 8 + influence * 4, 5);
      ctx.fill();
      ctx.restore();
    }
  }
}

function drawEditorial(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer } = state;
  const columnSpacing = clamp(width / 10, 62, 104);
  const rowSpacing = clamp(height / 8, 36, 72);

  ctx.fillStyle = colorWithAlpha(palette.bg, 0.06);
  ctx.fillRect(0, 0, width, height);

  for (let x = columnSpacing * 0.6; x < width; x += columnSpacing) {
    ctx.beginPath();
    ctx.strokeStyle = colorWithAlpha(palette.border, 0.22);
    ctx.lineWidth = 1;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let row = 0; row < height + rowSpacing; row += rowSpacing) {
    for (let column = 0; column < width + columnSpacing; column += columnSpacing) {
      const jitterX = (hash(column, row, 1) - 0.5) * 16;
      const jitterY = (hash(column, row, 2) - 0.5) * 10;
      const dotX = column + jitterX;
      const dotY = row + jitterY;
      const pulse = 0.5 + Math.sin(elapsed * 0.00028 + hash(column, row, 3) * Math.PI * 2) * 0.5;
      const influence =
        pointer.inside
          ? clamp(1 - Math.hypot(pointer.currentX - dotX, pointer.currentY - dotY) / 120, 0, 1)
          : 0;

      ctx.beginPath();
      ctx.fillStyle = colorWithAlpha(
        hash(column, row, 4) > 0.86 ? palette.accent : palette.muted,
        0.08 + pulse * 0.12 + influence * 0.16,
      );
      ctx.arc(dotX, dotY, 1.1 + pulse * 0.7 + influence * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawGridProduct(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer, ripples } = state;
  const spacing = clamp(Math.min(width, height) / 12, 22, 34);

  ctx.fillStyle = colorWithAlpha(palette.bgAlt, 0.14);
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = colorWithAlpha(palette.border, 0.16);
  ctx.lineWidth = 1;
  for (let x = spacing * 0.5; x < width; x += spacing * 2) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = spacing * 0.5; y < height; y += spacing * 2) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  for (let x = spacing * 0.5; x < width; x += spacing) {
    for (let y = spacing * 0.5; y < height; y += spacing) {
      const pulse = 0.5 + Math.sin(elapsed * 0.0018 + hash(x, y, 2) * Math.PI * 2) * 0.5;
      const pointerInfluence =
        pointer.inside ? clamp(1 - Math.hypot(pointer.currentX - x, pointer.currentY - y) / 160, 0, 1) : 0;
      const rippleInfluence = ripples.reduce((total, ripple) => {
        const age = elapsed - ripple.startedAt;
        if (age < 0 || age > 1800) {
          return total;
        }
        const distance = Math.hypot(ripple.x - x, ripple.y - y);
        const radius = 20 + age * 0.22;
        const band = 22;
        if (Math.abs(distance - radius) > band) {
          return total;
        }
        return total + (1 - age / 1800) * (1 - Math.abs(distance - radius) / band);
      }, 0);

      const radius = 1.4 + pulse * 0.45 + pointerInfluence * 3.2 + rippleInfluence * 1.8;
      ctx.beginPath();
      ctx.fillStyle = colorWithAlpha(
        hash(x, y, 1) > 0.72 ? palette.accent2 : palette.accent,
        0.18 + pulse * 0.16 + pointerInfluence * 0.26 + rippleInfluence * 0.22,
      );
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawImmersive(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer } = state;
  const centerX = pointer.inside ? pointer.currentX : width * 0.68;
  const centerY = pointer.inside ? pointer.currentY : height * 0.42;

  const aura = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.42);
  aura.addColorStop(0, colorWithAlpha(palette.accent2, 0.32));
  aura.addColorStop(0.35, colorWithAlpha(palette.accent, 0.18));
  aura.addColorStop(1, colorWithAlpha(palette.bgAlt, 0));
  ctx.fillStyle = aura;
  ctx.fillRect(0, 0, width, height);

  const sideGlow = ctx.createRadialGradient(width * 0.2, height * 0.18, 0, width * 0.2, height * 0.18, width * 0.36);
  sideGlow.addColorStop(0, colorWithAlpha(palette.accent, 0.18));
  sideGlow.addColorStop(1, colorWithAlpha(palette.bgAlt, 0));
  ctx.fillStyle = sideGlow;
  ctx.fillRect(0, 0, width, height);

  for (let index = 0; index < 4; index += 1) {
    const radius = Math.min(width, height) * (0.18 + index * 0.08);
    const start = elapsed * 0.0002 + index * 0.8;
    const end = start + Math.PI * (0.8 + index * 0.05);
    ctx.beginPath();
    ctx.strokeStyle = colorWithAlpha(index % 2 === 0 ? palette.accent2 : palette.border, 0.12 + index * 0.03);
    ctx.lineWidth = 1.2;
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.stroke();
  }

  const halo = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 160);
  halo.addColorStop(0, colorWithAlpha("#ffffff", 0.28));
  halo.addColorStop(0.28, colorWithAlpha(palette.accent, 0.18));
  halo.addColorStop(1, colorWithAlpha(palette.bgAlt, 0));
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 160, 0, Math.PI * 2);
  ctx.fill();
}

function drawTactile(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer, particles } = state;

  ctx.fillStyle = colorWithAlpha(palette.bgAlt, 0.1);
  ctx.fillRect(0, 0, width, height);

  for (const particle of particles) {
    const influence =
      pointer.inside
        ? clamp(1 - Math.hypot(pointer.currentX - particle.x, pointer.currentY - particle.y) / 220, 0, 1)
        : 0;
    const drift = Math.sin(elapsed * 0.0007 + particle.phase) * 0.18;

    particle.vx += (hash(particle.phase, elapsed * 0.0001, 1) - 0.5) * 0.012 + drift * 0.01;
    particle.vy += (hash(particle.phase, elapsed * 0.0001, 2) - 0.5) * 0.012 - drift * 0.01;

    if (pointer.inside) {
      const dx = particle.x - pointer.currentX;
      const dy = particle.y - pointer.currentY;
      const distance = Math.max(Math.hypot(dx, dy), 1);
      particle.vx += (dx / distance) * influence * 0.022;
      particle.vy += (dy / distance) * influence * 0.022;
    }

    particle.vx *= 0.985;
    particle.vy *= 0.985;
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -40) particle.x = width + 40;
    if (particle.x > width + 40) particle.x = -40;
    if (particle.y < -40) particle.y = height + 40;
    if (particle.y > height + 40) particle.y = -40;

    const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius + influence * 26);
    glow.addColorStop(0, colorWithAlpha(hash(particle.phase, 0, 3) > 0.55 ? palette.accent : palette.accent2, 0.16 + influence * 0.08));
    glow.addColorStop(1, colorWithAlpha(palette.bgAlt, 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius + influence * 16, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawExperimental(
  ctx: CanvasRenderingContext2D,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  const { width, height, pointer } = state;
  const cell = clamp(Math.min(width, height) / 14, 18, 30);
  const glyphs = ["#", "01", "X", "//", "*", "[]"];

  ctx.fillStyle = colorWithAlpha(palette.bgAlt, 0.08);
  ctx.fillRect(0, 0, width, height);

  ctx.font = `${Math.max(11, cell * 0.42)}px var(--font-ibm-plex-mono), ui-monospace, monospace`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let x = cell * 0.6; x < width; x += cell) {
    for (let y = cell * 0.7; y < height; y += cell) {
      const noise = Math.sin(x * 0.025 + elapsed * 0.0018) * Math.cos(y * 0.022 - elapsed * 0.0014);
      const pointerInfluence =
        pointer.inside ? clamp(1 - Math.hypot(pointer.currentX - x, pointer.currentY - y) / 150, 0, 1) : 0;
      const energy = noise + (hash(x, y, 6) - 0.5) * 0.55 + pointerInfluence * 0.7;

      if (energy < 0.18) {
        continue;
      }

      const glyph = glyphs[Math.floor(hash(x, y, 7) * glyphs.length) % glyphs.length];
      ctx.fillStyle = colorWithAlpha(
        hash(x, y, 8) > 0.58 ? palette.accent : palette.text,
        0.1 + clamp(energy, 0, 1) * 0.28,
      );
      ctx.fillText(glyph, x + Math.sin(elapsed * 0.0016 + y * 0.02) * 3, y + Math.cos(elapsed * 0.0013 + x * 0.02) * 2);
    }
  }

  for (let index = 0; index < 5; index += 1) {
    const wobble = Math.sin(elapsed * 0.0007 + index * 1.4) * 24;
    const boxX = width * (0.12 + index * 0.16) + wobble;
    const boxY = height * (0.14 + (index % 2) * 0.22);
    ctx.save();
    ctx.translate(boxX, boxY);
    ctx.rotate((hash(index, 9) - 0.5) * 0.22);
    ctx.strokeStyle = colorWithAlpha(index % 2 === 0 ? palette.accent2 : palette.border, 0.26);
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, -32, -20, 64, 40, 10);
    ctx.stroke();
    ctx.restore();
  }
}

function drawVariant(
  ctx: CanvasRenderingContext2D,
  variant: FamilyAtmosphereVariant,
  state: RuntimeState,
  palette: Palette,
  elapsed: number,
) {
  switch (variant) {
    case "high-agency":
      drawHighAgency(ctx, state, palette, elapsed);
      return;
    case "editorial-typography":
      drawEditorial(ctx, state, palette, elapsed);
      return;
    case "grid-product":
      drawGridProduct(ctx, state, palette, elapsed);
      return;
    case "immersive-premium":
      drawImmersive(ctx, state, palette, elapsed);
      return;
    case "tactile-organic":
      drawTactile(ctx, state, palette, elapsed);
      return;
    case "experimental-loud":
      drawExperimental(ctx, state, palette, elapsed);
      return;
  }
}

export function FamilyAtmosphere({ variant, className = "" }: FamilyAtmosphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stateRef = useRef<RuntimeState>({
    width: 0,
    height: 0,
    pointer: {
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      inside: false,
    },
    ripples: [],
    particles: [],
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const coarseMedia = window.matchMedia("(pointer: coarse)");
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMedia = () => {
      setIsTouch(coarseMedia.matches);
      setReducedMotion(reducedMotionMedia.matches);
    };

    syncMedia();
    coarseMedia.addEventListener("change", syncMedia);
    reducedMotionMedia.addEventListener("change", syncMedia);

    return () => {
      coarseMedia.removeEventListener("change", syncMedia);
      reducedMotionMedia.removeEventListener("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || reducedMotion) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frameId = 0;
    const startTime = performance.now();
    const paletteRef = { current: readPalette(container) };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      stateRef.current.width = width;
      stateRef.current.height = height;
      stateRef.current.pointer.currentX = width * 0.64;
      stateRef.current.pointer.currentY = height * 0.4;
      stateRef.current.pointer.targetX = width * 0.64;
      stateRef.current.pointer.targetY = height * 0.4;
      stateRef.current.ripples = [];
      stateRef.current.particles =
        variant === "tactile-organic" ? initializeParticles(width, height) : [];
      paletteRef.current = readPalette(container);
    };

    const syncPointer = (clientX: number, clientY: number, createRipple = false) => {
      const rect = container.getBoundingClientRect();
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      const inside = localX >= 0 && localX <= rect.width && localY >= 0 && localY <= rect.height;
      const pointer = stateRef.current.pointer;

      pointer.inside = inside;

      if (!inside) {
        pointer.targetX = stateRef.current.width * 0.64;
        pointer.targetY = stateRef.current.height * 0.4;
        return;
      }

      pointer.targetX = localX;
      pointer.targetY = localY;

      if (createRipple && !isTouch) {
        stateRef.current.ripples.push({
          x: localX,
          y: localY,
          startedAt: performance.now() - startTime,
        });
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isTouch) {
        return;
      }
      syncPointer(event.clientX, event.clientY);
    };

    const handlePointerDown = (event: PointerEvent) => {
      syncPointer(event.clientX, event.clientY, true);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    const render = (now: number) => {
      const elapsed = now - startTime;
      const state = stateRef.current;
      const pointer = state.pointer;

      pointer.currentX += (pointer.targetX - pointer.currentX) * 0.12;
      pointer.currentY += (pointer.targetY - pointer.currentY) * 0.12;
      state.ripples = state.ripples.filter((ripple) => elapsed - ripple.startedAt < 1800);

      context.clearRect(0, 0, state.width, state.height);
      drawVariant(context, variant, state, paletteRef.current, elapsed);

      frameId = window.requestAnimationFrame(render);
    };

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isTouch, reducedMotion, variant]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0" style={staticStyles[variant]} />
      {reducedMotion ? null : (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />
      )}
    </div>
  );
}
