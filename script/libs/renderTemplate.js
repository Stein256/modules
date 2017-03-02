function renderTemplate (tpl, hash) {
  for (let key in hash) {
    tpl = tpl.replace(':' + key, hash[key]);
  }
  return tpl;
}