// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	//think of this as like the main function 
	// how to have an extension that activates on text change


	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	/* information message
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello VSCode from Extension!');
	});

	context.subscriptions.push(disposable);*/

	/* warning message
	let disposabletwo = vscode.commands.registerCommand('helloworld.helloWorld2', function () {
		// Display a message box to the user with the current time
		// get the current time
		var time = new Date().toLocaleTimeString();
		// show this time in a message box
		vscode.window.showWarningMessage(time);
		//vscode.window.showWarningMessage('Hello VSCode from Extension 2!');
	}); 
	context.subscriptions.push(disposabletwo);*/

	var text = vscode.window.activeTextEditor.document.getText();
		vscode.window.activeTextEditor.edit(editBuilder => {
			editBuilder.insert(new vscode.Position(0, 0), text+"hello");

		}); 
	
	/*let disposablethree = vscode.commands.registerCommand('helloworld.helloWorld3', function () {
		// detect if the user has changed the text
		// go!
		// get the current text -- that just gets the text in the current file
		// i need the *new* text
	
		var text = vscode.window.activeTextEditor.document.getText();
		vscode.window.activeTextEditor.edit(editBuilder => {
			editBuilder.insert(new vscode.Position(0, 0), text+"hello");
		});
		
		// okay got text to show up. 

		// now I need to do this without starting a new command and just on text changes
		// how do I do that?
		
		

		

	
		context.subscriptions.push(disposablethree);
	
	}); */

}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
