供的参数是一个PromiseTask， 那么即便它是异步的它也会阻塞任务队列，直到它（以及它所有的依赖任务，哪怕这些依赖任务也是异步的）执行完毕后，才会执行下一个任务。

默认情况下，排队的任务会在一次setImmediate方法中依序批量执行。如果你调用了setDeadLine方法并设定了一个正整数值，则任务只会在设定的时间到达后开始执行。在此之前，任务会通过setTimeout来挂起并阻塞其他任务执行，这样可以给诸如触摸交互一类的事件留出时间，使应用可以更快地响应用户。

方法
static runAfterInteractions(callback: Function) 

安排一个函数在所有的交互和动画完成之后运行。返回一个可取消的promise。

static createInteractionHandle() 

通知管理器有某个动画或者交互开始了。

static clearInteractionHandle(handle: Handle) 

通知管理器有某个动画或者交互已经结束了。

static setDeadline(deadline: number) 

如果设定了一个正整数值，则会使用setTimeout来挂起所有尚未执行的任务。在eventLoopRunningTime到达设定时间后，才开始使用一个setImmediate方法来批量执行所有任务。

属性
Events: CallExpression 

addListener: CallExpression 
