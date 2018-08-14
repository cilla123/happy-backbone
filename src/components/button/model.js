import { Model } from 'backbone';

/**
 * 按钮模型
 */
export default class ButtonModel extends Model {

  defaults() {
    return {
      text: '按钮'
    }
  }

}