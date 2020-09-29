let displayCount = 12;
let roundNo = 1;
const formatPrice = d3.format(",")

d3.json(`/spawn/${displayCount}/${roundNo}`, function(err, data) {
  console.log('data :>> ', data);

  // console.table(data[0]);
  let $Spawned = d3.select('#market-spawn')
    .data(data);

  $row = $Spawned.append('div')
    .attr('class', 'row no-gutters');
  
  for (let index = 0; index <displayCount; index++) {
    let d = data[index];

    let $card = $row
      .append('div')
      .attr('class', 'col-sm-3')
        .append('div')
        .attr('class', 'card bg-transparent text-light text-comfo mx-1 rnd-2xl');

    let $header = $card
      .append('div')
      .attr('class', 'card-header mb-0 pb-1 px-0 text-center' )
      .text(`${d.RegionName}, ${d.State}`);

    $button = $header
      .append('a')
      .attr('class', 'btn btn-dark btn-outline-light btn-block bg-themy my-0' )
      .attr('href',`/purchase/${d.id}` )
      .text(` $${formatPrice( d.purchase_price )}`);
    
    let $card_body = $card
      .append('div')
      .attr('class', 'card-body bg-themsie text-light text-comfo rnd-lg py-1');
    $header
      .append('i')
      .attr('class', 'text-xs opac-70')
      .text(`Avg  $${formatPrice( d.base_price )}`);

    $card_body
      .append('img')  
      .attr('class', 'card-img-top rnd-lg opac-80')
      .attr('src', d.img_url);

    let $cb_list = $card_body
      .append('ul')
      .attr('class', 'list-group list-group-flush mb-1 mt-0');

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
      .text(`Marketid: ${d.id}`);

  }

    
});
