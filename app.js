(function() {

  return {
    events: {
      'pane.activated':    'onPaneActivated',

      'iframe.roger':'onConnected',
      'click button.send_down':'sendDown',

      'app.route.changed':'onRouted'

    },
    requests: {
      requestSomething: function() {
        return {

        };
      }
    },

    onPaneActivated: function(e) {
      // var uri = helpers.fmt('https://%@.zendesk.com/api/v2/apps/%@/assets/iframe.html', this.currentAccount().subdomain(), '64483');//this.installationId()
      var uri = 'https://zendesk-iframe-demo.firebaseapp.com/';
      this.switchTo('home', {uri: uri});
    },


    sendDown: function(e) {
      var text = this.$('.send_down').val();
      this.postMessage('sendDown', { text: text });
    },
    // messages
    onConnected: function(data) {
      services.notify("now groking with the iFrame");
      // console.dir(data);
    },

    onRouted: function(e, eData) {
      console.log('Routing event!');
      // alert('Routing event!');
      console.dir(eData.appRoute);
      console.dir(eData.appParams);
    }
  };

}());
