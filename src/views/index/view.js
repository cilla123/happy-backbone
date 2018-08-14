import { View } from 'backbone';
const indexTpl = require('text-loader!./index.html');
import _ from 'lodash';

/**
 * 首页视图
 */
export default class IndexView extends View {

  constructor(){
    super();
    this.tagName = '#app';
    this.template = _.template(indexTpl);
  }

  

}