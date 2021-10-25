export type HttpRequestCreateAppointmentServiceProps = {
  provider_id: string
  user_id: string
  date: Date
}

export type HttpRequestListAppointmentServiceProps = {
  provider_id: string
  day: number
  month: number
  year: number
}

export type HttpRequestListProvidersDayAvailabilityProps = {
  provider_id: string
  day: number
  month: number
  year: number
}

export type HttpRequestListProvidersMonthAvailabilityProps = {
  provider_id: string
  month: number
  year: number
}

export type HttpRequestListProviderServices= {
  user_id: string
}
