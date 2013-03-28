
var resultsTmpl,
	detailTmpl;

function init() {
	$.get( "results", function( info ) {
		$( "div.results" ).html( resultsTmpl( info ) );
	});
	$( "div.content" ).on( "click", "div.result", showDetail );
}

function showDetail( e ) {
	var id = $( this ).data( "id" );
	loadDetail( id );
	$( "div.detail" ).show();
}

function loadDetail( id ) {
	if ( id.data ) {
		id = id.data.id;
	}
	$.get( "detail/" + id, function( info ) {
		$( "div.detail" ).html( detailTmpl( info ) );
		$( "div.detail a.prev" ).on( "click", { id: parseInt( id ) - 1 }, loadDetail );
		$( "div.detail a.next" ).on( "click", { id: parseInt( id ) + 1 }, loadDetail );
		$( "div.detail div.artist a" ).on( "click", loadBio );
	});
}

function loadBio( artistId ) {
	// some stuff here, definitely needs a template
}

$.when( 
	$.get( "tmpl/results.dot", function( tmpl ) {
		resultsTmpl = doT.template( tmpl );
	}, "text" ),
	$.get( "tmpl/detail.dot", function( tmpl ) {
		detailTmpl = doT.template( tmpl );
	}, "text" )
).then( init );


