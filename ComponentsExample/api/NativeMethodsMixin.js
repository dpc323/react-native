NativeMethodsMixin提供了一些用于直接访问底层原生组件的方法。这在你需要聚焦(focus)一个视图或者计算它在屏幕上显示的尺寸之类的情况下可能会需要。

这些方法在大部分React Native提供的默认的组件中都可以使用。注意，它们不能在一些复合组件（并非直接由原生视图构成）中使用，这可能包括你自己在应用中定义的绝大部分组件。想了解更多信息，可以参阅直接操作。

方法
static measure(callback: MeasureOnSuccessCallback) 

计算指定视图在屏幕上显示的位置和尺寸，通过一个异步回调返回计算的结果。如果成功，回调函数会被调用，并带有以下参数：：

x
y
width
height
pageX
pageY
注意这些信息直到原生渲染完成之前都不能使用。如果你希望尽快获取视图的位置和尺寸信息，考虑使用onLayout属性来替代。

static measureLayout(relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail: () => void) 

与measure()函数类似，不过计算的是相对指定祖先节点relativeToNativeNode的位置和尺寸。这意味着返回的x, y是相对于指定祖先视图的。

要找到一个组件的原生节点的ID，一般做法是调用React.findNodeHandle(component)。

static setNativeProps(nativeProps: Object) 

这个函数直接发送属性到原生代码。这些属性不会参与后续的对比过程——这意味着如果你不在下一次render中包含这些属性，这些属性还会保持有效(参见直接操作)。

static focus() 

请求聚焦指定的输入框或者视图。具体的效果要取决于平台和视图的类型。

static blur() 

移除指定的输入框或者视图的焦点。这是focus()的相反操作。。
