import Plugin from 'stc-plugin';

/**
 * default css compress options
 */
const compressOpts = {
  removeComment: true,
  removeLastSemicolon: true, 
  removeEmptySelector: true, 
  overrideSameProperty: true, 
  shortValue: true, 
  mergeProperty: true, 
  sortProperty: true, 
  sortSelector: true, 
  mergeSelector: true, 
  propertyToLower: true 
};

let options = null;

/**
 * compress css class
 */
export default class CssCompressPlugin extends Plugin {
  /**
   * run
   */
  async run(){
    if(!options){
      options = {...compressOpts, ...this.config.tpl, ...this.options};
    }
    let ast = await this.getAst();
    let instance = this.stc.flkit.getFlkitInstance('CssCompress', ast, options);
    return instance.run(true);
  }
  /**
   * update
   */
  update(ast){
    this.setAst(ast);
  }
  /**
   * default include
   */
  static include(){
    return /\.css$/i;
  }
  /**
   * use cluster
   */
  static cluster(){
    return false;
  }
  /**
   * use cache
   */
  static cache(){
    return true;
  }
}