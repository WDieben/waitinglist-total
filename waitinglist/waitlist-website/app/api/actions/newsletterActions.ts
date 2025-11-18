export interface WaitlistSubscribeRequest {
  name: string
  email: string
}

export interface WaitlistSubscribeResponse {
  success: boolean
  message: string
}

const PRODUCT_NAME =
  process.env.NEXT_PUBLIC_PRODUCT_NAME ||
  process.env.PRODUCT_NAME ||
  'WaitingList'

export const subscribeToWaitlist = async (
  payload: WaitlistSubscribeRequest,
): Promise<WaitlistSubscribeResponse> => {
  const response = await fetch('/api/proxy/contact/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      ...payload,
      product_name: PRODUCT_NAME,
    }),
  })

  if (!response.ok) {
    const errorBody = await response
      .json()
      .catch(() => ({ detail: 'Er ging iets mis, probeer het opnieuw.' }))
    const detail =
      typeof errorBody === 'object' && errorBody !== null && 'detail' in errorBody
        ? (errorBody as { detail: string }).detail
        : 'Er ging iets mis, probeer het opnieuw.'
    throw new Error(detail)
  }

  const text = await response.text()
  if (!text) {
    return { success: true, message: 'Je staat op de wachtlijst!' }
  }

  try {
    return JSON.parse(text) as WaitlistSubscribeResponse
  } catch {
    return { success: true, message: text }
  }
}

