module.exports = class Order {
  constructor(message){
    this.location = message.location
    this.orderId = message.order_id
    this.status = message.status
    this.price = message.total
  }
}
