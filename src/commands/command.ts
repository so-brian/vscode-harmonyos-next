export class Command {
    name: string;
    handler: (...args: any[]) => any;

    constructor(name: string, handler: (...args: any[]) => any) {
        this.name = name;
        this.handler = handler;
    }
}