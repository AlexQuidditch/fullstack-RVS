import filesize from 'filesize';
import { shortDate , longDate } from './date-formats.js';

function capitalize (value) {
  if (!value) return null;
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
};

function toShortLocaleDate (date) {
  if (!date) return 'нет данных';
  return new Date(date).toLocaleString('ru-RU', shortDate);
};

function toLocaleDate (date) {
  if (!date) return 'нет данных';
  return new Date(date).toLocaleString('ru-RU', longDate);
};

function currencyFormat ( value , locale ) {
  if (!value) return null;
  return Number(value).toLocaleString('ru-RU', { style: 'currency', currency: locale });
};

function toReadableString (value) {
  if (!value) return null;
  return filesize(Number(value));
};

export { capitalize , toShortLocaleDate , toLocaleDate , currencyFormat , toReadableString  };
