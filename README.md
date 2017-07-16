# generator-client-swag

This is a yeoman generator for a faster client side development

```
## Installing

Run from your terminal:

```{r, engine='bash'}
npm install yo -g
npm isntall generator-client-swag -g
```

## Usage

## Dumb component (not connected to redux)

```{r, engine='bash'}
yo client-swag
```

Then enter your component name using PascalCase

Will create next file structure:
+-- {{component-name}}
|   +-- index.js
|   +-- {{compnent-name}}.jsx
|   +-- {{compnent-name}}.spec.jsx
|   +-- {{compnent-name}}.scss

## Smart component (connected to redux)

```{r, engine='bash'}
yo client-swag:container
```

Then enter your component name using PascalCase

Will create next file structure:
+-- {{component-name}}
|   +-- index.js
|   +-- {{compnent-name}}.jsx
|   +-- {{compnent-name}}.spec.jsx
|   +-- {{compnent-name}}.scss

## Redux store slice

```{r, engine='bash'}
yo client-swag:redux
```

Then enter your store slice name using camelCase

Will create next file structure:
+-- {{slice-name}}
|   +-- {{slice-name}}.reduce.js
|   +-- {{slice-name}}.actions.js
|   +-- {{slice-name}}.selectors.js
|   +-- {{slice-name}}.dispatchers.js
