import $ from 'jquery'

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
  for(var qaKey in section.questions) {
    const qa = section.questions[qaKey];
    insertAccordionItem(accordionId, qaKey, qa.question, qa.answer);
  }
}

function safeString(str) {
  str = str.replace(/\[([^\]\"]*)\]\(([^\)\"]*)\)/g, '<a href="$2">$1</a>');
  
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
          '</p>\
        </div>\
      </div>\
    </div>'
  ].join('');
  insertHTML(parentId, html);
}

async function getFaqs() {
  const faqs = await fetch('https://api.poap.xyz/faq');
  return faqs;
}

(function ($, talonUtil) {
  // const faqs = getFaqs();
  fetch('https://api.poap.xyz/faq')
    .then(data => data.json()
    .then(faqs => {
        const parentId = 'accordions-container';
        const sections = faqs.sections;
        for(var key in sections) {
          const section = sections[key];
          insertAccordion(parentId, section);
        }
      })
    )
    .catch(function(error) {
      console.error(error);
    });

  
})($, window.talonUtil);