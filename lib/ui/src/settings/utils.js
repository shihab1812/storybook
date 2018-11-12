import { controlOrMetaKey, optionOrAltSymbol } from '../../../components/src/treeview/utils';
import { get, setAll } from './persist';

export const isSetEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));

export const parseKey = e => {
  if (e.altKey) {
    return 'alt';
  }
  if (e.ctrlKey) {
    return 'control';
  }
  if (e.metaKey) {
    return 'meta';
  }
  if (e.shiftKey) {
    return 'shift';
  }
  if (e.key === 'Enter') {
    return 'enter';
  }
  if (e.key === ' ') {
    return 'space';
  }
  if (e.key === 'Escape') {
    return 'escape';
  }
  if (e.key && e.key.length === 1) {
    return e.key.toUpperCase();
  }
  return e.key;
};

export const keyToSymbol = key => {
  if (key === 'alt') {
    return optionOrAltSymbol();
  }
  if (key === 'control') {
    return '⌃';
  }
  if (key === 'meta') {
    return '⌘';
  }
  if (key === 'shift') {
    return '⇧​';
  }
  if (key === 'enter') {
    return '⏎';
  }
  if (key === 'escape') {
    return 'esc';
  }
  if (key === ' ') {
    return 'SPACE';
  }
  if (key === 'ArrowUp') {
    return '▲';
  }
  if (key === 'ArrowDown') {
    return '▼';
  }
  if (key === 'ArrowLeft') {
    return '◀︎';
  }
  if (key === 'ArrowRight') {
    return '▶︎';
  }
  return key.toUpperCase();
};

export const defaultHotkeys = Object.freeze({
  fullScreen: new Set(['F']),
  togglePanel: new Set(['S']), // Panel visibility
  panelPosition: new Set(['D']),
  navigation: new Set(['A']),
  search: new Set(['/']),
  focusNav: new Set(['1']),
  focusIframe: new Set(['2']),
  focusPanel: new Set(['3']),
  prevComponent: new Set(['alt', 'ArrowUp']),
  nextComponent: new Set(['alt', 'ArrowDown']),
  prevStory: new Set(['alt', 'ArrowLeft']),
  nextStory: new Set(['alt', 'ArrowRight']),
  shortcutsPage: new Set(['shift', ',', controlOrMetaKey()]),
  aboutPage: new Set([',']),
});

export const defaultKeyboardShortcuts = {
  fullScreen: ['F'],
  togglePanel: ['S'], // Panel visibiliy
  panelPosition: ['D'],
  navigation: ['A'],
  search: ['/'],
  focusNav: ['1'],
  focusIframe: ['2'],
  focusPanel: ['3'],
  prevComponent: ['alt', 'ArrowUp'],
  nextComponent: ['alt', 'ArrowDown'],
  prevStory: ['alt', 'ArrowLeft'],
  nextStory: ['alt', 'ArrowRight'],
  shortcutsPage: ['shift', ',', controlOrMetaKey()],
  aboutPage: [','],
};

export const parsedLocalStorage = obj =>
  Object.entries(obj).reduce((acc, i) => ({ ...acc, [i[0]]: new Set(i[1]) }), {});

export const initShortcutKeys = () => {
  const shortcutKeys = get('shortcutKeys');

  if (!shortcutKeys) {
    setAll('shortcutKeys', defaultKeyboardShortcuts);
  }
  return shortcutKeys;
};