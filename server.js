var express = require( "express" ),
	app = express(),
	cons = require( "consolidate" ),
	products = {
		"101": {
			id: 101,
			title: "Las Dos Fridas",
			artist: 1,
			price: "$59.99",
			info: [
				'11" x 14"',
				"acid-free paper",
				"suitable for matting",
				"limited edition"
			]
		},
		"102": {
			id: 102,
			title: "Two Acrobats with a Dog",
			artist: 2,
			price: "$49.99",
			info: [
				'8" x 11"',
				"acid-free paper",
				"suitable for matting"
			]
		},
		"103": {
			id: 103,
			title: "Madame Pompadour",
			artist: 3,
			price: "$29.99",
			info: [
				'5" x 7"',
				"acid-free paper",
				"matted"
			]
		},
		"104": {
			id: 104,
			title: "Dissonance",
			artist: 4,
			price: "$39.99",
			info: [
				'8" x 11"',
				"acid-free paper",
				"suitable for matting"
			]
		},
		"105": {
			id: 105,
			title: "Irene and Her Sister",
			artist: 5,
			price: "$39.99",
			info: [
				'5" x 7"',
				"acid-free paper",
				"matted"
			]
		}
	},
	artists = {
		"1": {
			name: "Frida Kahlo",
			bio: "Frida Kahlo was a Mexican painter best know for her surrealist self-portraits, depicting her intense emotional and physical pain. She was three years old at the onset of the Mexican Revolution, a fact which colored her from the very beginning of her life, including accounts of how her mother would rush her and her three sisters into the house because of outbreaks of gunfire in the streets outside her house. Sometimes her mother would even invite the hungry revolutionaries in for dinner.",
			summary: "Frida Kahlo was a Mexican painter best know for her surrealist self-portraits, depicting her intense emotional and physical pain. She was three years old at the onset of the Mexican Revolution."
		},
		"2": {
			name: "Pablo Picasso",
			bio: "The girls would turn the color of an avocado when he'd drive down the street in his El Dorado. He was only 5'3 but girls could not resist his stare. Pablo Picasso was never called an asshole. Not in New York.",
			summary: "The girls would turn the color of an avocado when he'd drive down the street in his El Dorado. He was only 5'3 but girls could not resist his stare. Pablo Picasso was never called an asshole. Not in New York."
		},
		"3": {
			name: "Amedeo Modigliani",
			bio: "Amedeo Modigliani was the epitome of a tragic artist. Born to a bourgeois family in Italy, he later shunned his academic upbringing and willingly devolved into a poverty stricken vagabond. He was formally educated as a life painter in his teens, quickly developing a life-long infatuation with nudes. In 1902 he moved to Florence to study at the Academia di Belle Arti, at the \“Free School of Nude Studies,\” and a year later he moved to Venice as a fledgling artist, where he smoked hashish for the first time. It was only after he discovered narcotics that he developed the philosophical belief that the only path to creativity was through defiance of social norms and disorder in life. Thus began a life long affliction with corrupted beauty, which would ultimately end with his untimely death and the suicide of his grief-stricken wife and their unborn child.",
			summary: "Born to a bourgeois family in Italy, he later shunned his academic upbringing and willingly devolved into a poverty stricken vagabond. He was formally educated as a life painter in his teens, quickly developing a life-long infatuation with nudes."
		},
		"4": {
			name: "Franz Stuck",
			bio: "Stuck was born at Tettenweis, in Bavaria. From an early age he displayed an affinity for drawing and caricature. To begin his artistic education he relocated in 1878 to Munich, where he would settle for life. From 1881 to 1885 Stuck attended the Munich Academy.",
			summary: "Stuck was born at Tettenweis, in Bavaria. From an early age he displayed an affinity for drawing and caricature. To begin his artistic education he relocated in 1878 to Munich, where he would settle for life. From 1881 to 1885 Stuck attended the Munich Academy. He first became well known by cartoons for Fliegende Blätter, and vignette designs for programmes and book decoration. In 1889 he exhibited his first paintings at the Munich Glass Palace, winning a gold medal for The Guardian of Paradise."
		},
		"5": {
			name: "Tamara de Lempicka",
			bio: "Born into a wealthy and prominent family, her father was Boris Gurwik-Górski, a Polish lawyer, and her mother, the former Malvina Decler, a Polish socialite. Maria was the middle child with two siblings.",
			summary: "Born into a wealthy and prominent family, her father was Boris Gurwik-Górski, a Polish lawyer, and her mother, the former Malvina Decler, a Polish socialite. Maria was the middle child with two siblings. She attended boarding school in Lausanne, Switzerland, and spent the winter of 1911 with her grandmother in Italy and on the French Riviera, where she was treated to her first taste of the Great Masters of Italian painting. In 1912, her parents divorced, and Maria went to live with her wealthy Aunt Stefa in St. Petersburg, Russia. When her mother remarried, she became determined to break away to a life of her own. In 1913, at the age of fifteen, while attending the opera, Maria spotted the man she became determined to marry. She promoted her campaign through her well-connected uncle, and in 1916, she married Tadeusz Łempicki (1888–1951) in St. Petersburg—a well-known ladies' man, gadabout, and lawyer by title, who was tempted by the significant dowry."
		}
	};

// map products to artists
for ( var id in products ) {
	products[ id ].artist = artists[ products[ id ].artist.toString() ];
}

app.use( express.static( __dirname + "/public" ) );
app.engine( "dot", cons.dot );
app.set( "view engine", "dot" );
app.set( "views", __dirname + "/public/tmpl" );

app.get( "/results", function( req, res ) {
	var arr = [];
	for ( var result in products ) {
		arr.push( products[ result ] );	
	}
	res.send( { results: arr } );
});

app.get( "/detail/:id", function( req, res ) {
	res.send( products[ req.params.id ] );
});

app.get( "/product/:id", function( req, res ) {
	res.render( "detail", products[ req.params.id ] );
});

app.listen( 3000 );