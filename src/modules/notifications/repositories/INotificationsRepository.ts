import {CreateNotificationDTOProps} from '../protocols/notificationsProtocols';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: CreateNotificationDTOProps): Promise<Notification>;
}
