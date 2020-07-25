import {Publisher,TicketCreatedEvent,Subjects}  from '@sgticket/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject : Subjects.TicketCreated = Subjects.TicketCreated
}