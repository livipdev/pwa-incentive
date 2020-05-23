import React from 'react';
import PropTypes from 'prop-types';

import Logotype from '@livipdev/core/Logotype';

const FooterLogo = ({ variant }) => (
  <Logotype variant={variant} />
);

FooterLogo.propTypes = {
  variant: PropTypes.string,
};

export default FooterLogo;
