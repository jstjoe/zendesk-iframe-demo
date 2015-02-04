(function() {

  return {
    events: {
      'app.activated':'onActivated',
      'app.created':'onCreated',

    },
    firebase: 'https://theeyeofzen.firebaseio.com',
    requests: {
      loaded: function(data) {
        return {
          url: this.firebase + '/agents/' + data.agent + '.json',
          type: 'PATCH',
          contentType: 'JSON',
          data: JSON.stringify({
            date: data.date
          })
        };
      },
      viewedTicket: function(data) {
        return {
          url: this.firebase + '/agents/' + data.agent + '/tickets/' + data.ticket + '.json',
          type: 'PUT',
          contentType: 'JSON',
          data: JSON.stringify({
           date: data.date,
           action: data.action
          })
        };
      },


      viewedUser: function(data) {
        return {
          url: this.firebase + '/agents/' + data.agent + '/users/' + data.user + '.json',
          type: 'PUT',
          contentType: 'JSON',
          data: JSON.stringify({
           date: data.date,
           action: data.action
          })
        };
      }
    },

    onActivated: function() {
      // check the location
      var location = this.currentLocation();
      var data;
      var date = Date.now();

      // if ticket_sidebar
      if(location == 'ticket_sidebar') {
        this.hide();
        data = {
          agent: this.currentUser().id(),
          ticket: this.ticket().id(),
          date: date,
          action: 'viewed'
        };
        this.ajax('viewedTicket', data);

      }
      // if new_ticket_sidebar
      if(location == 'new_ticket_sidebar') {
        this.hide();
        data = {
          agent: this.currentUser().id(),
          ticket: 'new',
          date: date,
          action: 'viewed'
        };
        this.ajax('viewedTicket', data);
      }

      // if user_sidebar
      if(location == 'user_sidebar') {
        this.hide();
        data = {
          agent: this.currentUser().id(),
          user: this.user().id(),
          date: date,
          action: 'viewed'
        };
        this.ajax('viewedUser', data);
      }

      // if nav_bar
      if(location == 'nav_bar') {
        // message all locations of 'loaded'
        data = {
          agent: this.currentUser().id(),
          date: date
        };
        this.ajax('loaded', data);

        // if Admin -> show template

        // else -> this.hide()

      }
        
    },
    onCreated: function() {
      // check the location

      // if ticket_sidebar

      // if new_ticket_sidebar

      // if user_sidebar

      // if nav_bar
        // message all locations of 'loaded'
        // 
    },
    getUsers: function(roles) {
      // fetch users with the given roles
    },

    _location: function() {
      return; // send the current location
    }
  };

}());
