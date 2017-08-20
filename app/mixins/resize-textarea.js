import Ember from 'ember';
const $ = Ember.$;

// This mixin is for resizing the textareas depending on the size of text inside them.
// It is an adaptation of some code of an ongoing project I am working on: 
// https://github.com/big-data-europe/ember-swarm-ui-frontend/tree/master

export default Ember.Mixin.create({
    recalculateTextareaSize() {
        Ember.run.later(() => {
            $.each($('#textarea-autocomplete'), function () {
                // resizes the height of the textarea.
                let offset = this.offsetHeight - this.clientHeight;
                const resizeTextarea = (el) => {
                    $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
                };
                $(this).on('keyup input', () => {
                    resizeTextarea(this);
                });
            });
        });
    }
});
