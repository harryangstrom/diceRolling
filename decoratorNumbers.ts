export function Decimal(constructor) {
  constructor.prototype.constructor.prototype.dec = true;
  return constructor;
} 

export function Number(constructor) {
  constructor.prototype.constructor.prototype.num = true;
  return constructor;
}