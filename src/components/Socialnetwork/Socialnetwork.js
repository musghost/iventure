/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Socialnetwork.scss';

function Socialnetwork() {
  return (
    <div className={cx(s.root)}>
      <a target="_blank" className={cx(s.link, s.in)} href="http://www.facebook.com/">&nbsp;</a>
      <a target="_blank" className={cx(s.link, s.fb)} href="http://www.facebook.com/">&nbsp;</a>
      <a target="_blank" className={cx(s.link, s.tw)} href="http://www.facebook.com/">&nbsp;</a>
      <a target="_blank" className={cx(s.link, s.ml)} href="http://www.facebook.com/">&nbsp;</a>
    </div>
  );
}

export default withStyles(s)(Socialnetwork);
