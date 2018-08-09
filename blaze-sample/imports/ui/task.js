import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './task.html';
 
Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    // Tasks.update(this._id, {
    //   $set: { checked: ! this.checked },
    // });

	Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    // Tasks.remove(this._id);
    Meteor.call('tasks.remove', this._id);

  },
  'click .btn_save'(){
    newName = $(".name_"+this._id).val();
    Meteor.call('tasks.update', this._id, newName);
  },

});
Template.task.rendered = function() {
	$(document).on("click","li .btn_edit", function() {
		$(this).closest("li").find(".formedit").addClass("show");
		$(this).closest("li").find(".task_info").addClass("hide");
	});
}
