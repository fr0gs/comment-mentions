import Ember from 'ember';
import ResizeTextareaMixin from '../mixins/resize-textarea';

const $ = Ember.$;

export default Ember.Component.extend(ResizeTextareaMixin, {
    // When the component is already in the DOM, start the automatic textarea resizing and 
    // set the autocomplete plugin for the user mentions
    didInsertElement() {
        this._super();
        this.recalculateTextareaSize();
        this.setAutocomplete();
    },
    setAutocomplete() {
        $('#textarea-autocomplete').textcomplete([{
                // regex to match when user types to execute search.
                match: /(^|\s)@(\w*(?:\s*\w*))$/,

                // executes every time there is a match of the regex.
                search: (query, callback) => {
                    $.getJSON('/api/users', (result) => {
                        const matched = result.data.filter((user) => {
                            //case-insensitive search for usernames
                            const lowerQuery = query.toLowerCase();
                            const { username, name } = user.attributes;
                            return username.toLowerCase().includes(lowerQuery) || name.toLowerCase().includes(lowerQuery);
                        });
                        callback(matched);
                    })
                    .fail((err) => {
                        throw new Error("Call to API failed");
                    });
                },
                // html template to return when there is a hit
                template (hit) {
                    return `<img class="picture" src="${hit.attributes['avatar-url']}"/></div> ${hit.attributes.name}`;
                },
                // replace for this text when selecting an element.
                replace(hit) {
                    return ` ${hit.attributes.name} `;
                }
            }]);
    },
    actions: {
        save() {
            alert('Fake saving the comment');
        },
        cancel() {
            alert('Fake cancelling the comment');
        }
    }
});
