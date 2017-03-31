"use strict";



define('phumblr/adapters/application', ['exports', 'phumblr/config/environment', 'active-model-adapter', 'ember'], function (exports, _phumblrConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _phumblrConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('phumblr/app', ['exports', 'ember', 'phumblr/resolver', 'ember-load-initializers', 'phumblr/config/environment'], function (exports, _ember, _phumblrResolver, _emberLoadInitializers, _phumblrConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _phumblrConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _phumblrConfigEnvironment['default'].podModulePrefix,
    Resolver: _phumblrResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _phumblrConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('phumblr/components/auth-router', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated')
  });
});
define('phumblr/components/change-password-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],
    passwords: {},
    init: function init() {
      this._super.apply(this, arguments);
      this.set('passwords', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define('phumblr/components/email-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('phumblr/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('phumblr/components/hamburger-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define('phumblr/components/my-application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define('phumblr/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define('phumblr/components/password-confirmation-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('phumblr/components/password-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('phumblr/components/post-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save() {
        this.sendAction('save', this.get('post'));
      },
      cancel: function cancel() {
        this.get('post').rollbackAttributes();
        this.sendAction('cancel');
      }
    }
  });
});
define('phumblr/components/post-index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    actions: {
      deletePost: function deletePost() {
        this.sendAction('deletePost', this.get('post'));
      },
      editPost: function editPost() {
        this.sendAction('editPost', this.get('post'));
      }
    }

  });
});
define('phumblr/components/sign-in-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('phumblr/components/sign-up-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],
    credentials: {},

    init: function init() {
      this._super.apply(this, arguments);
      this.set('credentials', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
        history.back();
      }
    }
  });
});
define('phumblr/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('phumblr/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('phumblr/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('phumblr/helpers/app-version', ['exports', 'ember', 'phumblr/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _phumblrConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _phumblrConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('phumblr/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('phumblr/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("phumblr/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('phumblr/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'phumblr/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _phumblrConfigEnvironment) {
  var _config$APP = _phumblrConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('phumblr/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('phumblr/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('phumblr/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('phumblr/initializers/export-application-global', ['exports', 'ember', 'phumblr/config/environment'], function (exports, _ember, _phumblrConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_phumblrConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _phumblrConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_phumblrConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('phumblr/initializers/flash-messages', ['exports', 'ember', 'phumblr/config/environment'], function (exports, _ember, _phumblrConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _phumblrConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('phumblr/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('phumblr/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('phumblr/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('phumblr/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('phumblr/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("phumblr/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('phumblr/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    body: _emberData['default'].attr('string'),
    user: _emberData['default'].belongsTo('user'),
    editable: _emberData['default'].attr('boolean')
  });
});
define('phumblr/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    posts: _emberData['default'].hasMany('post')
  });
});
define('phumblr/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('phumblr/router', ['exports', 'ember', 'phumblr/config/environment'], function (exports, _ember, _phumblrConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _phumblrConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('users');
    this.route('posts');
    this.route('new');
    this.route('post', { path: '/posts/:post_id' }, function () {
      this.route('edit');
    });
    this.route('page-not-found', { path: '/*wildcard' });
  });

  exports['default'] = Router;
});
define('phumblr/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define('phumblr/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        // console.log('error', reason);
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });
        var noContent = reason.errors && reason.errors.some(function (error) {
          return error.status === '404';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-up');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }
        if (noContent) {
          this.transitionTo('/page-not-found');
        }

        return false;
      }
    }
  });
});
define('phumblr/routes/change-password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      if (!this.get('isAuthenticated')) {
        this.transitionTo('index');
      }
    },

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('phumblr/routes/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    model: function model() {
      if (this.get('isAuthenticated')) {
        return this.get('store').createRecord('post');
      } else {
        this.transitionTo('page-not-found');
      }
    },
    actions: {
      createPost: function createPost(post) {
        var _this = this;

        post.save().then(function () {
          return _this.transitionTo('posts');
        });
      },
      cancel: function cancel() {
        history.back();
      }
    }
  });
});
define('phumblr/routes/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('phumblr/routes/post', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      // console.log("got to post route");
      // let x = this.get('store').findRecord('post', params.post_id);
      // console.log(x);
      return this.get('store').findRecord('post', params.post_id);
    }
  });
});
define('phumblr/routes/post/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      editPost: function editPost(post) {
        var _this = this;

        post.save().then(function () {
          return _this.transitionTo('posts');
        });
      },
      cancel: function cancel() {
        history.back();
      }

    }
  });
});
define('phumblr/routes/posts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // auth: Ember.inject.service(),
    // isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
    // userId: JSON.parse(window.localStorage.getItem('storage:auth')).id,

    model: function model() {
      var store = this.get('store');
      store.unloadAll('post');
      return store.findAll('post');
    },
    actions: {
      deletePost: function deletePost(post) {
        post.destroyRecord();
      }
    }
  });
});
define('phumblr/routes/sign-in', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('phumblr/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          credentials.password = null;
          credentials.email = null;
          credentials.passwordConfirmation = null;
          _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('phumblr/routes/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // let y = this.get('store').findAll('user');
      // console.log(y);
      return this.get('store').findAll('user');
    }
  });
});
define('phumblr/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('phumblr/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax', 'phumblr/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _phumblrConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _phumblrConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('phumblr/services/auth', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('phumblr/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('phumblr/storages/auth', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define("phumblr/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1HVbIXKW", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/about.hbs" } });
});
define("phumblr/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OUJ5Gs0V", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/application.hbs" } });
});
define("phumblr/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jEuev3iX", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/change-password.hbs" } });
});
define("phumblr/templates/components/auth-router", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "t0zvA3QI", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"link-to\"],[\"posts\"],null,0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/auth-router.hbs" } });
});
define("phumblr/templates/components/change-password-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RhdaqM+z", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/change-password-form.hbs" } });
});
define("phumblr/templates/components/email-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GYqe+XWm", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/email-input.hbs" } });
});
define("phumblr/templates/components/hamburger-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "eYw0Ixx0", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/hamburger-menu.hbs" } });
});
define("phumblr/templates/components/my-application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "az37md0H", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"posts\"],[[\"class\"],[\"navbar-brand\"]],9],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,8],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,5,3],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"phumblr-header\"],[\"flush-element\"],[\"text\",\"Phumblr\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"link-to\"],[\"sign-up\"],[[\"class\"],[\"navbar-brand\"]],2],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"sign-in\"],[[\"class\"],[\"navbar-brand\"]],1],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Users\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Create Post\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"block\",[\"link-to\"],[\"new\"],[[\"class\"],[\"navbar-brand\"]],7],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"users\"],[[\"class\"],[\"navbar-brand\"]],6],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"phumblePheed\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/my-application.hbs" } });
});
define("phumblr/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wwezMJsW", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/navbar-header.hbs" } });
});
define("phumblr/templates/components/password-confirmation-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nz0QWbrO", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/password-confirmation-input.hbs" } });
});
define("phumblr/templates/components/password-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2EpzJyQx", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/password-input.hbs" } });
});
define("phumblr/templates/components/post-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IMm2ql4F", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"lable\",[]],[\"flush-element\"],[\"text\",\"Title\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"value\",\"required\",\"maxlength\",\"placeholder\"],[\"form-control\",[\"get\",[\"post\",\"title\"]],\"required\",\"30\",\"30 character limit\"]]],false],[\"text\",\"\\n\"],[\"open-element\",\"lable\",[]],[\"flush-element\"],[\"text\",\"Body\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"rows\",\"required\",\"spellcheck\"],[\"form-control\",[\"get\",[\"post\",\"body\"]],20,\"required\",\"spellcheck\"]]],false],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"cancel\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/post-form.hbs" } });
});
define("phumblr/templates/components/post-index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4LnVVvgb", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"post-index\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron jumbotron-fluid\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"post\",[\"get\",[\"post\"]]],null,2],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"user\",\"post\",\"id\"]],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"post\",\"editable\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm\"],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deletePost\"]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"post.edit\",[\"get\",[\"post\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"post\",\"title\"]],false]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/post-index.hbs" } });
});
define("phumblr/templates/components/sign-in-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XdoCCt/S", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/sign-in-form.hbs" } });
});
define("phumblr/templates/components/sign-up-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "i6R4CaSS", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/components/sign-up-form.hbs" } });
});
define("phumblr/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Z93tX6wM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"static-attr\",\"jumbotron-fluid\",\"\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"welcome to phumblr\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Post your favorite rants and copypastas here! \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/index.hbs" } });
});
define("phumblr/templates/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XONhwEAA", "block": "{\"statements\":[[\"append\",[\"helper\",[\"post-form\"],null,[[\"post\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"createPost\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/new.hbs" } });
});
define("phumblr/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "T7ebXIJs", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"page not found\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Go here instead\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/page-not-found.hbs" } });
});
define("phumblr/templates/post", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "s+I3hxPy", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"Phumble\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"body\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"posts\"],null,0],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/post.hbs" } });
});
define("phumblr/templates/post/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7HJ8IHCT", "block": "{\"statements\":[[\"append\",[\"helper\",[\"post-form\"],null,[[\"post\",\"save\",\"cancel\"],[[\"get\",[\"model\"]],\"editPost\",\"cancel\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/post/edit.hbs" } });
});
define("phumblr/templates/posts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5YvSfISB", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"phumbles\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"post-index\"],null,[[\"post\",\"deletePost\"],[[\"get\",[\"post\"]],\"deletePost\"]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[\"post\"]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/posts.hbs" } });
});
define("phumblr/templates/sign-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JwMjHbom", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/sign-in.hbs" } });
});
define("phumblr/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q10nK6o7", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\",\"reset\"],[\"signUp\",\"reset\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/sign-up.hbs" } });
});
define("phumblr/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "W68QY9Nd", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\" Here are some other phumblr users from accross the globe\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"back\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "phumblr/templates/users.hbs" } });
});


define('phumblr/config/environment', ['ember'], function(Ember) {
  var prefix = 'phumblr';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("phumblr/app")["default"].create({"name":"phumblr","version":"0.0.0+1bede200"});
}
//# sourceMappingURL=phumblr.map
