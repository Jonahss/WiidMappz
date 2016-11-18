module.exports = class Order {
  constructor(message){
    this.location = message.location
    this.id = message.order_id
    this.status = message.status
    this.price = message.total
    this.key = this.id
    this.new = message.new
  }
}
