import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, Weather, useWeather } from '../../../';

export default class Page extends Markdown {
  dependencies = { APILoader, Map, useMap, Weather, useWeather, useRef, useEffect, useState };
  getMdStr = () => import('../../../src/Weather/README.md');
}
