import { useState, FormEvent } from 'react'
import './ContactForm.scss'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      formData.append("access_key", "d2a5183b-075f-4b55-8338-0fdb5b3f61e6")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(data.message || 'Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Hidden field to combine first and last name for Web3Forms */}
        <input
          type="hidden"
          name="name"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <div className="form-row">
          <label className="form-label">
            Name <span className="required">(erforderlich)</span>
          </label>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Vorname"
              className="form-input"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nachname"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">
            E-Mail-Adresse <span className="required">(erforderlich)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            Betreff <span className="required">(erforderlich)</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">
            Deine Nachricht an mich <span className="required">(erforderlich)</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Senden'}
        </button>

        {submitStatus === 'success' && (
          <div className="success-message">
            Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            Es gab einen Fehler beim Senden. Bitte versuche es später erneut.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm
