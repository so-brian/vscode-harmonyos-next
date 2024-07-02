// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CreateArkTSCommand, HelloWorldCommand } from './commands';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient;

// Activating extension 'so-brian.vscode-harmonyos-next' failed:
// Cannot find module '/home/brian/repo/github.com/so-brian/vscode-harmonyos-next/node_modules/ets-lsp/server.ts'.
// Please verify that the package.json has a valid "main" entry.

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate (context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-harmonyos-next" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push(new HelloWorldCommand());
	context.subscriptions.push(new CreateArkTSCommand());

	const serverModule = require.resolve(
		'ets-lsp'
	);

	// Debug options for server are used when we launch the extension in debug mode
	const serverOptions: ServerOptions = {
		run: { module: serverModule },
		debug: {
			module: serverModule,
			options: { execArgv: ['--inspect=6009'] }
		}
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [
			{
				// pattern: '**​/*.ets',
				// language: 'ets',
				scheme: 'file',
			}
		]
	};

	client = new LanguageClient(
		'vscode-harmonyos-next',
		'VS Code HarmonyOS Next',
		serverOptions,
		clientOptions
	);

	// Starting the client will also launch the server.
	client.start();
}

// This method is called when your extension is deactivated
export function deactivate () {
	if (client) {
		return client.stop();
	}
}