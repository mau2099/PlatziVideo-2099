import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';
import Carousel from './components/Carousel';
import Search from './components/Search';

ReactDom.render(<Search/>, document.getElementById('app'))