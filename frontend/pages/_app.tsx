import App, { Container } from 'next/app';
import React from 'react';
import theme from '@public/styles/themes';
import GlobalStyles from '@public/styles/global-styles';
import { ThemeProvider } from '@public/styles/themed-components';

import Layout from '@components/Layout';

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default ReactApp;