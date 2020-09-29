const formatPrice = d3.format(",")

d3.json(`/purchased`, function(err, data) {
  console.log('data :>> ', data);

  // console.table(data[0]);
  let $Spawned = d3.select('#market-spawn')
    .data(data);

  $row = $Spawned.append('div')
    .attr('class', 'row no-gutters');
  
  for (let index = 0; index <data.length; index++) {
    let d = data[index];

    let $card = $row
      .append('div')
      .attr('class', 'col-sm-6')
        .append('div')
        .attr('class', 'card bg-transparent text-light text-comfo mx-1 rnd-2xl');

    
    let $card_body = $card
      .append('div')
      .attr('class', 'card-body bg-themsie text-light text-comfo rnd-lg py-1')
      .append('div')
      .classed('row', true)
      ;

    $cb_left = $card_body
    .append('div')
    .classed('col-sm-5', true);
    $cb_left
      .append('p')
      .classed('my-0 text-center text-italic text-xs', true)
      .text(`${d.RegionName}, ${d.State}`);    

    $img = $cb_left
      .append('img')  
      .attr('class', 'card-img rnd-lg opac-60')
      .attr('src', d.img_url)
       .style('max-height', '50%');
    
    $cb_left
      .append('p')
      .classed('my-0 mx-0 text-robo text-center text-italic text-xs opac-90', true)
      .text(`Sell price at round-${d.forsale_round}`)
      ;

    $button = $cb_left 
      .append('a')
      .attr('class', 'btn btn-dark btn-outline-light btn-block bg-green my-1 py-0' )
      .attr('href',`/sell/${d.id}` )
      .text(` $${formatPrice( d.forsale_price )}`)
      ;

    $cb_left
      .append('p')
      .classed('my-0 mx-0 text-robo text-center text-italic text-xs opac-90', true)
      .text(`Purchased at Round-${ d.purchase_round} for $${ formatPrice(d.purchase_price) }`);

    let $cb_right = $card_body
        .append('div')
        .classed('col-xs-7', true);
    
    let $cb_list = $cb_right
    .append('ul')
    .attr('class', 'list-group list-group-flush mb-1 mt-2')
    ;

    $cb_list
      .append('li')
      .attr('class', 'list-group-item bg-transparent text-robo text-sm border-light py-0 opac-70')
      .text(`${d.BasePriceLabel}`);
    
    $cb_list
      .append('li')
      .attr('class', 'list-group-item bg-transparent py-1')
      .text(`Bedrm Ct: ${d.BedrmCt}`);
    
      $cb_list
      .append('li')
      .attr('class', 'list-group-item bg-transparent py-1')
      .text(`${d.CountyName}`);
      
      $cb_list
      .append('li')
      .attr('class', 'list-group-item bg-transparent py-1')
      .text(`Purchased ID: ${d.id}`);
      
      $cb_list
      .append('li')
      .attr('class', 'list-group-item bg-transparent py-1')
      .text(`Avg  $${formatPrice( d.base_price )}`)
      ;
      
      


  }

    
});
