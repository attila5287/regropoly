let roundNo = 1;

$btn_grp = d3.select( '#round-buttons' )
  .append( 'div' )
  .classed( 'row no-gutters', true )
  .append( 'div' )
  .classed( 'col-8 of7fset-2 text-center', true )
  .append( 'div' )
  .classed( 'btn-group bg-transparent mb-2', true );

$left_btn = $btn_grp
.append( 'a' )
.classed( 'btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0', true )
  ;

$left_btn
  .append('i')
  .classed( 'fas fa-caret-left text-xl my-2', true )
  ;
    
    
$round_board = $btn_grp
.append( 'a' )
.classed( 'btn btn-secondary btn-outline-light bg-secondary text-digi text-bold text-warning text-nowrap text-xl border-0 disabled px-2 my-1', true )
.append( 'span' )
.classed('bg-black px-4 py-3 mx-0 my-0', true)
;

$round_board
.text( `Round ` )

$round_no = $round_board
  .append('i')
  .text( roundNo )
  ;
  
$right_btn = $btn_grp
  .append( 'a' )
  .classed( 'btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0', true );

  $right_btn
  .append('i')
    .classed( 'fas fa-caret-right text-xl my-2', true )
    ;
  
  $left_btn.on( 'click', function ( d ) {
    console.log( '<<: test :>> ', );
    roundNo = roundNo - 1;
    $round_no
      .text( roundNo )
      ;
    update_assets(roundNo);
  } );
  
  $right_btn.on( 'click', function ( d ) {
    console.log( '<<: test :>> ', );
    roundNo = roundNo + 1;

    $round_no
      .text( roundNo );
      update_assets(roundNo);
  } );
  
  
// ==============================================
update_assets(roundNo);
function update_assets (roundNo) {
  const formatPrice = d3.format( "," );

  d3.json( `/purchased/${roundNo}`, function ( err, data ) {
    console.log( 'data :>> ', data );
    // If  already a container on the page, remove 
    var existing = d3.select( '#assets-portfolio' )
      .select( 'div' );
    
    if (!existing.empty()) {
      existing.remove();
    }
    
    // console.table(data[0]);
    let $Purchased = d3.select( '#assets-portfolio' )
      .data( data );

    $row = $Purchased
      .append( 'div' )
      .attr( 'class', 'row no-gutters' );

    for ( let index = 0; index < data.length; index++ ) {
      let d = data[ index ];

      let $card = $row
        .append( 'div' )
        .attr( 'class', 'col-sm-12 offset-sm-0' )
        .append( 'div' )
        .attr( 'class', 'card bg-transparent text-light text-comfo mx-1 rnd-2xl mb-2' );


      let $card_body = $card
        .append( 'div' )
        .attr( 'class', 'card-body bg-themsie text-light text-comfo rnd-lg py-1' )
        .append( 'div' )
        .classed( 'row', true );

      $cb_left = $card_body
        .append( 'div' )
        .classed( 'col-xs-4', true )
        ;
      
      $cb_left
        .append( 'p' )
        .classed( 'my-0 text-center text-italic text-xs', true )
        .text( `${d.RegionName}, ${d.State}` )
        ;

      $img = $cb_left
        .append( 'img' )
        .attr( 'class', 'card-img rnd-lg opac-60' )
        .attr( 'src', d.img_url )
        .style( 'max-height', '50%' )
        ;

      $cb_left
        .append( 'p' )
        .classed( 'my-0 mx-0 text-robo text-secondary text-center text-italic text-xs', true )
        .text( `Blind offer` )
        ;

      $btn_blind = $cb_left
        .append( 'a' )
        .attr( 'class', 'btn btn-info btn-outline-info btn-block bg-dark border-0 my-1 py-0 text-xs text-light' )
        .attr( 'href', `/sell/${d.id}` )
        .text( ` $${formatPrice( d.base_price )}` )
        ;
      $cb_left
        .append( 'p' )
        .classed( 'my-0 mx-0 text-robo text-secondary text-center text-italic text-xs', true )
        .text( ` Best Offer` )
        ;

      $btn_best = $cb_left
        .append( 'a' )
        .attr( 'class', 'btn btn-dark btn-outline-light btn-block bg-green my-1 py-0 text-xs' )
        .attr( 'href', `/sell/${d.id}` )
        .text( ` $${formatPrice( d.forsale_price )}` )
        ;

      $cb_left
        .append( 'p' )
        .classed( 'py-0 my-0 mx-0 text-cond text-center text-italic text-xs opac-90', true )
        .text( `since Round-${d.purchase_round} for $${formatPrice( d.purchase_price )}` )
        ;

      let $cb_center = $card_body
        .append( 'div' )
        .classed( 'col-xs-4', true )
        ;

      let $cb_list = $cb_center
        .append( 'ul' )
        .attr( 'class', 'list-group list-group-flush mb-1 mt-2' );

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-dark text-robo text-sm border-light py-0 opac-70' )
        .text( `${d.BasePriceLabel}` );

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Bedrm Ct: ${d.BedrmCt}` );

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `${d.CountyName}` );

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `${d.Metro}` )
        ;

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `${d.StateName}` )
        ;

      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Purchased ID: ${d.id}` )
        ;
      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `RegionID: ${d.RegionID}` )
        ;
      $cb_list
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `SizeRank: ${d.SizeRank}` )
        ;

      let $cb_right = $card_body
        .append( 'div' )
        .classed( 'col-xs-4', true )
        ;
      let $cb_l1st = $cb_right
        .append( 'ul' )
        .attr( 'class', 'list-group list-group-flush mb-1 mt-2' );
      

      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Rnd${d.purchase_round}  $${formatPrice( d.purchase_price )}` )
        ;

      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1 border-light' )
        .text( `Rnd${d.purchase_round}  $${formatPrice( d.purchase_price )}` )
        ;
      

      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Rnd${roundNo}  $${formatPrice( d.base_price )}` );

      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Rnd${roundNo - 1}:  $${formatPrice( d.base_price01 )}` );
      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Rnd${roundNo - 2}:  $${formatPrice( d.base_price02 )}` );
      
      $cb_l1st
        .append( 'li' )
        .attr( 'class', 'list-group-item bg-transparent py-1' )
        .text( `Rnd${roundNo - 3}:  $${formatPrice( d.base_price03 )}` )
        ;      
      }

  } );
}

