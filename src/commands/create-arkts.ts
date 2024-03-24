import * as vscode from 'vscode';
import { Command } from './command';

class CreateArkTSEventArgs {
	path: string;

	constructor(path: string) {
		this.path = path;
	}
}

export class CreateArkTSCommand extends Command {
	constructor() {
		super('vscode-harmonyos-next.createArkTS');
	}

	run(args: CreateArkTSEventArgs) {
		console.log(args.path);
		vscode.window.showInformationMessage('Create Ark TS');
	}
}