import Appointment from '../infra/typeorm/entities/Appointment';
import {CreateAppointmentDTOProps,FindAllInDayFromProviderDTOProps, FindAllInMonthFromProviderDTOProps} from '../protocols/appointmentsProtocols';

export default interface IAppointmentsRepository {
  create(data: CreateAppointmentDTOProps): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(data: FindAllInMonthFromProviderDTOProps): Promise<Appointment[]>;
  findAllInDayFromProvider(data: FindAllInDayFromProviderDTOProps): Promise<Appointment[]>;
}
