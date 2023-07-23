export interface SliderParameters {
  /**
   * Через сколько мс переключать на следующий слайд
   * @default 3000
   */
  slidingIntervalMs?: number;

  /**
   * Скорость переключения слайдов
   * @default 1000
   */
  slideTransitionSpeedMs?: number;

  /**
   * Отображать буллеты, показывающие текущий слайд
   * @default true
   */
  showBullets?: boolean;

  /**
   * Можно ли нажимать на буллеты для переключаения слайда
   * @default false
   */
  isClickableBullets?: boolean;

  /**
   * Можно ли двигать слайдерами через сенсорный ввод
   * @default false
   */
  isSwipable?: boolean;
}
