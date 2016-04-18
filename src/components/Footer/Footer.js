/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div>
          <a href="http://mellow.cc">
            <img src={require('./afico.png')} />
          </a>
          <a href="http://mellow.cc">
            <img src={require('./kumo.png')} />
          </a>
          <p>© iVenture 2016 /  Todos los derechos reservados  / <a href="mailto:info@iventu.re">info@iventu.re</a></p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
