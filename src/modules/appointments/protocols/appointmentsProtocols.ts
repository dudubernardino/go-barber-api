export type CreateAppointmentDTOProps = {
  provider_id: string;
  user_id: string;
  date: Date;
}

export type FindAllInMonthFromProviderDTOProps = {
  provider_id: string;
  month: number;
  year: number;
}

export type FindAllInDayFromProviderDTOProps = {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}
