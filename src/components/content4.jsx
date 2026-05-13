import { useState } from 'react'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function validateForm(formData) {
  const trimmedName = formData.name.trim()
  const trimmedEmail = formData.email.trim()
  const trimmedPhone = formData.phone.trim()
  const trimmedMessage = formData.message.trim()
  const phoneDigits = trimmedPhone.replace(/\D/g, '')
  const errors = {}

  if (trimmedName.length < 2) {
    errors.name = 'Please enter at least 2 characters for your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!/^\+?[0-9()\s-]+$/.test(trimmedPhone) || phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid phone number with at least 10 digits.'
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please enter a message with at least 10 characters.'
  }

  return errors
}

export default function Content4() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })

    if (submitState !== 'idle') {
      setSubmitState('idle')
      setSubmitMessage('')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(formData)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitState('error')
      setSubmitMessage('Please correct the highlighted fields and try again.')
      return
    }

    setErrors({})
    setSubmitState('submitting')
    setSubmitMessage('Submitting your message...')

    try {
      const requestBody = new FormData()
      requestBody.append('name', formData.name.trim())
      requestBody.append('email', formData.email.trim())
      requestBody.append('phone', formData.phone.trim())
      requestBody.append('message', formData.message.trim())

      await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        body: requestBody,
        mode: 'no-cors',
      })

      setFormData(initialFormData)
      setSubmitState('success')
      setSubmitMessage(
        'Your form has been submitted successfully.',
      )
    } catch {
      setSubmitState('error')
      setSubmitMessage(
        'We could not submit your message right now. Please try again.',
      )
    }
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-14 lg:py-14">
        {/* Intro copy styled to match the clean, left-aligned heading block in the reference UI. */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2154bb]">
            Have Questions About Planetary Science?
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#44597c] sm:text-base">
            Interested in learning more about space, astronomy, or how
            planetary data is collected and analyzed? Reach out and we&apos;ll
            get back to you.
          </p>
        </div>

        {/* Two-column form grid for the moderate arrangement shown in the screenshot. */}
        <form
          className="mt-10"
          action="https://whitebricks.com/tsacademy.php"
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#243b63]"
              >
                Full Name<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                minLength={2}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`mt-2 h-12 w-full rounded-lg border px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:ring-2 ${
                  errors.name
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10'
                    : 'border-[#d8e1f0] focus:border-[#2154bb] focus:ring-[#2154bb]/10'
                }`}
              />
              {errors.name ? (
                <p id="name-error" className="mt-2 text-xs text-[#ef4444]">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#243b63]"
              >
                Email<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`mt-2 h-12 w-full rounded-lg border px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:ring-2 ${
                  errors.email
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10'
                    : 'border-[#d8e1f0] focus:border-[#2154bb] focus:ring-[#2154bb]/10'
                }`}
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-xs text-[#ef4444]">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#243b63]"
              >
                Phone Number<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Please enter a valid phone number."
                required
                pattern="^\+?[0-9()\s-]+$"
                minLength={10}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`mt-2 h-12 w-full rounded-lg border px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:ring-2 ${
                  errors.phone
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10'
                    : 'border-[#d8e1f0] focus:border-[#2154bb] focus:ring-[#2154bb]/10'
                }`}
              />
              {errors.phone ? (
                <p id="phone-error" className="mt-2 text-xs text-[#ef4444]">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#243b63]"
              >
                Message<span className="text-[#ef4444]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                minLength={10}
                maxLength={100}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`mt-2 h-24 w-full resize-none rounded-lg border px-4 py-3 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:ring-2 ${
                  errors.message
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/10'
                    : 'border-[#d8e1f0] focus:border-[#2154bb] focus:ring-[#2154bb]/10'
                }`}
              />
              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="text-xs text-[#7f8da3]">
                  {formData.message.length}/100 characters
                </p>
                {errors.message ? (
                  <p id="message-error" className="text-xs text-[#ef4444]">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {submitMessage ? (
            <p
              role="status"
              className={`mt-6 text-sm ${
                submitState === 'success'
                  ? 'text-[#166534]'
                  : submitState === 'error'
                    ? 'text-[#b91c1c]'
                    : 'text-[#2154bb]'
              }`}
            >
              {submitMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitState === 'submitting'}
            className="mt-10 inline-flex min-w-[12rem] items-center justify-center rounded-lg bg-[#2154bb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b4aa8] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === 'submitting' ? 'Submitting...' : 'Submit'}
            <span className="ml-2 text-base leading-none">&rsaquo;</span>
          </button>
        </form>
      </div>
    </section>
  )
}