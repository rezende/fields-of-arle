import grocer from './grocer'
import woolWeaver from './woolWeaver'
import colonist from './colonist'
import tanner from './tanner'
/*

These should all accept a hash containing { G, ctx, args }, and return G

*/

export default {
  summerGrocer: grocer,
  winterGrocer: grocer,
  woolWeaver,
  colonist,
  tanner,
}