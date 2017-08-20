import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
    username: DS.attr('string'),
    avatar_url: DS.attr('string'),
    name: DS.attr('string'),
});
