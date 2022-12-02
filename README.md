# UI5WebcomponentsAngularScopingLib
This Angular library was setup to demonstrate scoping in UI5 Web Components, which should be leveraged when building a library or microfrontend.  To find out more about scoping, refer to the [official documentation](https://sap.github.io/ui5-webcomponents/playground/advanced/scoping/). 

This project is referenced by the demo project [UI5-Webcomponents-Angular-Scoping](https://github.com/Logical-Star-Consulting/UI5-Webcomponents-Angular-Scoping)

## How to do it?
When creating your library component, make sure to alias the specific referenced UI5 Web Component libraries. For example...
```
"webcomponents-1-8": "npm:@ui5/webcomponents@1.8.0",
```

When importing components into your component, make sure to reference via the alias.
```
import "webcomponents-1-8/dist/Label";
import "webcomponents-1-8/dist/Input";
import "webcomponents-1-8/dist/Title";
```

Import the component base libary, ensuring you do not alias it.  
```
"@ui5/webcomponents-base": "1.8.0"
```

As the webcomponents-base library does not fully support TypeScript definitions (see [github discussion](https://github.com/SAP/ui5-webcomponents-react/discussions/1136) and [issue 4337](https://github.com/SAP/ui5-webcomponents/issues/4337)) we had to create our own declaration in the directory ```types/ui5__webcomponents-base``` to circumvent this and also had to add "noImplicitAny": false to tsconfig.lib.json.   

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.  Ensures the post build scripts run.   

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
