import moment from 'moment';
import 'moment/locale/id';

import 'regenerator-runtime';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scripts/utils/fontawesome';

import './scripts/components/home';

import main from './scripts/view/main';
document.addEventListener('DOMContentLoaded', main);
