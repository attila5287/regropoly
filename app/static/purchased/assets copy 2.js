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
      .selectAll('.assets')
      .data( data )
      ;
      
    $cb_left = $Purchased
      .enter()
      .append( 'div' )
      .attr( 'class', 'col-sm-6' )
      .append( 'div' )
      .attr( 'class', 'card bg-transparent text-light text-comfo mx-1 rnd-2xl' )
      .append( 'div' )
      .attr( 'class', 'card-body bg-themsie text-light text-comfo rnd-lg py-1' )
        .append( 'div' )
        .classed( 'row', true )
          .append( 'div' )
          .attr('class', d => `cb-left col-sm-5` )
          ;
          // .classed( d => `cb-left-${d.id} col-sm-5`, true )
          
      
    $region_name = $Purchased
      .enter()
      // .selectAll(d => `.cb-left-${d.id}` )
      .selectAll(`.cb-left` )
        .append( 'p' ) 
        .classed( 'region-name my-0 text-center text-italic text-xs', true )
        .text( d => `${d.RegionName}, ${d.State}` )
        ;
    
    $img = $Purchased
      .enter()
      .selectAll('.cb-left')
        .append( 'img' )
        .attr( 'class', 'assets card-img rnd-lg opac-60' )
        .attr( 'src', d => d.img_url )
        .style( 'max-height', '50%' )
        ;

      // $cb_left
      //   .append( 'p' )
      //   .classed( 'assets my-0 mx-0 text-robo text-center text-italic text-xs', true )
      //   .text( d =>`Sell price at round-${d.forsale_round}` );

      // $button = $cb_left
      //   .append( 'a' )
      //   .attr( 'class', 'assets btn btn-dark btn-outline-light btn-block bg-green my-1 py-0 text-sm' )
      //   .attr( d => 'href', `/sell/${d.id}` )
      //   .text( d =>` $${formatPrice( d.forsale_price )}` );

        
      // $cb_left
      //   .append( 'p' )
      //   .classed( 'assets my-0 mx-0 text-robo text-center text-italic text-xs opac-90', true )
      //   .text( d =>`Purchased at Round-${d.purchase_round} for $${formatPrice( d.purchase_price )}` );

      // let $cb_right = $card_body
      //   .append( 'div' )
      //   .classed( 'col-xs-7', true );

      // let $cb_list = $cb_right
      //   .append( 'ul' )
      //   .attr( 'class', 'list-group list-group-flush mb-1 mt-2' );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-dark text-robo text-sm border-light py-0 opac-70' )
      //   .text( d =>`${d.BasePriceLabel}` );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Bedrm Ct: ${d.BedrmCt}` );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`${d.CountyName}` );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Purchased ID: ${d.id}` );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Rnd${roundNo}  $${formatPrice( d.base_price )}` );

      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Rnd${roundNo - 1}:  $${formatPrice( d.base_price01 )}` );
      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Rnd${roundNo - 2}:  $${formatPrice( d.base_price02 )}` );
      // $cb_list
      //   .append( 'li' )
      //   .attr( 'class', 'assets list-group-item bg-transparent py-1' )
      //   .text( d =>`Rnd${roundNo - 3}:  $${formatPrice( d.base_price03 )}` );


  } );
}

