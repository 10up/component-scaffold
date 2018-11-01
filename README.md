# 10up Component Name

Component Description

## Installation

### NPM
 `npm install --save @10up/component-name`

### Standalone
 Clone this repo and import `component.js` and `component.css` from the `dist/` directory.

## API

 This component accepts two arguments, the selector for the component container and an object containing optional callbacks.

### Callbacks

 - `onCreate`: Called after the component is initialized on page load

## Usage

### Markup

 This is the markup template expected by the component.

 ```html
 <div class="component">
 </div>
 ```

### CSS

 The styles can be imported into your existing codebase by using PostCSS imports, or by including the standalone CSS file in your project.

#### PostCSS Imports
 `@import '@10up/component-name';`

#### Standalone
 Include the `component.css` file from the `dist/` directory.

### JavaScript

 Create a new instance by supplying the selector to use for the component and an object containing any necessary callback functions.

#### NPM

```javascript
import component from '@10up/component-name';

component( '.component', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	}
} );
```

#### Standalone

Include the `component.js` file from the `dist/` directory and access the component from the gobal `TenUp` object.

```javascript
let myComponent = new TenUp.component( '.component', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
} );
```

## Demo

An example implementation can be found in the `index.html` file in the root of this package.
