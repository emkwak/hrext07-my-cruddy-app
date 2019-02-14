/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?
 
  //SNACK
  var snacks = ['Brownie Crisps', 'Cookie butter', 'Dolmas','Sweet Plantain Chips', 'Popcorn With Herbs and Spices', 'Roasted Coconut Chips', 'Seasoned Kale Chips'];
  // localStorage.setItem('snacks', JSON.stringify(snacks)) ? JSON.parse(localStorage.getItem('snacks')) : 
  var snackList = $('.list-snacks');
  var snackParent = snackList.parent();

  localStorage.setItem('snacks', JSON.stringify(snacks)); 
  // var snackData = JSON.parse(localStorage.getItem('snacks')) 

  // SNACK SUBMIT BUTTON
  $('.btn-snack').on('click', function(e){
    console.log(e);
    e.preventDefault();
    // snack value
    var snackValue = $('.input-snack').val(); 
    // add new value to snack array
    snacks.push(snackValue); 
    localStorage.setItem('snacks', JSON.stringify(snacks));
    // var displayText = `'snacks | ${localStorage.getItem('snacks')}`;
    $('.list-snacks').append(`<li class="display-snack-item" data-snackItem='${snacks[snacks.length-1]}'>${snackValue}</liv>`);
    $('.input-snack').val('');

  });



  // ITERATE - EXISTING SNACKS 
  snackList.detach().each(function(index){ //.detach() method is the same as .remove(), except that .detach() keeps all jQuery data associated with the removed elements. This method is useful when removed elements are to be reinserted into the DOM at a later time.
    for (var i = 0; i < snacks.length; i++){
        $(this).append(`<li class="display-snack-item" data-snackItem='${snacks[i]}'>${snacks[i]}</li>`);
          if (i === snacks.length - 1){
            $(this).appendTo(snackParent);
        }
    }
  });



 $('.snack-container').on('dblclick', '.display-snack-item', function(e){
  console.log(e.currentTarget.dataset.snackitem)
   // var snackData =    
   // alert( "Item deleted" );

  });



//  $('.container-data').on('click', '.display-data-item', function(e){
//     console.log(e.currentTarget.dataset.keyvalue);
//     var keyData = e.currentTarget.dataset.keyvalue;
//     localStorage.removeItem(keyData);
//     $('.container-data').text('');
//   });
  
// });



  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

  $('container-data').toArray(snacks)

});