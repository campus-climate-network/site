'use client'

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { FormEvent } from 'react'

import { cn } from '@/lib/utils'
import { submitJoinForm } from './actions'
import { isEduEmail } from './school-email'

const fieldClasses = 'flex flex-col gap-1.5'

const labelClasses = 'text-sm font-semibold text-slate-900'

const inputClasses =
  'w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20'

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-brand-primary">
      {' '}
      *
    </span>
  )
}

function TextField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  autoComplete?: string
}) {
  const id = `join-${name}`
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
        autoComplete={autoComplete}
        className={inputClasses}
      />
    </div>
  )
}

export function JoinForm() {
  const [state, formAction, isPending] = useActionState(submitJoinForm, null)
  // 0 = no nudge; incrementing remounts the message (via key) so the pop-in
  // and cap-toss animations replay on every rejected submit. Nudging only on
  // submit (never on blur) keeps the layout stable mid-tap — a blur-mounted
  // message shifts the Sign up button under the pointer and eats the click.
  const [nudge, setNudge] = useState(0)
  const successHeadingRef = useRef<HTMLHeadingElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  // The success panel replaces the form (and the focused submit button), so
  // move focus to its heading — screen readers announce it and keyboard users
  // aren't dropped back to the top of the page.
  useEffect(() => {
    if (state?.status === 'success') {
      successHeadingRef.current?.focus()
    }
  }, [state])

  // Dispatching manually (instead of letting the form action run) keeps the
  // entered values in place if the submission fails
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    if (typeof email === 'string' && isEduEmail(email)) {
      setNudge((count) => count + 1)
      emailRef.current?.focus()
      return
    }
    // Forward ?source=... link attribution to Action Network's sources chart
    // (the old embed script captured this automatically).
    const source = new URLSearchParams(window.location.search).get('source')
    if (source) formData.set('source', source)
    startTransition(() => formAction(formData))
  }

  if (state?.status === 'success') {
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
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-semibold text-brand-primary outline-none"
        >
          Thanks for signing up!
        </h2>
        <p className="max-w-xl text-base text-slate-700">
          Our organizing team will reach out within a few days to schedule an
          onboarding call. In the meantime, keep an eye on your inbox — we’ll be
          in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      {/* Non-semantic honeypot name: autofill vocabularies match names like
          'website', which risks silently swallowing real signups. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="join-form-note">Leave this field empty</label>
        <input
          id="join-form-note"
          name="form_note"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label="First name"
            name="firstName"
            required
            placeholder="First name"
            autoComplete="given-name"
          />
          <TextField
            label="Last name"
            name="lastName"
            required
            placeholder="Last name"
            autoComplete="family-name"
          />
        </div>
        <div className={fieldClasses}>
          <label htmlFor="join-email" className={labelClasses}>
            Personal email
            <RequiredMark />
          </label>
          <input
            ref={emailRef}
            id="join-email"
            name="email"
            type="email"
            required
            placeholder="you@gmail.com"
            autoComplete="email"
            aria-invalid={nudge > 0 || undefined}
            aria-describedby={
              nudge > 0 ? 'join-email-error' : 'join-email-hint'
            }
            onChange={(event) => {
              if (!isEduEmail(event.currentTarget.value)) setNudge(0)
            }}
            className={cn(inputClasses, nudge > 0 && 'join-email-shake')}
          />
          {nudge > 0 ? (
            <p
              key={nudge}
              id="join-email-error"
              role="alert"
              className="join-email-nudge text-sm font-medium text-brand-primary"
            >
              <span aria-hidden="true" className="join-email-nudge-cap">
                🎓
              </span>{' '}
              Whoops — that looks like a school email! We’d love a personal
              address instead.
            </p>
          ) : (
            <p id="join-email-hint" className="text-xs text-slate-500">
              Please use a personal email, not your school email.
            </p>
          )}
        </div>
        <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            name="studentOrganizer"
            value="1"
            className="h-4 w-4 rounded accent-brand-primary"
          />
          Are you currently a student organizer?
        </label>
      </div>

      <div className="flex flex-col gap-3">
        {state?.status === 'error' && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-fit items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Signing you up…' : 'Sign up'}
        </button>
      </div>
    </form>
  )
}
