Creating a module:

To create a node module, you must first create a package.json file on the command line and prvide the name and version. 

Then you must create the file that will be loaded when your module is required by another application. You can do this by adding a function as a property of the exports object. 

You can publish your package to npm by using 

```
npm publish
``` 

Importing modules:

Importing most modules is a matter of using the correct install command.
For instance, to install the module I used to determine if a number is prime: 

```
npm i my-prime
``` 

You can then use the modules and run javascript in the command prompt.

```
console.log(pr.isPrime(1021));
=> true
```

Adding a .gitignore:

.gitignores are used to ensure files untracked by git remain untracked.
The simplest way to add one is to 
```
touch .gitignore
```
and define a single .gitignore file in the root.

You can even define a global Git ignore in your home directory for all repositories on your local system by setting the Git ```core.excludesFile``` property

```
touch ~/.gitignore $ git config --global core.excludesFile ~/.gitignore 
```

https://github.com/zfinnan/node_modules_practice