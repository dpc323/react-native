static cropImage(uri, cropData, success, failure) #

根据指定的URI参数剪裁对应的图片。如果URI指向一个远程图片，则首先会自动下载该图片。如果图片无法下载或读取，则调用failure回调函数。

如果剪裁成功完成，则剪裁好的图片会被存放在ImageStore中，同时success回调函数中返回的URI参数会指向ImageStore中的此图片。请记得在完成处理逻辑后删除ImageStore中的图片。
