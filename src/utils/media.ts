import facepaint from 'facepaint';
//
const smallBreakpoint = 730;
const largeBreakpoint = 1920;

export default facepaint([
  `@media(min-width: ${smallBreakpoint}px)`,
  `@media(min-width: ${largeBreakpoint}px)`,
]);
