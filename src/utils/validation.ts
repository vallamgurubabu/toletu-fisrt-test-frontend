// utils/validation.ts

type LoginData = {
  phone: string
  password: string
}

type SignupData = {
  phone: string
  password: string
  confirmPassword: string
  otp: string
}

function isValidPhoneNumber(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone) // Indian format
}

export function validateLogin({ phone, password }: LoginData): true | string {
  if (!phone || !isValidPhoneNumber(phone)) {
    return "Enter a valid 10-digit phone number"
  }

  if (!password || password.length < 6) {
    return "Password must be at least 6 characters"
  }

  return true
}

export function validateSignup({ phone, password, confirmPassword, otp }: SignupData): true | string {
  if (!phone || !isValidPhoneNumber(phone)) {
    return "Enter a valid 10-digit phone number"
  }

  if (!otp || otp.length !== 6) {
    return "Enter the 6-digit OTP"
  }

  if (!password || password.length < 6) {
    return "Password must be at least 6 characters"
  }

  if (password !== confirmPassword) {
    return "Passwords do not match"
  }

  return true
}
