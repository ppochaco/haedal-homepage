import * as React from 'react'

import { cn } from '@/lib/utils'

const SuccessBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-center rounded-lg border p-4 text-sm bg-teal-50 text-teal-600 font-semibold',
      className,
    )}
    {...props}
  />
))
SuccessBox.displayName = 'SuccessBox'

const ErrorBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-center rounded-lg border p-4 text-sm bg-red-50 text-red-600 font-semibold',
      className,
    )}
    {...props}
  />
))
ErrorBox.displayName = 'ErrorBox'

export { SuccessBox, ErrorBox }
