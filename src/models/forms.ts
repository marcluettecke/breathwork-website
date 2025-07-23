export interface FormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ContactFormSubmission extends FormData {
  timestamp: string
  to: string
}