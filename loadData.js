var myFirebaseRef = new Firebase("https://popping-fire-2895.firebaseio.com/");

myFirebaseRef.child("mendingBooksSold").on("value", function(snapshot) {
 // alert(snapshot.val());  // Alerts "San Francisco"
 $('#soldBooksNum').html(snapshot.val());
});

myFirebaseRef.child("diamondsMade").on("value", function(snapshot) {
 // alert(snapshot.val());  // Alerts "San Francisco"
 $('#dimonadsMade').html(snapshot.val());
});

myFirebaseRef.child("afterCut").on("value", function(snapshot) {
  //alert(snapshot.val());  // Alerts "San Francisco"
  $('#afterCut').html(snapshot.val());
});

myFirebaseRef.child("updatedOn").on("value", function(snapshot) {
  //alert(snapshot.val());  // Alerts "San Francisco"
  $('#updatedOn').html('Updated On ' + snapshot.val() + ' <br> We have decided to discontinue updating this website. Tweet <a href="http://ctt.ec/6bdff"></a>#ImpulseMendingBookStore</a> if you would like to help update the website or reasons you would like us to keep updating it.');
});
