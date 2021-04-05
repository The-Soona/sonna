import { SoonaArgs } from '../core/cli';

import Command from '../core/command';

export const command = 'publish';


export function handler(args: SoonaArgs) {
    return new Publish(args);
}

export class Publish extends Command {

}

