import React, { lazy } from 'react';

export const FirstSection = lazy(() => import ('./Sections/FirstSection/FirstSection').then(module => {
  return {default: module.FirstSection};
}));

export const SecondSection = lazy(() => import ('./Sections/SecondSection/SecondSection').then(module => {
  return {default: module.SecondSection};
}));

export const ThirdSection = lazy(() => import ('./Sections/ThirdSection/ThirdSection').then(module => {
  return {default: module.ThirdSection};
}));

export const FifthSection = lazy(() => import ('./Sections/FifthSection/FifthSection').then(module => {
  return {default: module.FifthSection};
}));

export const Calendar = lazy(() => import ('../VizeLayout/Components/Calendar/Calendar').then(module => {
  return {default: module.Calendar};
}));

export const SeventhSection = lazy(() => import ('./Sections/SeventhSection/SevenSection').then(module => {
  return {default: module.SeventhSection};
}));

export const FooterSection = lazy(() => import ('./Sections/FooterSection/FooterSection').then(module => {
  return {default: module.FooterSection};
}));
