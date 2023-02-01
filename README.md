`React App (Components)`
Shows user comment details including name, image, time and text.

`JSX` is HTML-like syntax code.
`Component` is a pure function that returns JSX.

`The Three Tenets of Components`
- Component Reusability
- Component Nesting
- Component Configuration

`Component Reuse` prevents the need to write redundant, lengthy JSX codes all at once.
` To extract duplicate JSX to create a single component`
- Determine if JSX codes appear to be duplicates
- Create a new component, give it a descriptive name
- Paste the JSX codes in the component.
- Make the component configurable by using React's props system.

`Component Nesting`
Export the new created component, import it in other component (app.js) and render it.

`Component Configuration`
React's `props` system

`Component hierachy`
The App.js component renders instances of other (child) components and passes down configurations to each component. 

`Props`
A system for passing data from a `parent` component (app.js) to `child` component.
The goal is to configure or customize a child component. The Props System allows a parent to customize how a child looks and behaves.

`The two stages of props system`
1. Passing down information from parent to child.
2. The child takes in and uses the information.

`props is Javascript object` <CommentDetail author="Alex"> --> {author: "Alex"}




- Semantic UI CSS framework
- faker.js: generate massive amount of realistic fake data.