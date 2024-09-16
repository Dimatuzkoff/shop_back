import mongoose from "mongoose";

// Оголошення схеми для характеристики товару
const CharacteristicsSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: String,
    warranty: String,
    color: String,
    weight: String,
    dimensions: String,
    material: String,
    power: String,
    energy_class: String,
    voltage: String,
    battery_life: String,
    connectivity: String,
    interface: String,
    wireless: String,
    screen_type: String,
    screen_resolution: String,
    screen_diagonal: String,
    processor: String,
    ram: String,
    storage_capacity: String,
    graphics_card: String,
    camera_resolution: String,
    audio_system: String,
    water_resistance: String,
    dust_resistance: String,
    bluetooth: String,
    wifi: String,
    usb_ports: String,
    hdmi_ports: String,
    operating_system: String,
    touchscreen: String,
    smart_features: String,
    voice_control: String,
    remote_control: String,
    motion_detection: String,
    video_recording: String,
    charging_time: String,
    battery_capacity: String,
    noise_level: String,
    cooling_system: String,
    lighting: String,
    child_lock: String,
    energy_saving_mode: String,
    temperature_range: String,
    humidity_control: String,
    door_open_indicator: String,
    programmable_settings: String
});


// Оголошення основної схеми продукту
const ProductSchema = new mongoose.Schema({
    name: String,
    oldPrice: Number,
    price: Number,
    description: String,
    image: [String], // Массив рядків для зберігання URL зображень
    mainImagePointer: { type: Number, default: 0 },
    category: String,
    subcategory: String,
    quantitiesInStore: { type: Number, default: 0 },
    characteristics: CharacteristicsSchema // Вставка схеми характеристик
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
