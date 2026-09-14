'use client'

import { useActionState } from 'react'

import {
  errorClasses,
  inputClasses,
  labelClasses,
  submitClasses,
} from '@/components/form-fields'
import { authenticate } from './actions'

export function PasswordForm() {
  const [state, formAction, isPending] = useActionState(authenticate, null)

  return (
    <form action={formAction} className="w-full max-w-sm stack stack-snug">
      <label htmlFor="onboarding-password" className={labelClasses}>
        Onboarding password
      </label>
      <input
        id="onboarding-password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="off"
        placeholder="Enter the password"
        aria-describedby={
          state?.error ? 'onboarding-password-error' : undefined
        }
        className={inputClasses}
      />
      {state?.error && (
        <p id="onboarding-password-error" role="alert" className={errorClasses}>
          {state.error}
        </p>
      )}
      <button type="submit" disabled={isPending} className={submitClasses}>
        {isPending ? 'Checking…' : 'Continue'}
      </button>
    </form>
  )
}
