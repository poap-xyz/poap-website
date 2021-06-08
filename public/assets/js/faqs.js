import $ from 'jquery'
import faqs from '../json/faqs.json'

// This function takes the formatted HTML
// and inserts it into the document as
// 'child' HTML of the specified element.
function insertHTML(id, html) {
  var el = document.getElementById(id);
  if(!el) {
    console.error('Couldn\'t find element with id ' + id + '. Append HTML elements failed.');
    return;
  }
  
  el.innerHTML += html;
}

function insertAccordion(parentId, section) {
  const accordionDivId = section.title.replaceAll(' ','');
  const accordionId = accordionDivId+'-content';
  const html = [
    '<div id="'+ accordionDivId +'">\
      <p class="subtitle faq-section-title">'+ section.title +'</p>',
      '<div class="accordion" id="',
      accordionId,
      '"></div>',
    '</div>',
  ].join('');
  insertHTML(parentId, html);

  // insert items with the data from 'faqs' json object
  // TODO: insert items from faqs into accordionId
  // console.log(faqs);
  for(var qaKey in section.questions) {
    const qa = section.questions[qaKey];
    insertAccordionItem(accordionId, qaKey, qa.question, qa.answer);
  }
}

function safeString(str) {
  // TODO: convert links to html links
  const urlRegex = /((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w-#@]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?/
  // const urlRegex1 = new RegExp(
  //   "\[([^\]]*)\]\("+
  //   urlRegex.source+
  //   "\)"
  // , 'g');
  const urlRegex2 = new RegExp(
    "\("+
    urlRegex.source+
    "\)"
  , 'g');
  // str = str.replace(urlRegex2, '<a href="$1">$1</a>');
  str = str.replace(/\[([^\]\"]*)\]\(([^\)\"]*)\)/g, '<a href="$2">$1</a>');
  // str = str.replace(urlRegex1, '<a href="$2">$1</a>');
  
  // convert \n to <br>
  str = str.replace(/\n/g, '<br>');
  return str;
}

function insertAccordionItem(parentId, itemId, title, content) {
  const html = [
    '<div class="accordion-item">\
      <div class="accordion-header" id="heading-'+ parentId + itemId +'">\
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"\
          data-bs-target="#collapse-'+ parentId + itemId +'" aria-expanded="true"\
          aria-controls="collapse-'+ parentId + itemId +'">\
          <h5>',
          safeString(title),
          '</h5>\
        </button>\
      </div>\
      <div id="collapse-'+ parentId + itemId +'" class="accordion-collapse collapse"\
        aria-labelledby="heading-'+ parentId + itemId +'">\
        <div class="accordion-body">\
          <p>',
            safeString(content),  
            // Welcome! We've been waiting for you. In fact, we have prepared some articles for you to get an idea on what POAP is:
            // <br>
            // The core value proposition of POAP:
            // <a href="https://medium.com/@poap/the-core-value-proposition-of-poap-explained-dc379aca332d">https://medium.com/@poap/the-core-value-proposition-of-poap-explained-dc379aca332d</a>
            // <br>
            // What is POAP and how do I use it:
            // <a href="https://tomso11.medium.com/what-is-poap-and-how-do-i-use-it-21ba692b918">https://tomso11.medium.com/what-is-poap-and-how-do-i-use-it-21ba692b918</a>
          '</p>\
        </div>\
      </div>\
    </div>'
  ].join('');
  insertHTML(parentId, html);
}

(function ($, talonUtil) {
  const parentId = 'accordions-container';
  const sections = faqs.sections;
  for(var key in sections) {
    const section = sections[key];
    insertAccordion(parentId, section);
  }
  // insertAccordion("general-accordion", faqs);
  // insertAccordion("collectors-accordion", faqs);
  // insertAccordion("issuers-accordion", faqs);
})($, window.talonUtil);