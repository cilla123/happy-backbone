import { Collection } from 'backbone';
import ButtonModel from './model.js';

/**
 * 按钮集合
 */
export default class IndexCollection extends Collection {

  constructor(models, options) {
    super(models, options);
    this.model = ButtonModel;
  }

}