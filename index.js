function domainName(url) {
  let slashCounter = 0;
  let dotCounter = 0;
  let domain = '';
  url = url.replace('http://', '');
  url = url.replace('https://', '')
  url = url.replace('www.', '')
  for (let i = 0; i < url.length; i++) {
    if (url[i] == '.') {
      break;
    }
    domain += url[i];
  }
  return domain;
}

domainName("http://cfg10zrdaayk4ygb2sqxopshhtd.br/users");