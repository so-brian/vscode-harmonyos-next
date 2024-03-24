import * as vscode from 'vscode';
import { Command } from './command';

export class CreateArkTSCommand extends Command {
	constructor() {
		super('vscode-harmonyos-next.createArkTS');
	}

	run() {
		vscode.window.showInformationMessage('Create Ark TS');
	}
}