import Vue from 'vue';

const IMAGE_AVAILABLE_SIZES = {
  ['120x90']: { w: 120, h: 90 },
  ['160x120']: { w: 160, h: 120 },
  ['240x180']: { w: 240, h: 180 },
  ['580x435']: { w: 580, h: 435 },
  ['800x600']: { w: 800, h: 600 },
  ['1920x1080']: { w: 1920, h: 1080 },
};

const IMAGE_DEFAULT_THUMBNAIL_SIZE = '580x435';
const IMAGE_DEFAULT_BIG_SIZE = '1920x1080';

/**
 * Check size is available
 *
 * @param {String} size
 * @returns {Boolean} Check size is available
 */
const isSizeAvailable = (size) => !!IMAGE_AVAILABLE_SIZES[size];

/**
 * Check media is image
 *
 * @param {String} param.media
 * @returns {Boolean} Media is a image
 */
const isImage = ({ media }) => media && media.indexOf('image') > -1;

/**
 * Get media url
 *
 * @param {Object} param
 * @param {String} param.media
 * @param {String} param.size
 * @returns {String} URL
 */
const get = ({ media = null, size = null }) => {
  size = size && isSizeAvailable(size) ? size : null;
  if (!isImage({ media })) return null;
  return media.replace('{0}', size);
};

/**
 * Get media thumb url
 *
 * @param {String} param.media
 * @returns {String} URL
 */
const getThumb = ({ media = null }) => {
  return get({ media, size: IMAGE_DEFAULT_THUMBNAIL_SIZE });
};

/**
 * Get media big url
 *
 * @param {Object} param.media
 * @returns {String} URL
 */
const getBig = ({ media = null }) => {
  return get({ media, size: IMAGE_DEFAULT_BIG_SIZE });
};
const mediaManager = {
  get,
  getThumb,
  getBig,
};

Vue.prototype.$mediaManager = mediaManager;

export default mediaManager;
