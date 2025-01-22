/* eslint-disable sort-keys-fix/sort-keys-fix */
export enum routePaths {
  login = '/',
  panel = '/painel',
  partida = '/partidas',
  functionalityTest = '/painel/teste-de-funcinalidade/:functionalityKeyword',
  home = '/plataforma',
  platform = '/plataforma/:platformKeyword',
  functionality = '/plataforma/:platformKeyword/:functionalityKeyword',
  profile = '/perfil',
  recoverPassword = '/recuperar-senha',
  register = '/cadastro'
}

export const paths = {
  login: '/',
  home: '/plataforma',
  partida: '/partidas',
  panel: '/painel',
  functionalityTest: (functionalityKeyword: string): string =>
    `/painel/teste-de-funcinalidade/${functionalityKeyword}`,
  platform: (platformKeyword: string): string => `/plataforma/${platformKeyword}`,
  functionality: (platformKeyword: string, functionalityKeyword: string): string =>
    `/plataforma/${platformKeyword}/${functionalityKeyword}`,
  profile: '/perfil',
  recoverPassword: '/recuperar-senha',
  register: '/cadastro'
};

export const apiPaths = {
  default: '/default',
  auth: '/login',
  resetPassword: '/reset-password',
  executeFunctionality: '/functionality/execute',
  platform: '/platform',
  player: '/player',
  match: '/match',
  user: '/user',
  favoriteUserFunctionality: '/favorite-user-functionality',
  functionality: '/functionality',
  newFunctionality: '/new-functionality',
  email: 'email'
};
