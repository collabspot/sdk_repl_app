import App from './app';
import CAFClient from 'cadence_app_framework_sdk';

var client = CAFClient.init();

window.cafClient = client;

client.on('app.registered', function(data) {
  var height = '100%';

  new App(client, data);

  if (/_sidebar$/.test(data.context.location)) {
    height = '500px';
  }

  client.invoke('resize', { height: height });
});
