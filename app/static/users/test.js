
d3.select( '#img_url' ).on( 'change', function () {
  const web = "https://raw.githubusercontent.com/attila5287/regropoly-img/master/avatars/";
  
  const ext = ".png";
  
  d3.event.preventDefault();
  
  console.log( "change v :>> ", this.value );
  
  let generated_url = this.value;
  
  d3.select( "#img_on_air" )
    .select( 'img' )
    .remove();
  
  d3.select("#img_on_air")
    .append("img")
    .attr("class", "card-img bg-transparent border-0 rounded-circle account-img")
    .attr( "src", ( d ) => `${web}${generated_url}${ext}` )
    ;

  let text = `${web}${generated_url}${ext}`;

  console.log('text :>> ', text);

} );
