var Store = require("./record_store/store_constructor.js");
var Record = require('./record_store/record_constructor.js')
var recordsSample = require("./records.json")

window.onload = function(){
   console.log(recordsSample)

   var store = new Store("Record Breakers", "Edinburgh", 1000);
    for (recordData of recordsSample){
    store.add(new Record(recordData.artist, recordData.title, recordData.price));
    }

    var storeDetails = document.getElementById('store-name')
    storeDetails.innerText = "Store: " + store.name

    var storeDetails = document.getElementById('store-location')
    storeDetails.innerText = "Location: " + store.city

    var inventory = document.getElementById('inventory')
    console.log(store)
    for (record of store.records){
      console.log(record)
      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      td1.innerText = record.title;
      td2.innerText = record.artist;
      td3.innerText = "£" + record.price;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      inventory.appendChild(tr)
    }

    var form = document.getElementById('form')
    var title = document.getElementById('title')
    var artist = document.getElementById('artist')
    var price = document.getElementById('price')


    form.onsubmit = function(e){
      e.preventDefault();
      var recordPrice = price.value;
      var recordTitle = title.value;
      var recordArtist = title.value;
      console.log(recordArtist)
      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      td1.innerText = recordTitle;
      td2.innerText = recordArtist;
      td3.innerText = "£" + recordPrice;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      inventory.appendChild(tr)
    }







}