/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import appConfig from 'app/config';

const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  const { isProd } = appConfig;

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel="stylesheet" href={assets.styles.main} />
        {styles}
      </head>
      <body {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script src="https://webrtc.github.io/adapter/adapter-latest.js" />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {isProd && <script src={assets.javascript.vendor} />}
        <script src={assets.javascript.main} />
      </body>
    </html>
  );
};

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.object,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Html;
