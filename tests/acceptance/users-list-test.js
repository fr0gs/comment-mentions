import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'comment-mentions/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users list');

// This is not the best way because I had to force all three key events to
// actually know which one triggered the dropdown, and also the API should be mocked
// to have an additional test that does not depend on a living server.
test('it successfully generates 10 users', function(assert) {
  visit('/');
  fillIn('#textarea-autocomplete', '@ja');
  triggerEvent('#textarea-autocomplete', 'keyup');
  triggerEvent('#textarea-autocomplete', 'keypress');
  triggerEvent('#textarea-autocomplete', 'keydown');

  andThen(function() {
    Ember.run.later(() => assert.equal(Ember.$('.dropdown-menu').children().length, 10), 5000);
  });
});

test('it successfully gets James Powell as the first user', function (assert) {
  visit('/');
  fillIn('#textarea-autocomplete', '@ja');
  triggerEvent('#textarea-autocomplete', 'keyup');
  triggerEvent('#textarea-autocomplete', 'keypress');
  triggerEvent('#textarea-autocomplete', 'keydown');

  andThen(function () {
    Ember.run.later(() => assert.equal(Ember.$('.dropdown-menu li a')[0].innerText.trim(), 'James Powell'), 5000);
  });
});


test('it successfully generates an undefined dropdown', function (assert) {
  visit('/');
  Ember.run.later(() => click('.index'), 1500);
  fillIn('#textarea-autocomplete', '@anz').then(() => {
    triggerEvent('#textarea-autocomplete', 'keyup');
    triggerEvent('#textarea-autocomplete', 'keypress');
    triggerEvent('#textarea-autocomplete', 'keydown');
  });

  andThen(function () {
    Ember.run.later(() => assert.equal(Ember.$('.dropdown-menu li a').length, 0), 2000);
  });
});
