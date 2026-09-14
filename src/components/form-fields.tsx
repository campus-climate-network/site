'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

import { HONEYPOT_FIELD } from '@/lib/form-action'

// The form recipe from design.md → Forms, shared by the join form
// (take-action) and the member onboarding form so the two can't drift.

export const fieldClasses = 'flex flex-col gap-1.5'
export const labelClasses = 'text-sm font-semibold text-slate-900'
export const hintClasses = 'text-xs text-slate-500'
export const errorClasses = 'text-sm font-medium text-red-600'
export const inputClasses =
  'w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20'
// Large primary pill (design.md → Buttons), as used for form submits
export const submitClasses =
  'inline-flex w-fit items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-60'

export function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-brand-primary">
      {' '}
      *
    </span>
  )
}

// `idPrefix` keeps ids unique across forms (join-…, onboarding-…)
export function TextField({
  idPrefix,
  label,
  name,
  hint,
  type = 'text',
  required = false,
  placeholder,
  defaultValue,
  maxLength,
  autoComplete,
}: {
  idPrefix: string
  label: string
  name: string
  hint?: string
  type?: string
  required?: boolean
  placeholder?: string
  defaultValue?: string
  maxLength?: number
  autoComplete?: string
}) {
  const id = `${idPrefix}-${name}`
  const hintId = hint ? `${id}-hint` : undefined
  return (
    <div className={fieldClasses}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <RequiredMark />}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-describedby={hintId}
        className={inputClasses}
      />
      {hint && (
        <p id={hintId} className={hintClasses}>
          {hint}
        </p>
      )}
    </div>
  )
}

// Hidden bot trap; the matching server check is honeypotTripped() in
// lib/form-action.ts.
export function HoneypotField({ idPrefix }: { idPrefix: string }) {
  const id = `${idPrefix}-form-note`
  return (
    <div aria-hidden="true" className="sr-only">
      <label htmlFor={id}>Leave this field empty</label>
      <input
        id={id}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  )
}

// Replaces a form once it has been submitted. It mounts in place of the
// focused submit button, so focus moves to the heading — screen readers
// announce it and keyboard users aren't dropped back to the top of the page.
export function FormSuccess({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    headingRef.current?.focus()
  }, [])
  return (
    <div role="status" className="flex flex-col items-start gap-4 py-4">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-12 w-12 text-brand-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
      </svg>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold text-brand-primary outline-none"
      >
        {heading}
      </h2>
      <p className="max-w-xl text-base text-slate-700">{children}</p>
    </div>
  )
}
