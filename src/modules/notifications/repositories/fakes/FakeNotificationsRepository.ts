import { ObjectID } from 'mongodb';

import {CreateNotificationDTOProps} from '@modules/notifications/protocols/notificationsProtocols';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '../../infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({ recipient_id, content }: CreateNotificationDTOProps): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), recipient_id, content });

    this.notifications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
