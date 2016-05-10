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
  $('#updatedOn').html('Updated On ' + snapshot.val());
});
