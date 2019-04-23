import React from 'react';
import Blockly from 'node-blockly/browser';

const Block = (props) => {
  const id = props.name.replace(/[ .]/g, '-').toLowerCase() || Math.random().toString().replace('.', '');
  
  const func = props.func;
  // If the block is truthy
  if (func) {
    // If it has a block generator, add the block
    if (func.block && typeof Blockly.Blocks !== 'undefined') {
      Blockly.Blocks[id] = func.block;
    }

    // If it has a javascript generator, add the generator
    if (func.generator && typeof Blockly.JavaScript !== 'undefined') {
      Blockly.JavaScript[id] = func.generator;
    }
  }

  // Add the block to the list of blocks in the category
  return (
    <block is="block" type={id} key={id}></block>
  )
}

export {
  Block
}