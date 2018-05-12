// const styles = require('./styles.css');

module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/fantasybnb-mo/_datepicker.css">
      <link rel="stylesheet" href="blob:http://localhost:8888/f6659a9f-0e10-4b06-b87d-aea0a740dbf0">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;
