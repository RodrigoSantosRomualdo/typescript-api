import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})

/* Setup inicial
Listar todos arquivos a parti do modulo anterior
Pode fazer essa configuração no package.json, mas vamos fazer uma configuração mais avançada.

O que está sendo realizado: Estamos adicionando alias para o src e test que foi o que fizemos no typescript,
mas tem de fazer no código aqui também, pois se for realizado essa etapa apenas no typescript quando compilar
o código não vai ter alias e não vai funcionar e vai quebrar o código de compilar.




*/