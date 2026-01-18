import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input'
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: 'textarea'
}

type FormFieldProps = (InputProps | TextareaProps) & {
  label: string
  error?: string
}

const FormField = ({ label, error, as = 'input', className = '', ...props }: FormFieldProps) => {
  const baseInputClasses = 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors'
  const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''
  
  return (
    <div className={className}>
      <label className="block text-text-dark mb-2">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {as === 'textarea' ? (
        <textarea
          className={`${baseInputClasses} ${errorClasses}`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`${baseInputClasses} ${errorClasses}`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default FormField