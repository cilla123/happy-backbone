import { Model } from 'backbone';

/**
 * 首页模型
 */
export default class IndexModel extends Model {

  defaults() {
    return {
      title: '首页'
    }
  }

}