import { FaRegCheckCircle } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'

interface FormStateProps {
  message?: string
}

const FormError = ({ message }: FormStateProps) => {
  if (!message) return null

  return (
    <div className="flex items-center justify-center rounded-lg border p-4 text-sm bg-red-50 text-red-600 font-semibold">
      <FaRegTimesCircle />
      <p>{message}</p>
    </div>
  )
}

const FormSuccess = ({ message }: FormStateProps) => {
  if (!message) return null

  return (
    <div className="flex items-center justify-center rounded-lg border p-4 text-sm bg-teal-50 text-teal-600  font-semibold">
      <FaRegCheckCircle />
      <p>{message}</p>
    </div>
  )
}

export { FormError, FormSuccess }
