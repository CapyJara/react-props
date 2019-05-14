import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Color({ name, rgb, hex }) {
  if(!hex) {
    hex = Number(`${rgb.red}${rgb.green}${rgb.blue}`).toString(16);
    if(hex.length < 2) {
      hex = '0' + hex;
    }
  }
  
  return (
    <dl>
      { name ? 
      <> <dt>Name</dt> <dd>{name}</dd> </> 
        : <> <dt>Name</dt> <dd>{hex}</dd> </>}

      <dt>Red</dt>
      <dd>{rgb.red}</dd>

      <dt>Green</dt>
      <dd>{rgb.green}</dd>

      <dt>Blue</dt>
      <dd>{rgb.blue}</dd>

      { hex && <> <dt>Hex</dt>
      <dd>{hex}</dd> </>}

    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.object.isRequired,
  hex: PropTypes.string,
};
