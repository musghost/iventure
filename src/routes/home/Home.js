/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

const title = 'React Starter Kit';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}><img src={require('./header.png')} />Deuda</h1>
        <table className={s.table}>
          <thead>
            <tr>
              <th></th>
              <th><span>Tasa mínima</span></th>
              <th><span>Tasa máxima</span></th>
              <th><span>Monto mínimo de inversión</span></th>
              <th><span>Monto máximo de inversión</span></th>
              <th><span>Link</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content</td>
              <td><span className={s.btnOrange}>13.26%</span></td>
              <td><span className={s.btnBlue}>13.26%</span></td>
              <td>$250 MXN</td>
              <td>$50 M MXN</td>
              <td><a className={s.link} href="http://mellow.online" target="_blank"></a></td>
            </tr>
            <tr>
              <td>Content</td>
              <td><span className={s.btnOrange}>13.26%</span></td>
              <td><span className={s.btnBlue}>13.26%</span></td>
              <td>$250 MXN</td>
              <td>$50 M MXN</td>
              <td><a className={s.link} href="http://mellow.online" target="_blank"></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
