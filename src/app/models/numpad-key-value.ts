export interface INumpadKeyValue {
  value: string;
  keyType: 'number' | 'icon';
  keyColor: string | null;
}

export class NumpadKeyValue implements INumpadKeyValue {
  value = '';
  keyColor: string | null = null;
  keyType: 'number' | 'icon' = 'number';

  constructor() {}
}


export const CLEAR_ICON_VALUE = "backspace";
export const CHECK_ICON_VALUE = "check_circle"