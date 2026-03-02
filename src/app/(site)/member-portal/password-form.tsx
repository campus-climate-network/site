'use client'

import { useActionState } from 'react'
import { authenticate } from './actions'

export function PasswordForm() {
  const [state, formAction, isPending] = useActionState(authenticate, null)

  return (
    <form action={formAction} className="w-full max-w-sm stack stack-snug">
      <label htmlFor="password" className="text-sm font-medium text-slate-700">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        placeholder="Enter the member password"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
      />
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90 disabled:opacity-50"
      >
        {isPending ? 'Checking...' : 'Enter portal'}
      </button>
    </form>
  )
}
