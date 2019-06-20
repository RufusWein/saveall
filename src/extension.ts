import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	var mensaje = 'SAVE ALL FILES!!',
		error   = 'Ops this looks bad!! plz press CTRL+ALT+DEL';
		
	if (vscode.env.language === 'es'){
		mensaje = 'Ficheros guardados!!';
		error   = 'Ups algo va mal!! plz pulse CTRL+ALT+SUPR';
		console.log('Extensión "saveall" está activa!');
	} else {
		console.log('Congratulations, your extension "Save All" is now active!');
	}

	let disposableSaveAll = vscode.commands.registerCommand('extension.saveall', () => {

		vscode.workspace.saveAll().then((resultado)=>{

			if (resultado){
				vscode.window.showInformationMessage(mensaje);
			} else {
				vscode.window.showInformationMessage(error);
			}
		});
	});

	context.subscriptions.push(disposableSaveAll);
}

export function deactivate() {}
