import * as vscode from 'vscode';
import { Command } from './command';
import * as fs from 'fs';

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

	run (args: CreateArkTSEventArgs) {
		console.log(args.path);
		vscode.window.showInputBox({
			prompt: 'Enter file name',
			value: 'component.ets',
			valueSelection: [0, 9]
		}).then((fileName) => {
			if (fileName) {
				const filePath = args.path + '/' + fileName;
				fs.writeFileSync(filePath, '');
				console.log('New .ts file created at:', filePath);
			}
		});
		// vscode.window.showInformationMessage('Create Ark TS');
	}

	private createComponent (directory: string, file: string) {
		const filePath = directory + '/' + file;
		fs.writeFileSync(filePath, '');
		console.log('New .ts file created at:', filePath);
	}
}