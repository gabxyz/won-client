import { useRouter } from 'next/router'
import { useState } from 'react'

import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'

import { FormWrapper, FormError, FormSuccess } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErrors, forgotValidate } from 'utils/validations'
import Spinner from 'components/Spinner'

const FormForgotPassword = () => {
  const { query } = useRouter()

  const [success, setSuccess] = useState(false)

  const [formError, setFormError] = useState('')

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({ email: (query.email as string) || '' })

  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      console.log('Error', data)
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline />
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email}
              initialValue={query.email as string}
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
            />
            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <Spinner size={28} /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
