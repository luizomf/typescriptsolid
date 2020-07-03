import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
