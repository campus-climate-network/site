'use client'

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { ChangeEvent, FormEvent } from 'react'

import {
  FormSuccess,
  HoneypotField,
  RequiredMark,
  TextField,
  errorClasses,
  fieldClasses,
  hintClasses,
  labelClasses,
  submitClasses,
} from '@/components/form-fields'
import {
  FIELD_LIMITS,
  LOGO_ACCEPT,
  LOGO_MAX_BYTES,
  isLogoMimeType,
} from '@/sanity/lib/member-org'
import { submitOrgProfile } from './actions'

// The fields existing member orgs actually carry (name, university, address,
// website, Instagram, logo). Region and coordinates are set in Studio /
// derived server-side, so the group never sees them.
export function OrgProfileForm() {
  const [state, formAction, isPending] = useActionState(submitOrgProfile, null)
  const [logoError, setLogoError] = useState<string | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const logoRef = useRef<HTMLInputElement>(null)

  // Release the previous preview's object URL whenever it changes or the
  // form unmounts.
  useEffect(() => {
    return () => {
      if (logoPreview) URL.revokeObjectURL(logoPreview)
    }
  }, [logoPreview])

  function handleLogoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0]
    setLogoPreview(null)
    if (!file) {
      setLogoError(null)
      return
    }
    if (!isLogoMimeType(file.type)) {
      setLogoError('Please choose a PNG, JPG or WebP file.')
      return
    }
    if (file.size > LOGO_MAX_BYTES) {
      setLogoError('That file is over 4 MB — please export a smaller version.')
      return
    }
    setLogoError(null)
    setLogoPreview(URL.createObjectURL(file))
  }

  // Dispatching manually (instead of letting the form action run) keeps the
  // entered values in place if the submission fails.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (logoError) {
      logoRef.current?.focus()
      return
    }
    const formData = new FormData(event.currentTarget)
    startTransition(() => formAction(formData))
  }

  if (state?.status === 'success') {
    return (
      <FormSuccess heading="Thanks — your profile is in">
        CCN staff will review it and publish your group to the network map and
        member directory. If anything needs changing after that, email{' '}
        <a
          href="mailto:info@campusclimatenetwork.org"
          className="font-semibold text-brand-primary transition hover:text-brand-secondary"
        >
          info@campusclimatenetwork.org
        </a>
        .
      </FormSuccess>
    )
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <HoneypotField idPrefix="onboarding" />

      <div className="flex flex-col gap-5">
        <TextField
          idPrefix="onboarding"
          label="Organization name"
          name="name"
          required
          placeholder="e.g. Sunrise Movement UVM"
          maxLength={FIELD_LIMITS.name}
          autoComplete="organization"
        />
        <TextField
          idPrefix="onboarding"
          label="University or institution"
          name="university"
          required
          placeholder="e.g. University of Vermont"
          maxLength={FIELD_LIMITS.university}
        />
        <TextField
          idPrefix="onboarding"
          label="Campus address"
          name="address"
          required
          hint="Places your pin on the network map. Your campus’s main address is fine."
          placeholder="e.g. 85 South Prospect St, Burlington, VT 05405"
          maxLength={FIELD_LIMITS.address}
          autoComplete="street-address"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            idPrefix="onboarding"
            label="Website"
            name="website"
            placeholder="https://"
            maxLength={FIELD_LIMITS.url}
            autoComplete="url"
          />
          <TextField
            idPrefix="onboarding"
            label="Instagram"
            name="instagram"
            placeholder="@yourgroup or a link"
            maxLength={FIELD_LIMITS.url}
          />
        </div>
        <div className={fieldClasses}>
          <label htmlFor="onboarding-logo" className={labelClasses}>
            Logo
            <RequiredMark />
          </label>
          <input
            ref={logoRef}
            id="onboarding-logo"
            name="logo"
            type="file"
            required
            accept={LOGO_ACCEPT}
            onChange={handleLogoChange}
            aria-invalid={logoError ? true : undefined}
            aria-describedby={
              logoError ? 'onboarding-logo-error' : 'onboarding-logo-hint'
            }
            className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-primary/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-primary file:transition-colors hover:file:bg-brand-primary/20"
          />
          {logoError ? (
            <p id="onboarding-logo-error" role="alert" className={errorClasses}>
              {logoError}
            </p>
          ) : (
            <p id="onboarding-logo-hint" className={hintClasses}>
              PNG, JPG or WebP up to 4 MB. A logo on a transparent background
              looks best on the site.
            </p>
          )}
          {logoPreview && (
            // A blob: URL from the file picker — next/image can't optimize
            // it, and there's nothing to optimize.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoPreview}
              alt="Preview of the selected logo"
              className="h-28 w-auto max-w-full rounded-xl border border-slate-200 bg-white object-contain p-2"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {state?.status === 'error' && (
          <p role="alert" className={errorClasses}>
            {state.message}
          </p>
        )}
        <button type="submit" disabled={isPending} className={submitClasses}>
          {isPending ? 'Submitting…' : 'Submit profile'}
        </button>
      </div>
    </form>
  )
}
