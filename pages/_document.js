import Document, { Html, Head, Main, NextScript } from 'next/document'

// This Head import is different from next/head
// And it should be used in this component only

// Purpose of this document:
// We can add lang to Html
// Having divs outside of application tree for modals/portals
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="modals" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
