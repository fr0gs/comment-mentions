import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { visit, click, find, fillIn, waitUntil, currentURL, andThen } from 'ember-native-dom-helpers';

moduleForComponent('comment-mentions', 'Integration | Component | comment mentions', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comment-mentions}}`);

  assert.equal(this.$('#textarea-autocomplete').text().trim(), '');
});


test('it successfully inserts some text in the textbox', function(assert) {
  this.render(hbs`{{comment-mentions}}`);  

  fillIn('#textarea-autocomplete', 'textishere').then(() => {
    assert.equal(this.$('#textarea-autocomplete').val().trim(), 'textishere');
  });
});
