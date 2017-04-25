/* dead pixelsssssss */

var nextLevel = 1;

$.ajax({
  url: 'levels/levels.json',
  dataType: 'json',
  success: function ( response ) {
    // for every level ...
    for ( var i = 0; i < response.levels.length; i++ ) {
      // for every pixel ...
      $( '.game-area' ).append(
        '<div class="level" id="level' + response.levels[i].level + '">' +
          '<h2>Level ' + response.levels[i].level + '!</h2>' +
          '<div class="board"></div>' +
        '</div>'
      );
      for ( var j = 0; j < response.levels[i].pixels.length; j++ ) {
        // place a pixel on the screen!
        $( '#level' + response.levels[i].level + ' .board' )
          .append( '<button class="pixel" data-click="0" style="position: absolute; top: ' + response.levels[i].pixels[j]['y-axis'] + '%; left: ' + response.levels[i].pixels[j]['x-axis'] + '%; height: ' + response.levels[i].size + 'px; width: ' + response.levels[i].size + 'px"></button>' )
      }
    }
  }
});

// when a user clicks on a button ...
$( '.game-area' ).on( 'click', 'button', function () {
  var dataClick = Number( $( this ).attr( 'data-click' ) );
  if (  dataClick >= 9  ) {
    $( this ).closest( '.board' ).html( '<h2>YOU WIN!</h2> <h3 id="nextButton"><button>Next Level!</button></h3>' );
  } else {
    $( this )
      .addClass( 'clicked' );
    $( this ).closest( '.board' ).find( 'button' ).attr( 'data-click', dataClick + 1 );
  }
});
