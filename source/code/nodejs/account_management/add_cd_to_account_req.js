picard.getCustomData(function(err, customData){
  if (err) {
    return console.error(err);
  }

  customData.currentAssignment = 'USS Enterprise (NCC-1701-E)';

  customData.save(function (err, result) {
    if (err) {
      return console.error(err);
    }

    console.log('Custom data saved at %d!', result.modifiedAt);
  });

});



