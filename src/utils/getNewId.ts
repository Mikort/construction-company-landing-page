const idsMap = new Map<string, number>();

/**
 * Генерирует ноый уникальный id с заданным префиксом
 * @param prefix - строка с которой будет начинаться новый id
 */
export function getNewId(prefix = "id-") {
  const lastId = idsMap.get(prefix) ?? 0;
  idsMap.set(prefix, lastId + 1);

  return `${prefix}${lastId}`;
}
