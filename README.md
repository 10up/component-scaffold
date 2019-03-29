> NOTE: This is intended to be a boilerplate component. Clone this component, remove this comment, and use the rest as a starting point for your new compoent.

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

## Testing

Run and establish tests with [pa11y](https://github.com/pa11y/pa11y) integration. See: `tests/accessibility/pa11y.js` to get started.

## Demo

Example implementations can be found in the `demo` directory.
