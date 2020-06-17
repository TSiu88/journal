import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Entry} from './journal';

$(document).ready(function(){
  
  $("#submit").click(function(event){
    event.preventDefault();

    var text = $("#entryText").val();
    var title = $("#titleText").val();

    var entry = new Entry(title, text);

    $("#output").append(`<p><strong> ${title}</strong></p>`);
    $("#output").append(`<p> ${entry.getTeaser()} </p>`);
    $("#output").append(`<p> Word Count: ${entry.wordCount()} </p>`);
    $("#output").append(`<p> Vowels: ${entry.count().vowelCount} </p>`);
    $("#output").append(`<p> Consonants: ${entry.count().consonantCount} </p><hr>`);
  });
  
});