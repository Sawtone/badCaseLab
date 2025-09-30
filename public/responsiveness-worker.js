// public/responsiveness-worker.js

self.onmessage = function(event) {
    // 当从主线程接收到 'CHECK_RESPONSIVENESS' 消息时
    if (event.data === 'CHECK_RESPONSIVENESS') {
      
      // 我们不立即回复，而是安排一个宏任务。
      // 这个 postMessage 只有在主线程完成其当前的阻塞任务后，
      // 并且能够处理事件队列时，才能被主线程接收到。
      setTimeout(() => {
        self.postMessage('MAIN_THREAD_IS_FREE');
      }, 5000); // 50ms的延迟确保这是一个低优先级的任务
    }
  };