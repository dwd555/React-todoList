#1、创建新的react单页应用.</br>
 npm install -g create-react-app</br>
 create-react-app my-app</br>
 cd my-app</br>
 npm start</br>

#2、划分出组件层级</br>
 List为显示的todo列表的组件，包括删除按钮</br>
 InsertButton为输入框与增加按钮</br>
 App为容器，包含了全部，并且用来共享组件间的状态</br>
 
#3、遇到的坑
 1、react中绑定事件不能onClick={this.handlerClick()},这样会立即执行，需要onClick={this.handlerClick}</br>
 2、如果绑定事件需要传递参数的话可以写成：onClick={this.removeHandler.bind(this, index)，而不是onClick={this.removeHandler(index)}</br>
 3、react中绑定事件需要bind(this),如果不绑定this，默认的this为null，或者用箭头函数书写事件<button onClick={(e) => this.handleClick(e)}>，这样也能绑定this</br>
