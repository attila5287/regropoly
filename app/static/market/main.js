d3.json('/spawn/9/1', function(err, data) {
// d3.json('/base/1', function(err, data) {
  console.log('data :>> ', data);

  // console.table(data[0]);
  let Spawn = d3.select('#market-spawn')
    .data(data)
    .append('div')
      .attr('class', 'row no-gutters')
    ;
    for (let index = 0; index <6; index++) {
      const d = data[index];
      let $card = Spawn
      .append('div')
      .attr('class', 'col-sm-4')
        .append('div')
        .attr('class', 'card bg-transparent text-light text-comfo rnd-2xl');
       let $header = $card
          .append('div')
          .attr('class', 'card-header mb-0 pb-1' )
            .append('button')
            .attr('class', 'btn btn-dark btn-outline-light btn-block bg-themy mb-1' )
            .text(d.purchase_price);
        $card
          .append('img')  
          .attr('class', 'card-img-top rnd-lg')
          .attr('src', d.img_url);
        let $card_body = $card
          .append('div')
          .attr('class', 'card-body bg-themsie text-light text-comfo rnd-lg py-1')
        let $list_body = $card_body
          .append('ul')
          .attr('class', 'list-group list-group-flush mb-1 mt-0');
        $list_body
          .append('li')
          .attr('class', 'list-group-item bg-transparent py-1')
          .text(d.BedrmCt);
        $list_body
          .append('li')
          .attr('class', 'list-group-item bg-transparent py-1')
          .text(d.RegionName);
        $list_body
          .append('li')
          .attr('class', 'list-group-item bg-transparent py-1')
          .text(d.base_price);
        $list_body
          .append('li')
          .attr('class', 'list-group-item bg-transparent py-1')
          .text(d.purchase_price);
        $list_body
          .append('li')
          .attr('class', 'list-group-item bg-transparent py-1')
          .text(d.CountyName)
          ;
  
    }
    
});
