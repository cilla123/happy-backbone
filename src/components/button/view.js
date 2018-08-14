import { View } from 'backbone';
const buttonTpl = require('text-loader!./index.html');
import _ from 'lodash';

/**
 * 按钮组建
 */
export default class Button extends View {

  constructor(){
    super();
    this.tagName = 'button';
    this.template = _.template(buttonTpl);

    this.render();
  }

}