import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sgticket/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
