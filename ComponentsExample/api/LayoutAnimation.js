当布局变化时，自动将视图运动到它们新的位置上。

一个常用的调用此API的办法是调用LayoutAnimation.configureNext，然后调用setState。

注意：目前如果要在Android上使用LayoutAnimation，那么还需要在UIManager中明确启用：

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
方法
static configureNext(config: Config, onAnimationDidEnd?: Function) 

计划下一次布局要发生的动画。

@param config 表示动画相应的属性

duration 动画持续时间，单位是毫秒
create, 配置创建新视图时的动画。(参阅 Anim 类型)
update, 配置被更新的视图的动画。(参阅 Anim 类型)
@param onAnimationDidEnd 当动画结束的时候被调用。只在iOS设备上支持。

@param onError 当动画产生错误的时候被调用。只在iOS设备上支持。

static create(duration: number, type, creationProp) 

用来创建configureNext所需的config参数的辅助函数。

属性
Types: CallExpression 

Properties: CallExpression 

configChecker: CallExpression 

Presets: ObjectExpression 

easeInEaseOut: CallExpression 

linear: CallExpression 

spring: CallExpression 
