(function() {

  return {
    events: {
      'app.created':       'onAppActivated',// ticket sidebar shown
      'pane.activated':    'onPaneActivated',// nav bar shown

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
    onAppActivated: function(e) {
      if(this.currentLocation() == 'ticket_sidebar') {
        this.switchTo('link');
      }
    },
    onPaneActivated: function(e) {
      var uri = 'https://zendesk-iframe-demo.firebaseapp.com/';
      this.switchTo('home', {uri: uri});
    },


    sendDown: function(e) {
      var text = this.$('.send_down').val();
      this.postMessage('sendDown', { text: text });
    },
    // messages
    onConnected: function(data) {
      // console.log("Connected to the iFrame");
      // services.notify("now groking with the iFrame");
    },

    onRouted: function(e, eData) {
      console.log('Routing event!');
      // alert('Routing event!');
      services.notify('Received App Routing Event, route and params logged to console.');
      console.dir(eData.appRoute);
      console.dir(eData.appParams);
    }
  };

}());
