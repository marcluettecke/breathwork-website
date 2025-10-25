import { useState, FormEvent } from 'react'
import './ContactForm.scss'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  newsletter: 'yes' | 'no' | ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', {
        ...formData,
        timestamp: new Date().toISOString(),
        to: 'marc.luettecke1@gmail.com'
      })
      
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions))
      
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '', newsletter: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
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
        
        <div className="form-row newsletter-row">
          <label className="form-label">
            Newsletter <span className="required">(erforderlich)</span>
          </label>
          <p className="newsletter-text">
            Melde dich für meinen Newsletter an und erfahre viermal im Jahr von neuen Kursen, Aktionen und besonderen Angeboten.
          </p>
          <div className="button-group">
            <button
              type="button"
              className={`option-button ${formData.newsletter === 'yes' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, newsletter: 'yes' }))}
            >
              Anmelden
            </button>
            <button
              type="button"
              className={`option-button ${formData.newsletter === 'no' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, newsletter: 'no' }))}
            >
              Nein, Danke
            </button>
          </div>
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