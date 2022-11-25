import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {Array}
 */
const brandFilter = (brand) => {
  return goods.filter((item) => {
    return item.brand === brand;
  });
};

/**
 * @param {string} color
 * @returns {Array}
 */
const colorFilter = (color) => {
  return goods.filter((item) => {
    return item.color === color;
  });
};

/**
 * @param {string} model
 * @returns {Array}
 */
const modelFilter = (model) => {
  return goods.filter((item) => {
    return item.model === model;
  });
};

/**
 * @param {number} memory
 * @returns {Array}
 */
const memoryFilter = (memory) => {
  return goods.filter((item) => {
    return item.memory === memory;
  });
};

/**
 * @param {number} price
 * @returns {Array}
 */
const priceFilter = (price) => {
  return goods.filter((item) => {
    return item.price === price;
  });
};

/**
 * @param {string} country
 * @returns {Array}
 */
const countryFilter = (country) => {
  return goods.filter((item) => {
    return item.country === country;
  });
};

/**
 * @param {string} os
 * @returns {Array}
 */
const osFilter = (os) => {
  return goods.filter((item) => {
    return item.os === os;
  });
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((item) => {
    return (item.price >= from) && (item.price <= to);
  });
};

const minPriceReducer = () => {
  return goods.reduce((Acc, item) => {
    if (Acc > item.price) {
      Acc = item.price;
    }
    return Acc;
  }, goods[0].price);
};

const maxPriceReducer = () => {
  return goods.reduce((Acc, item) => {
    if (Acc < item.price) {
      Acc = item.price;
    }
    return Acc;
  }, goods[0].price);
};

const toMaxSorter = () => {
  return goods.sort((a, b) => {
    if(a.price < b.price) return 1;
    if(a.price > b.price) return -1;
  });
};
const toMinSorter = () => {
  return goods.sort((a, b) => {
    if(a.price > b.price) return 1;
    if(a.price < b.price) return -1;
  });
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
