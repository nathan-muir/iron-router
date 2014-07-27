Package.describe({
  summary: 'Routing specifically designed for Meteor',
  version: '0.9.1'
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR-CORE@0.9.0-rc12');

  api.use('reactive-dict', ['client', 'server']);
  api.use('deps', ['client', 'server']);
  api.use('underscore', ['client', 'server']);
  api.use('ejson', ['client', 'server']);
  api.use('jquery', 'client');
  api.use('webapp', 'server');
  api.use('ui', 'client');

  // gives us dynamic layouts
  api.use('iron:layout@0.3.0');

  api.addFiles('lib/utils.js', ['client', 'server']);
  api.addFiles('lib/route.js', ['client', 'server']);
  api.addFiles('lib/route_controller.js', ['client', 'server']);
  api.addFiles('lib/router.js', ['client', 'server']);

  api.addFiles('lib/client/location.js', 'client');
  api.addFiles('lib/client/router.js', 'client');
  api.addFiles('lib/client/wait_list.js', 'client');
  api.addFiles('lib/client/hooks.js', 'client');
  api.addFiles('lib/client/route_controller.js', 'client');
  api.addFiles('lib/client/ui/helpers.js', 'client');

  api.addFiles('lib/server/route_controller.js', 'server');
  api.addFiles('lib/server/router.js', 'server');

  Npm.depends({connect: '2.9.0'});

  api.export('RouteController', ['client', 'server']);
  api.export('Route', ['client', 'server']);
  api.export('Router', ['client', 'server']);
  api.export('IronLocation', 'client');

  api.export('Utils', ['client', 'server'], {testOnly: true});
  api.export('IronRouter', ['client', 'server'], {testOnly: true});
  api.export('WaitList', 'client', {testOnly: true});
});

Package.onTest(function (api) {
  api.use('iron:router', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('reactive-dict', ['client', 'server']);
  api.use('underscore');

  api.addFiles('test/test_helpers.js', ['client', 'server']);

  // client and server
  api.addFiles('test/both/route.js', ['client', 'server']);
  api.addFiles('test/both/route_controller.js', ['client', 'server']);
  api.addFiles('test/both/router.js', ['client', 'server']);
  api.addFiles('test/both/utils.js', ['client', 'server']);

  // server only
  api.addFiles('test/server/router.js', 'server');

  // client only
  api.addFiles('test/client/mocks.js', 'client');
  api.addFiles('test/client/router.js', 'client');
  api.addFiles('test/client/route_controller.js', 'client');
  api.addFiles('test/client/wait_list.js', 'client');
});
