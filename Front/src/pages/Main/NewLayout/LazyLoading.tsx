import React, { lazy } from 'react';

export const FirstSection = lazy(() => import ('./Sections/sec1/FirstSection').then(module => {
  return {default: module.FirstSection};
}));

export const SecondSection = lazy(() => import ('./Sections/sec2/SecondSection').then(module => {
  return {default: module.SecondSection};
}));

export const ThirdSection = lazy(() => import ('./Sections/sec3/ThirdSection').then(module => {
  return {default: module.ThirdSection};
}));

export const FifthSection = lazy(() => import ('./Sections/sec5/FifthSection').then(module => {
  return {default: module.FifthSection};
}));

export const NewCalendar = lazy(() => import ('./Components/NewCalendar/NewCalendar').then(module => {
  return {default: module.Calendar};
}));

export const SeventhSection = lazy(() => import ('./Sections/SeventhSection/SevenSection').then(module => {
  return {default: module.SeventhSection};
}));

export const FooterSection = lazy(() => import ('./Sections/FooterSection/FooterSection').then(module => {
  return {default: module.FooterSection};
}));
