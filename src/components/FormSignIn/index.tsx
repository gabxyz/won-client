import Link from 'next/link'
import { useRouter } from 'next/router'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { FieldErrors, signInValidate } from 'utils/validations'
import Spinner from 'components/Spinner'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')

  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({ email: '', password: '' })

  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

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
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Spinner size={28} /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
