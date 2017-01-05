// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { refreshToken } from 'utils/tokenManager';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const localStorage = global.window.localStorage;
const checkNRefreshToken = (isHome) => (nextState, replace, callback) => {
  if (localStorage.token && Date.now() < localStorage.expiresIn - 10000) {
    replace('/login');
    return callback();
  }
  return true;
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/login',
      name: 'login',
      // onEnter: checkNRefreshToken(true),
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AuthLogin/reducer'),
          System.import('containers/AuthLogin/sagas'),
          System.import('containers/AuthLogin'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('auth', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/',
      name: 'index',
      // onEnter: checkNRefreshToken(),
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MainPage/reducer'),
          System.import('containers/MainPage/sagas'),
          System.import('containers/MainPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('index', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      indexRoute: {
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            System.import('containers/Article'),
          ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      childRoutes: [
        {
          path: '/admin',
          name: 'admin',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/ArticleManage/reducer'),
              System.import('containers/ArticleManage/sagas'),
              System.import('containers/ArticleManage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('article', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/article/:articleID',
          name: 'articleID',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/SingleArticle/reducer'),
              System.import('containers/SingleArticle/sagas'),
              System.import('containers/SingleArticle'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('singleArticle', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/archives',
          name: 'archives',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/Archives/reducer'),
              System.import('containers/Archives/sagas'),
              System.import('containers/Archives'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('archives', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '/demo',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Demo'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
