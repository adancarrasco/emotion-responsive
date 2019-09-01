import { breakpoints } from "./breakpoints";
/**
 *
 * This file uses the breakpoints from Bootstrap. We should develop mobile first
 * then add custom styling based on needs. In the next example we have a Container component
 * that in mobile has width as 100px but for greater than mobile it will have width as
 * 200px
 * @example <caption>Example usage of breakpoint in EmotionJS</caption>
 * import { sm, md } from './tokens/breakpoints'
 * const Container = styled.div`
 *   width: 100px;
 *   ${sm} { // greater than small
 *     width: 200px;
 *   }
 *  // You can add as many custom as you want
 *  ${md} { // greater than medium
 *    width: 300px;
 *  }
 * `
 */

const { _sm, _md, _lg, _xl } = breakpoints;
const media = pixels => `@media (min-width: ${pixels})`;

export const sm = media(_sm);
export const md = media(_md);
export const lg = media(_lg);
export const xl = media(_xl);
