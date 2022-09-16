<template>
  <div>
    <TheHeader />
    <TheFooter />
  </div>
</template>

<style>

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

footer .copyright {
    padding: 10px 0;
    border-top: 1px solid #ddd;
}
footer {
    background: linear-gradient(334.93deg, #23033C -57.5%, #2ccfbb 87.13%);
    color: #fff;
    font-size: 16px;
    line-height: 24px;
}
.footer-top {
    overflow: hidden;
    padding: 20px 16px;
}
footer li:not(:last-child) {
    margin-bottom: 6px;
}
footer svg {
    display: inline-block;
}
footer .input-wrap {
    background-color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
footer .btn-submit {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}
footer .btn-submit {
    background-color: #B2B6BD;
    height: 48px;
    line-height: 48px;
    padding: 0 15px;
    color: #Fff;
}
</style>
