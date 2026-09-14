'use client'

import { startTransition, useActionState, useRef, useState } from 'react'
import type { FormEvent } from 'react'

import {
  FormSuccess,
  HoneypotField,
  TextField,
  errorClasses,
  fieldClasses,
  inputClasses,
  labelClasses,
  submitClasses,
} from '@/components/form-fields'
import { cn } from '@/lib/utils'
import { submitJoinForm } from './actions'
import { isEduEmail } from './school-email'

export function JoinForm() {
  const [state, formAction, isPending] = useActionState(submitJoinForm, null)
  // 0 = no nudge; incrementing remounts the message (via key) so the pop-in
  // and cap-toss animations replay on every rejected submit. Nudging only on
  // submit (never on blur) keeps the layout stable mid-tap — a blur-mounted
  // message shifts the Sign up button under the pointer and eats the click.
  const [nudge, setNudge] = useState(0)
  const emailRef = useRef<HTMLInputElement>(null)

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
      <FormSuccess heading="Thanks for signing up!">
        Our organizing team will reach out within a few days to schedule an
        onboarding call. In the meantime, keep an eye on your inbox — we’ll be
        in touch soon.
      </FormSuccess>
    )
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <HoneypotField idPrefix="join" />

      <div className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            idPrefix="join"
            label="First name"
            name="firstName"
            required
            placeholder="First name"
            autoComplete="given-name"
          />
          <TextField
            idPrefix="join"
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
            <span aria-hidden="true" className="text-brand-primary">
              {' '}
              *
            </span>
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
          <p role="alert" className={errorClasses}>
            {state.message}
          </p>
        )}
        <button type="submit" disabled={isPending} className={submitClasses}>
          {isPending ? 'Signing you up…' : 'Sign up'}
        </button>
      </div>
    </form>
  )
}
