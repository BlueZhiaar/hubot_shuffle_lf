'use strict';
const rando = require('./index.js');
const assert = require('assert');
//addlistとshowlistのテスト
rando.addlist('献立');
rando.addlist('サイコロ');
assert.deepStrictEqual(rando.showlist(),['献立','サイコロ']);

//selectlistのテスト
rando.selectlist('献立');
assert.deepStrictEqual(rando.nowlist(),'献立');

//dellistのテスト
rando.dellist('サイコロ');
assert.deepStrictEqual(rando.showlist(),['献立']);

//additem,showitemのテスト
rando.selectlist('献立');
rando.additem('ステーキ');
rando.additem('カオマンガイ');
assert.deepStrictEqual(rando.showitem(),['ステーキ','カオマンガイ']);

//delitemのテスト
rando.delitem('ステーキ');
assert.deepStrictEqual(rando.showitem(),['カオマンガイ']);

console.log('テストが正常に完了しました');