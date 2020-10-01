display_modes_up();
let roundNo = 1;

round_input(roundNo);

// ==============================================
update_assets(roundNo);

function round_input(roundNo) {
  let $btn_grp = d3
    .select("#round-buttons")
    .append("div")
    .classed("row no-gutters", true)
    .append("div")
    .classed("col-sm-8 offset-2 text-center", true)
    .append("div")
    .classed("btn-group bg-transparent mb-3", true);
  let $fast_backward = $btn_grp
    .append("a")
    .classed(
      "change-round btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0 mr-4",
      true
    );

  $fast_backward
    .append("i")
    .attr("id", "fast-backward-logo")
    .classed("fas fa-fast-backward text-xl my-2", true);
  
  let $left_btn = $btn_grp
    .append("a")
    .attr("id", "prev-round")
    .classed(
      "change-round btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0",
      true
    );
  $left_btn
    .append( "i" )
    .attr( "id", "prev-round-logo" )
    .classed( "fas fa-caret-left text-xl my-2", true );

  let $round_board = $btn_grp
    .append("a")
    .classed(
      "btn btn-light btn-outline-light bg-transparent text-digi text-bold text-warning text-nowrap text-xl border-0 disabled px-2 my-1",
      true
    )
    .append("span")
    .classed("bg-black px-4 py-3 mx-0 my-0", true);
  $round_board.text(`Round `);

  let $round_no = $round_board
    .append( "i" )
    .attr( "class", "round-no" )
    .text( roundNo );
  let $right_btn = $btn_grp
    .append("a")
    .attr("id", "next-round")
    .classed(
      "change-round btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0",
      true
    );

  $right_btn
  .append("i")
  .attr("id", "next-round-logo")
    .classed("fas fa-caret-right text-xl my-2", true);
  
  let $fast_forward = $btn_grp
    .append("a")
    .attr("id", "fast-forward")
    .classed(
      "change-round btn btn-dark btn-outline-light btn-block bg-themy px-4 my-0 ml-4",
      true
    );

  $fast_forward
    .append( "i" )
    .attr( "id", "fast-forward-logo" )
    .classed( "fas fa-fast-forward text-xl my-2", true )
    ;
  
}

function spawn_items ( roundNo ) {
  // let roundNo = 1;
  let displayCount = 12;
  const formatPrice = d3.format(",");

  d3.json(`/spawn/${displayCount}/${roundNo}`, function (err, data) {
    console.log("data :>> ", data);

var existing = d3.select("#assets-portfolio").select("div");

if (!existing.empty()) {
  existing.remove();
}
    // console.table(data[0]);
    let $Spawned = d3.select("#assets-portfolio").data(data);

    $row = $Spawned.append("div").attr("class", "row no-gutters");

    for (let index = 0; index < displayCount; index++) {
      let d = data[index];

      let $card = $row
        .append("div")
        .attr("class", "col-sm-3")
        .append("div")
        .attr(
          "class",
          "card bg-transparent text-light text-comfo mx-1 rnd-2xl"
        );

      let $header = $card
        .append("div")
        .attr("class", "card-header mb-0 pb-1 px-0 text-center")
        .text(`${d.RegionName}, ${d.State}`);

      $button = $header
        .append("a")
        .attr("class", "btn btn-dark btn-outline-light btn-block bg-themy my-0")
        .attr("href", `/purchase/${d.id}`)
        .text(` $${formatPrice(d.purchase_price)}`);

      let $card_body = $card
        .append("div")
        .attr(
          "class",
          "card-body bg-themsie text-light text-comfo rnd-lg py-1"
        );
      $header
        .append("i")
        .attr("class", "text-xs opac-70")
        .text(`Avg  $${formatPrice(d.base_price)}`);

      $card_body
        .append("img")
        .attr("class", "card-img-top rnd-lg opac-80")
        .attr("src", d.img_url);

      let $cb_list = $card_body
        .append("ul")
        .attr("class", "list-group list-group-flush mb-1 mt-0");

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Bedrm Ct: ${d.BedrmCt}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`${d.CountyName}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Market id: ${d.id}`);
    }
  });
}

function update_assets(roundNo) {
  const formatPrice = d3.format(",");

  d3.json(`/purchased/${roundNo}`, function (err, data) {
    console.log("data :>> ", data);
    // If  already a container on the page, remove
    var existing = d3.select("#assets-portfolio").select("div");

    if (!existing.empty()) {
      existing.remove();
    }

    // console.table(data[0]);
    let $Purchased = d3.select("#assets-portfolio").data(data);

    $row = $Purchased.append("div").attr("class", "row no-gutters");

    for (let index = 0; index < data.length; index++) {
      let d = data[index];

      let $card = $row
        .append("div")
        .attr("class", "col-sm-10 offset-sm-1")
        .append("div")
        .attr(
          "class",
          "card bg-transparent text-light text-comfo mx-1 rnd-2xl mb-2"
        );
      let $crd_header = $card
        .append("div")
        .attr("class", "card-header border-light text-center pb-0 px-4");

      $crd_header
        .append("i")
        .classed("fas fa-history text-light text-md mb-0 mr-1", true);

      $crd_header
        .append("i")
        .text(
          `Purchased ${
            d.forsale_round - d.purchase_round
          } rounds ago for $${formatPrice(d.purchase_price)}`
        );

      let $card_body = $card
        .append("div")
        .attr("class", "card-body bg-themsie text-light text-comfo rnd-lg py-1")
        .append("div")
        .classed("row", true);

      let $cb_left = $card_body.append("div").classed("col-sm-4", true);

      $cb_left
        .append("p")
        .classed("my-0 text-center text-italic text-xs", true)
        .text(`${d.RegionName}, ${d.State}`);

      let $img = $cb_left
        .append("img")
        .attr("class", "card-img rnd-lg opac-60")
        .attr("src", d.img_url)
        .style("max-height", "50%");

      let $cbl_info1 = $cb_left
        .append("p")
        .classed(
          "my-0 mx-0 text-robo text-light text-center text-italic text-xs",
          true
        );

      $cbl_info1
        .append("i")
        .classed(
          "fas fa-money-bill-wave text-light text-sm mr-2 my-1 mr-1",
          true
        );

      $cbl_info1
        .append("i")
        .text(
          `First offer profits $${formatPrice(d.base_price - d.purchase_price)}`
        );

      $btn_first = $cb_left
        .append("a")
        .attr(
          "class",
          "btn btn-info btn-outline-info btn-block bg-dark border-0 my-1 py-1 text-sm text-light"
        )
        .attr("href", `/sell/${d.id}/${d.base_price}`);

      $btn_first.append("i").attr("class", "fas fa-stopwatch mr-2 text-md");

      $btn_first.append("i").text(` $${formatPrice(d.base_price)}`);

      $cbl_info = $cb_left
        .append("p")
        .classed(
          "my-0 mx-0 text-robo text-light text-center text-italic text-xs",
          true
        );
      $cbl_info
        .append("i")
        .classed("fas fa-money-bill-wave text-light text-sm mr-2", true);

      $cbl_info
        .append("i")
        .text(
          ` Best Offer profits $${formatPrice(
            d.forsale_price - d.purchase_price
          )}`
        );

      let $btn_best = $cb_left
        .append("a")
        .attr(
          "class",
          "btn btn-dark btn-outline-light btn-block bg-green my-1 py-1 text-md"
        )
        .attr("href", `/sell/${d.id}/${d.forsale_price}`);

      $btn_best
        .append("i")
        .classed("fas fa-hand-holding-usd text-light text-md", true);

      $btn_best
        .append("i")
        .classed("text-nonitalic", true)
        .text(` $${formatPrice(d.forsale_price)}`);

      let $cb_center = $card_body.append("div").classed("col-sm-4", true);
      let $cb_list = $cb_center
        .append("ul")
        .attr("class", "list-group list-group-flush mb-1 mt-2");

      $cb_list_label = $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .append("p")
        .attr("class", "py-0 my-0");
      $cb_list_label
        .append("i")
        .classed("fas fa-id-card text-light text-md mb-0 mr-1", true);

      $cb_list_label
        .append("i")
        .classed("opac-80 text-comfo text-nonitalic text-sm", true)
        .text(`${d.BasePriceLabel}`);

      $cb_list
        .append("li")
        .classed(
          "list-group-item btn-info text-robo text-md text-center py-0",
          true
        )
        .text(`Asset Info`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Bedrm Ct: ${d.BedrmCt}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`${d.CountyName}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`${d.Metro}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`${d.StateName}`);

      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Purchased ID: ${d.id}`);
      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`RegionID: ${d.RegionID}`);
      $cb_list
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`SizeRank: ${d.SizeRank}`);

      let $cb_right = $card_body.append("div").classed("col-sm-3", true);

      let $cb_l1st = $cb_right
        .append("ul")
        .attr("class", "list-group list-group-flush text-right mb-1 mt-2");

      $cb_l1st
        .append("li")
        .classed(
          "list-group-item btn-info text-robo text-md text-left py-0",
          true
        )
        .text(`Round ${d.forsale_round} Offers`);

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`First $${formatPrice(d.base_price)}`);

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Best  $${formatPrice(d.forsale_price)}`);

      $cb_l1st
        .append("li")
        .classed(
          "list-group-item btn-info text-robo text-md text-left py-0",
          true
        )
        .text(`Purchase Info`);

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Rnd${d.purchase_round}  $${formatPrice(d.purchase_price)}`);

      $cb_l1st
        .append("li")
        .classed(
          "list-group-item btn-info text-robo text-md text-left py-0",
          true
        )
        .text("Price History");

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Rnd${roundNo}  $${formatPrice(d.base_price)}`);

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Rnd${roundNo - 1}:  $${formatPrice(d.base_price01)}`);
      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Rnd${roundNo - 2}:  $${formatPrice(d.base_price02)}`);

      $cb_l1st
        .append("li")
        .attr("class", "list-group-item bg-transparent py-1")
        .text(`Rnd${roundNo - 3}:  $${formatPrice(d.base_price03)}`);
    }
  });
}
// display_selected("update_assets", roundNo);

function display_selected ( mode, roundNo ) {
  console.log('roundNo :>> ', roundNo);
  console.log( "displayMode :>> ", mode );
  display = {
    spawn_items_logo: "spawn_items",
    spawn_items: "spawn_items",
    update_assets: "update_assets",
    update_assets_logo: "update_assets",
  };

  const condition = ( mode == 'update_assets' );
  if (condition) {
    return update_assets( roundNo );
    
  } else {
    return spawn_items(roundNo);
    
  }
}

function display_sel3cted ( mode, roundNo ) {
  console.log('roundNo :>> ', roundNo);
  console.log("displayMode :>> ", mode);
  display = {
    // spawn_items_logo: spawn_items(roundNo),
    spawn_items: spawn_items(roundNo),
    update_assets: update_assets(roundNo),
    // update_assets_logo: update_assets(roundNo),
  };

  return display[mode];
}

// ====== execute
d3.selectAll( ".display-mode" ).on( "click", function ( event ) {
  d3.event.preventDefault();
  let selected = d3.event.target;
  let mode = selected.id.trim();
  display_selected(mode, roundNo);
});


d3.selectAll(".change-round").on("click", function (event) {
  // d3.event.preventDefault();
  console.log("<<: test :>> ");
  const clicked = d3.event.target;
  let action = clicked.id.trim();

  console.log('action :>> ', action);
  
  delta = {
    "fast-backward-logo": -5,
    "fast-backward": -5,
    "prev-round-logo": -1,
    "prev-round": -1,
    "next-round": +1,
    "next-round-logo": +1,
    "fast-forward": +5,
    "fast-forward-logo": +5,
  };

    roundNo = roundNo + delta[action];
    d3.select(".round-no").text(roundNo);
    // update_assets(roundNo);
    // let mode = "spawn_items";
    let mode = "update_assets";
    display_selected(mode, roundNo);
  });

function display_modes_up ( ) {
  const menu = [
    {
      value:"0",
      text: "Mode",
      mode: "",
      class : "disabled"
    },
    {
      value:"1",
      text:"Assets",
      class : "",
      mode: "update_assets",
    },
    {
      value:"2",
      text:"Market",
      class: "",
      mode: "spawn_items",
    },
  ];
  $select = d3.select( "#select-display-mode" )
    .selectAll('.dd')
    .data( menu )
    .enter()
    ;
  $opt = $select
    .append("option")
    .attr( "value", ( d ) => +d.value )
    .text( ( d ) => d.text );
}

d3.select( "#select-display-mode" )
  .on( "change", function () {
    const menu = [
      {
        value: "0",
        mode: "",
      },
      {
        value: "1",
        mode: "update_assets",
      },
      {
        value: "2",
        mode: "spawn_items",
      },
    ];
    const $selected_option = this;
    const value = $selected_option.value;
    const mode = menu[ value ].mode;


    display_selected(mode, roundNo)    
  } )
  ;
