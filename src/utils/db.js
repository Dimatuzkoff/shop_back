import mongoose from 'mongoose';
// Функция для получения следующего значения последовательности
export async function getNextSequenceValue(sequenceName) {
    const counter = await mongoose.connection.collection('counters').findOneAndUpdate(
      { _id: sequenceName },
      { $inc: { sequence_value: 1 } },
      { returnDocument: 'after', upsert: true } // Исправлено: используем returnDocument вместо returnOriginal
    );
    console.log(counter); //{ _id: 'orderId', sequence_value: 16 }
    
    // Проверяем, что документ найден и у него есть значение sequence_value
    if (counter.sequence_value !== undefined) {
      return counter.sequence_value;
    } else {
      throw new Error(`Sequence value not found for ${sequenceName}`);
    }
  }

// async function test() {
//     const number = await getNextSequenceValue('orderId');
//     console.log(number);
// }

// test();


