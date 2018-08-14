import { Collection } from 'backbone';
import IndexModel from './modal.js';

/**
 * 首页集合
 */
export default class IndexCollection extends Collection {

  constructor(models, options) {
    super(models, options);
    this.model = IndexModel;
  }

}