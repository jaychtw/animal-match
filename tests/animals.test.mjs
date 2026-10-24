import {test} from 'node:test';
import assert from 'node:assert/strict';
import {piece,shapes,animalIdentity} from '../src/pieces.ts';
const expected=['rabbit','mouse','hamster','squirrel','dolphin','frog'];
test('six immutable engine types map to distinct required animal identities',()=>{
 assert.deepEqual(shapes.map(s=>animalIdentity[s]),expected);
 assert.equal(new Set(shapes.map(s=>piece(s).match(/<path d="([^"]+)/)[1])).size,6);
});
for(const special of ['horizontal','vertical','bomb','color'])test(`${special} has a contrasting separate marker on all six characters`,()=>{
 for(const shape of shapes){const art=piece(shape,special);assert.match(art,new RegExp(`data-animal="${animalIdentity[shape]}"`));assert.match(art,/r="16"/);assert.match(art,/stroke="#fff" stroke-width="3"/);assert.match(art,new RegExp(`class="piece ${special}"`));}
});
