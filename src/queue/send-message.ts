import {Common} from "../common";
import {Instance} from "../types/instance";
import {SendMessageOptions} from "../types/send-message-options";

export class SendMessage extends Common {
    constructor(instance: Instance, options: SendMessageOptions) {
        super(instance, options, 'queue');
    }
}