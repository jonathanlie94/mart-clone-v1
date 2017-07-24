### Mart Clone v1

## Folders overview
- public: contains favicon and index.html
- scripts: npm scripts
- src: where the main app lives and most time spent in

## Folders inside src
- components: dumb components that only care about displaying things
- containers: smarter components that has some logic, uses its components under its folder or components/
- modules: basically redux ducks refactored into separate files
- pages: all of the main pages per route of the app
- sampleData: contains mockApi and its data, usually in a real project its non existent
- ui: contains ui-related stuff, such as global styles, theme and CSS helpers
- utils: other stuff such as general helpers

## Future improvements
Things that are not implemented in this boilerplate I created: SSR, code splitting.
