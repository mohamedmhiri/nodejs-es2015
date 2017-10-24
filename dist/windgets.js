'use strict';

const widgets = [];
export const getAll = () => widgets;
export const add = newWidget => widgets.push(newWidget);
export const update = (index, newWidget) => widgets[index] = newWidget;