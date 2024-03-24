import * as vscode from 'vscode';

export abstract class Command implements vscode.Disposable {
	private disposable: vscode.Disposable;

	constructor(name: string) {
		this.disposable = vscode.commands.registerCommand(name, this.run);
		console.log(`Command ${name} registered`);
	}

	abstract run(...args: any[]): void;

	dispose() {
		this.disposable.dispose();
	}
}