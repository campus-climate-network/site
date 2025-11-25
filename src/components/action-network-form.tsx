'use client'

import { useEffect } from 'react'

export function ActionNetworkForm() {
  useEffect(() => {
    const scriptId = 'action-network-join-the-ccn'

    if (document.getElementById(scriptId)) {
      return
    }

    const script = document.createElement('script')
    script.src =
      'https://actionnetwork.org/widgets/v5/form/join-the-ccn?format=js&source=widget'
    script.async = true
    script.id = scriptId
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <>
      <div id="can-form-area-join-the-ccn" style={{ width: '100%' }}></div>
      <style>{`
        #can-form-area-join-the-ccn .can_embed,
        #can-form-area-join-the-ccn form {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', sans-serif !important;
          color: #0f172a !important;
        }

        #can-form-area-join-the-ccn h2,
        #can-form-area-join-the-ccn h3,
        #can-form-area-join-the-ccn h4,
        #can-form-area-join-the-ccn h5 {
          margin-bottom: 0.75rem;
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          color: #0f172a !important;
        }

        #can-form-area-join-the-ccn label {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
          color: #0f172a;
        }

        #can-form-area-join-the-ccn .can_input,
        #can-form-area-join-the-ccn input,
        #can-form-area-join-the-ccn select,
        #can-form-area-join-the-ccn textarea {
          width: 100%;
          border-radius: 999px;
          border: 1px solid #cbd5f5;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          background: #f8fafc;
          color: #0f172a;
        }

        #can-form-area-join-the-ccn textarea {
          border-radius: 1rem;
          min-height: 120px;
          resize: vertical;
        }

        #can-form-area-join-the-ccn input[type='checkbox'],
        #can-form-area-join-the-ccn input[type='radio'] {
          width: auto;
          border-radius: 0.4rem;
          margin-right: 0.5rem;
        }

        #can-form-area-join-the-ccn .can_checkbox,
        #can-form-area-join-the-ccn .can_radio {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }

        #can-form-area-join-the-ccn .can_field {
          margin-bottom: 1.25rem;
        }

        #can-form-area-join-the-ccn .action_info {
          display: none;
        }

        #can-form-area-join-the-ccn .can_embed__footer {
          display: none;
        }

        #can-form-area-join-the-ccn .can_btn,
        #can-form-area-join-the-ccn button[type='submit'] {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          width: auto;
          align-self: flex-start;
          border: none;
          border-radius: 999px;
          background: #60379d;
          color: #fff;
          padding: 0.75rem 1.75rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 150ms ease, transform 150ms ease;
        }

        #can-form-area-join-the-ccn .can_btn:hover,
        #can-form-area-join-the-ccn button[type='submit']:hover {
          background: #4f72ca;
        }
      `}</style>
    </>
  )
}
