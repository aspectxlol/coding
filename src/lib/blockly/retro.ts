import * as Blockly from "blockly/core";
import { zelos } from 'blockly/core';
// Extend Zelos but override constants
export class RetroRenderer extends zelos.Renderer {
  constructor(name: string) {
    super(name);
  }

  makeConstants_() {
    return new RetroConstantsProvider();
  }
}

class RetroConstantsProvider extends zelos.ConstantProvider {
  constructor() {
    super();

    this.CORNER_RADIUS = 0;
    this.NOTCH_WIDTH = 12;
    this.NOTCH_HEIGHT = 6;
    this.FIELD_TEXT_FONTFAMILY = '"Press Start 2P", monospace';
    this.FIELD_TEXT_FONTWEIGHT = 'bold';
    this.FIELD_TEXT_FONTSIZE = 10;
  }
}
