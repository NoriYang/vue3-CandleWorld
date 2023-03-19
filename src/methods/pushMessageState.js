import emitter from '@/methods/emitter'

export default function (response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`
    })
  } else {
    // 有些是字串或者是陣列，這邊統一格式
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}`,
      content: message.join('、')
    })
  }
}
