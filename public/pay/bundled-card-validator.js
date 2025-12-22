let paymentRequestClient;
let methodData;

function addToInstrumentList(content, clickHandler) {
  var linkedContainer = document.createElement("a");
  linkedContainer.className = "list-group-item";
  linkedContainer.setAttribute("href", "#");
  linkedContainer.appendChild(content);
  linkedContainer.addEventListener("click", function() { clickHandler() });
  document.getElementById("payment-instrument-list").appendChild(linkedContainer);
}

function populatePaymentInstrumentsList() {
  // First, remove everything from the list. We won't bother with doing anything fancier.
  var listNode = document.getElementById("payment-instrument-list");
  while(listNode.lastChild) {
    listNode.removeChild(listNode.lastChild);
  }

  if (methodData.some(method => method["supportedMethods"].includes("https://bobbucks.dev/pay"))) {
    // This merchant supports bobbucks, offer bobbucks balance as an option
    var label = document.createElement("h4");
    label.innerHTML = "Pay with BobBucks balance ($50.00)";
    addToInstrumentList(label, payWithBobBucksBalance);
  }
}

function payWithBobBucksBalance() {
  if(!paymentRequestClient) return;

  var paymentAppResponse = {
    methodName: "https://bobbucks.dev/pay",
    details: {
      bobbucks_token_id: "ABCDEADBEEF",
      message: "Thanks for using BobBucks!"
    }
  };

  paymentRequestClient.postMessage(paymentAppResponse);
  window.close();
}

navigator.serviceWorker.addEventListener('message', e => {
  paymentRequestClient = e.source;

  if (e.data.methodData) {
    methodData = e.data["methodData"];
    document.getElementById('details').innerHTML = JSON.stringify(e.data, undefined, 2);

    populatePaymentInstrumentsList();
  } else if (e.data.updateWith) {
    const log = document.getElementById('update-with-event-log')
    log.innerHTML = `<b>Received update from merchant</b>: ${e.data.updateWith}`;
    log.style.display = 'block';
  }
});
navigator.serviceWorker.controller.postMessage('payment_app_window_ready');

function pingServiceWorkerToKeepItAlive() {
  navigator.serviceWorker.controller.postMessage('ping');
}

const ping = setInterval(pingServiceWorkerToKeepItAlive, 60000);

function cancel() {
  if(!paymentRequestClient) return;

  paymentRequestClient.postMessage("The payment request is cancelled by user");
  window.close();
}

document.getElementById("cancel").addEventListener("click", cancel);
