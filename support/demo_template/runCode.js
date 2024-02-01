window.runCode = function (lang, code, args, outputConsume) {
  // eslint-disable-next-line no-undef
  $.ajax({
    url: 'http://localhost:8080/run',
    type: 'POST',
    data: JSON.stringify({ lang, code }),
    contentType: 'application/json; charset=utf-8',
    success: outputConsume
  })
}
