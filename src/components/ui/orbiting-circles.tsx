import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  orbitColor?: string
  orbitOpacity?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  orbitColor = "blue",
  orbitOpacity = 0.3,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  
  // Definir cores baseadas no tema
  const getOrbitStyle = () => {
    const colorMap = {
      blue: "#3B82F6",
      emerald: "#10B981",
      slate: "#64748B",
      indigo: "#6366F1"
    };
    
    const color = colorMap[orbitColor as keyof typeof colorMap] || colorMap.blue;
    return {
      stroke: color,
      strokeOpacity: orbitOpacity,
      strokeWidth: 1.5
    };
  };

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            style={getOrbitStyle()}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
