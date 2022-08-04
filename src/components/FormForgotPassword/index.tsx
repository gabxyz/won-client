import { useRouter } from 'next/router'

import { Email, ErrorOutline } from '@styled-icons/material-outlined'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { useState } from 'react'
import { signIn } from 'next-auth/client'
import GamesLoader from 'components/GamesLoader'
import { FieldErrors, forgotValidate } from 'utils/validations'

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('')

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({ email: '' })

  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

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

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    setFormError('email or password is invalid')
  }

  return (
    <FormWrapper>
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
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? (
            <FormLoading>
              <GamesLoader />
            </FormLoading>
          ) : (
            <span>Send email</span>
          )}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword