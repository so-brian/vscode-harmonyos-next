import * as vscode from 'vscode';
import { Command } from './command';

export class HelloWorldCommand extends Command {
	constructor() {
		super('vscode-harmonyos-next.helloWorld');
	}
	
	run() {
		vscode.window.showInformationMessage('Hello World!');
	}
}
