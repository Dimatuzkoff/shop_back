import mongoose from "mongoose";

// Оголошення схеми для характеристики товару
const CharacteristicsSchema = new mongoose.Schema({
  type: String,
  application: String,
  withBattery: String,
  power: String,
  workingVoltage: String,
  socket: String,
  colorTemperature: String,
  bulbShape: String,
  bulbMaterial: String,
  purpose: String,
  colorTemperatureK: String,
  ledType: String,
  luminousFlux: String,
  packQuantity: String,
  colorRenderingIndexRa: String,
  equivalentIncandescentPower: String,
  heightMm: String,
  diameterMm: String,
  batteryFullChargeDurationHoursNormal: String,
  batteryFullChargeDurationHoursEconomy: String,
  chargeTimeHours: String,
  batteryCycles: String,
  ledLifetimeHours: String,
  lightUsageFromElectricity: String,
  lightUsageFromBattery: String,
  operatingConditionsDescription: String,
  ledManufacturer: String,
  beamAngle: String,
  bulbColor: String,
  warrantyMonths: String,
  brandCountry: String,
  manufacturerCountry: String
});

// Оголошення основної схеми продукту
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: [String], // Массив рядків для зберігання URL зображень
  mainImagePointer: { type: Number, default: 0 },
  category: String,
  subcategory: String,
  characteristics: CharacteristicsSchema // Вставка схеми характеристик
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
