> NOTE: This is intended to be a boilerplate component. Clone this component, remove this comment, and use the rest as a starting point for your new compoent.

# 10up Component Name

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

Example implementations can be found in the `demo` directory.

## Support Level

**Active:** 10up is actively working on this, and we expect to continue work for the foreseeable future including keeping tested up to the most recent version of WordPress.  Bug reports, feature requests, questions, and pull requests are welcome.

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10updotcom-wpengine.s3.amazonaws.com/uploads/2016/10/10up-Github-Banner.png" width="850" alt="10up"></a>
