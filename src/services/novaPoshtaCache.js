import axios from 'axios';
import NodeCache from 'node-cache';
import 'dotenv/config';

// Инициализация кэша с временем жизни (TTL) 1 час (3600 секунд)
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

/**
 * Функция для получения данных с API Новой Почты с кэшированием.
 * @param {string} endpoint - Конечная точка API.
 * @param {object} params - Параметры запроса.
 * @returns {Promise<object>} - Возвращает данные из кэша или API.
 */
export async function getNovaPoshtaData(params) {
    const cacheKey = `${params.calledMethod}:${JSON.stringify(params)}`;

    console.log(`Ключ кэша: ${cacheKey}`); // Логируем ключ кэша
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
        console.log('Данные получены из кэша');
        return cachedData;
    }

    try {
        console.log('Отправка запроса к API с параметрами:', params); // Логируем параметры запроса
        const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
            apiKey: process.env.NOVA_POSHTA_API_KEY,
            ...params
        });

        if (response.data.success) { // Добавляем проверку на успешный статус
            const data = response.data.data;
            cache.set(cacheKey, data);
            console.log('Данные получены с API и сохранены в кэш');
            return data;
        } else {
            console.error('Ошибка API Новой Почты:', response.data.errors);
            throw new Error(response.data.errors.join(', '));
        }
    } catch (error) {
        console.error('Ошибка при запросе к API Новой Почты:', error.message);
        throw new Error('Не удалось получить данные с API Новой Почты');
    }
}