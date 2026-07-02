'use client'

import { startTransition, useActionState, useState } from 'react'
import type { FormEvent } from 'react'

import { cn } from '@/lib/utils'
import { submitJoinForm } from './actions'
import {
  CAMPAIGN_INTERESTS,
  CAMPAIGN_STATUS_OPTIONS,
  COUNTRY_CODES,
} from './join-form-options'

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

const COUNTRIES = COUNTRY_CODES.map((code) => ({
  code,
  name: regionNames.of(code) ?? code,
})).sort((a, b) => a.name.localeCompare(b.name))

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
  const [interestError, setInterestError] = useState(false)

  // Dispatching manually (instead of letting the form action run) keeps the
  // entered values in place if the submission fails
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (formData.getAll('interest').length === 0) {
      setInterestError(true)
      return
    }
    setInterestError(false)
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
        <h2 className="text-2xl font-semibold text-brand-primary">
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
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="join-website">Leave this field empty</label>
        <input
          id="join-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-5">
        <p className="eyebrow text-xs text-brand-secondary">About you</p>
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
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@school.edu"
            autoComplete="email"
          />
          <TextField
            label="Mobile number"
            name="phone"
            type="tel"
            required
            placeholder="Mobile number"
            autoComplete="tel"
          />
          <TextField
            label="Zip / postal code"
            name="zipCode"
            required
            placeholder="Zip / postal code"
            autoComplete="postal-code"
          />
          <div className={fieldClasses}>
            <label htmlFor="join-country" className={labelClasses}>
              Country
              <RequiredMark />
            </label>
            <select
              id="join-country"
              name="country"
              required
              defaultValue="US"
              autoComplete="country"
              className={cn(inputClasses, 'appearance-auto')}
            >
              {COUNTRIES.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TextField
          label="I am a..."
          name="memberType"
          placeholder="Student, Faculty, Alumni, etc."
        />
      </div>

      <div className="flex flex-col gap-5">
        <p className="eyebrow text-xs text-brand-secondary">Your campus</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            label="College or university"
            name="school"
            required
            placeholder="College or university"
          />
          <TextField
            label="Graduation year"
            name="graduationYear"
            required
            placeholder="e.g. 2028"
          />
        </div>
        <TextField
          label="Organization"
          name="organization"
          required
          placeholder="Your student org or climate group"
        />
        <TextField
          label="How did you find us?"
          name="referralSource"
          placeholder="Social media, event, Sunrise reference"
        />
      </div>

      <div className="flex flex-col gap-6">
        <p className="eyebrow text-xs text-brand-secondary">Your campaign</p>
        <fieldset>
          <legend className={cn(labelClasses, 'mb-3')}>
            Are you and your student org currently involved in a university
            campaign?
            <RequiredMark />
          </legend>
          <div className="flex flex-col gap-2.5">
            {CAMPAIGN_STATUS_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
              >
                <input
                  type="radio"
                  name="campaignStatus"
                  value={option}
                  required
                  className="h-4 w-4 accent-brand-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className={cn(labelClasses, 'mb-3')}>
            Which campaign is your student org currently, or interested in,
            running? (check all that apply)
            <RequiredMark />
          </legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {CAMPAIGN_INTERESTS.map((interest) => (
              <label
                key={interest}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
              >
                <input
                  type="checkbox"
                  name="interest"
                  value={interest}
                  onChange={() => setInterestError(false)}
                  className="h-4 w-4 rounded accent-brand-primary"
                />
                {interest}
              </label>
            ))}
          </div>
          {interestError && (
            <p role="alert" className="mt-3 text-sm font-medium text-red-600">
              Please select at least one campaign.
            </p>
          )}
        </fieldset>

        <div className={fieldClasses}>
          <label htmlFor="join-supportNeeds" className={labelClasses}>
            How can CCN best support you and your student organization?
          </label>
          <textarea
            id="join-supportNeeds"
            name="supportNeeds"
            rows={5}
            placeholder="Trainings, funding, campaign strategy, connections to other campuses..."
            className={cn(inputClasses, 'min-h-28 resize-y rounded-2xl')}
          />
        </div>
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
          className="inline-flex w-fit items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Signing you up…' : 'Sign up'}
        </button>
      </div>
    </form>
  )
}
