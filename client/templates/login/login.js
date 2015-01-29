Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      username: template.find("#signup-username").value,
      password: template.find("#signup-password").value,
      profile: {
        name: template.find("#signup-name").value
        // Other required field values can go here
      }
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      }
    });
  }
});

Template.loginForm.events({
  "submit .form-signin": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#inputEmail").value,
      template.find("#inputPassword").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
        }
      }
    );
    // window.location.href="/pipe";
  }
});

Template.logoutForm.events({
  "click #logout": function(event, template) {
    Meteor.logout(function(error) {
      if (error) {
        alert('Logout impossible')
      }
    });
  }
});