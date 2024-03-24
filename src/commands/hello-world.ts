import vscode from 'vscode';
import { Command } from './command';

export const hellWorldCommand = new Command('vscode-harmonyos-next.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from HarmonyOS Next!');
});
