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
import s from './Header.scss';
import Link from '../Link';
import Socialnetwork from '../Socialnetwork';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Socialnetwork />
        <img src={require('./iVenture.png')} width="171" height="32" alt="iVenture" />

        <div className={s.comparative}>
          <h1>Compara inversiones<br />Selecciona tu mejor opción</h1>
          <p><span className={s.orange}>Aqui un texto que explique la plataforma</span> que reúne a inversionistas ángeles, fondos de inversión y fondos gubernamentales con los mejores proyectos de alto impacto en México.</p>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
