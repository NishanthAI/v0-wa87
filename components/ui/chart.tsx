"use client"

import type * as React from "react"
import {
  type Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend as RechartsLegend,
  Line,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  ResponsiveContainer,
  Scatter,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"

// Chart container
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ChartContainer({ children, className, ...props }: ChartContainerProps) {
  return (
    <div className={cn("h-full w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

// Chart
interface ChartProps {
  data: any[]
  children: React.ReactNode
  className?: string
}

export function Chart({ data, children, className }: ChartProps) {
  return (
    <ComposedChart data={data} className={cn("", className)}>
      {children}
    </ComposedChart>
  )
}

// Chart title
interface ChartTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function ChartTitle({ children, className, ...props }: ChartTitleProps) {
  return (
    <h4 className={cn("text-sm font-medium text-center mb-4", className)} {...props}>
      {children}
    </h4>
  )
}

// Chart legend
interface ChartLegendProps extends React.ComponentProps<typeof RechartsLegend> {}

export function ChartLegend({ ...props }: ChartLegendProps) {
  return <RechartsLegend verticalAlign="top" height={40} {...props} />
}

// Chart tooltip
interface ChartTooltipProps extends React.ComponentProps<typeof RechartsTooltip> {}

export function ChartTooltip({ ...props }: ChartTooltipProps) {
  return <RechartsTooltip {...props} />
}

// Chart tooltip content
interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartTooltipContent({ className, ...props }: ChartTooltipContentProps) {
  return (
    <div
      className={cn(
        "border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
      {...props}
    />
  )
}

// Chart area
interface ChartAreaProps extends React.ComponentProps<typeof Area> {}

export function ChartArea({ className, ...props }: ChartAreaProps) {
  return <CartesianGrid strokeDasharray="3 3" />
}

// Chart line
interface ChartLineProps extends React.ComponentProps<typeof Line> {}

export function ChartLine({ className, ...props }: ChartLineProps) {
  return <Line type="monotone" {...props} />
}

// Chart bar
interface ChartBarProps extends React.ComponentProps<typeof Bar> {}

export function ChartBar({ className, ...props }: ChartBarProps) {
  return <Bar {...props} />
}

// Chart X axis
interface ChartXAxisProps extends React.ComponentProps<typeof XAxis> {}

export function ChartXAxis({ className, ...props }: ChartXAxisProps) {
  return <XAxis {...props} />
}

// Chart Y axis
interface ChartYAxisProps extends React.ComponentProps<typeof YAxis> {}

export function ChartYAxis({ className, ...props }: ChartYAxisProps) {
  return <YAxis {...props} />
}

// Chart scatter
interface ChartScatterProps extends React.ComponentProps<typeof Scatter> {}

export function ChartScatter({ className, ...props }: ChartScatterProps) {
  return <Scatter {...props} />
}

// Chart pie
interface ChartPieProps extends React.ComponentProps<typeof Pie> {}

export function ChartPie({ className, ...props }: ChartPieProps) {
  return <Pie {...props} />
}

// Chart radar
interface ChartRadarProps extends React.ComponentProps<typeof Radar> {}

export function ChartRadar({ className, ...props }: ChartRadarProps) {
  return <Radar {...props} />
}

// Chart radial bar
interface ChartRadialBarProps extends React.ComponentProps<typeof RadialBar> {}

export function ChartRadialBar({ className, ...props }: ChartRadialBarProps) {
  return <RadialBar {...props} />
}

// Chart polar grid
interface ChartPolarGridProps extends React.ComponentProps<typeof PolarGrid> {}

export function ChartPolarGrid({ className, ...props }: ChartPolarGridProps) {
  return <PolarGrid {...props} />
}

// Chart polar angle axis
interface ChartPolarAngleAxisProps extends React.ComponentProps<typeof PolarAngleAxis> {}

export function ChartPolarAngleAxis({ className, ...props }: ChartPolarAngleAxisProps) {
  return <PolarAngleAxis {...props} />
}

// Chart polar radius axis
interface ChartPolarRadiusAxisProps extends React.ComponentProps<typeof PolarRadiusAxis> {}

export function ChartPolarRadiusAxis({ className, ...props }: ChartPolarRadiusAxisProps) {
  return <PolarRadiusAxis {...props} />
}

// Chart cell
interface ChartCellProps extends React.ComponentProps<typeof Cell> {}

export function ChartCell({ className, ...props }: ChartCellProps) {
  return <Cell {...props} />
}
