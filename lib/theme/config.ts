export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'blockestate-theme'

export const THEMEABLE_ROUTES = ['/']

export const themeInitScript = `(function(){try{var t='dark';if(${JSON.stringify(THEMEABLE_ROUTES)}.indexOf(location.pathname)!==-1){t=localStorage.getItem('${THEME_STORAGE_KEY}')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}document.documentElement.classList.toggle('dark',t!=='light')}catch(e){}})()`
