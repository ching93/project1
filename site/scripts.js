'use-strict';

function add_item() {
  input = document.querySelector("#in-value");
  let text = input.value;
  if (text!=="") {
    let ic = document.querySelector("#item-container");
    ic.addItem(text);
    document.querySelector("#save-button").disabled=false;
  }
}

function close_item(e) {
  let ic = document.querySelector("#item-container");
  let text = e.srcElement.parentElement.parentElement.text;
  ic.removeItem(text);
}

function save_items(filename) {
  let ic = document.querySelector("#item-container");
  let json_string = JSON.stringify(ic.array);
  let res = $.ajax({
    url: 'save_json.php',
    type: 'POST',
    data: {
      'json': json_string,
      'path': 'items.json'
    },
    error: function(jqXHR,status,errorthrown) {
      alert(JSON.stringify(jqXHR));
    },
    success: function(data,status,jqXHR) {
      alert(JSON.stringify(data));
    }
  });
}