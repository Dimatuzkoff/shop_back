import axios from 'axios';
import NodeCache from 'node-cache';
import 'dotenv/config'

// Инициализация кэша с временем жизни (TTL) 1 час (3600 секунд)
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

/**
 * Функция для получения данных с API Новой Почты с кэшированием.
 * @param {string} endpoint - Конечная точка API.
 * @param {object} params - Параметры запроса.
 * @returns {Promise<object>} - Возвращает данные из кэша или API.
 */
export async function getNovaPoshtaData(endpoint, params) {
    // Создаем уникальный ключ для кэша на основе endpoint и параметров
    const cacheKey = `${endpoint}:${JSON.stringify(params)}`;

    // Проверяем, есть ли данные в кэше
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
        console.log('Данные получены из кэша');
        return cachedData;
    }

    try {
        // Выполняем запрос к API Новой Почты
        const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
            apiKey: process.env.NOVA_POSHTA_API_KEY, // Замените на ваш API ключ
            modelName: 'Address',
            calledMethod: endpoint,
            methodProperties: params
        });

        const data = response.data;

        // Сохраняем данные в кэш
        cache.set(cacheKey, data);

        console.log('Данные получены с API и сохранены в кэш');
        return data;
    } catch (error) {
        console.error('Ошибка при запросе к API Новой Почты:', error);
        throw error;
    }
}

// Пример использования функции
// (async () => {
//     try {
//         // Пример запроса: получение списка городов
//         const endpoint = 'getCities';
//         const params = {
//             Language: 'ru'
//         };

//         const data = await getNovaPoshtaData(endpoint, params);
//         console.log('Полученные данные:', data);

//         // Повторный запрос для демонстрации кэширования
//         const cachedData = await getNovaPoshtaData(endpoint, params);
//         console.log('Полученные данные из кэша:', cachedData);
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// })();
