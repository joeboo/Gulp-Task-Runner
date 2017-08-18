function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><!--if lt IE 7--><html lang=\"en\" class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> </html><!--if IE 7html.no-js.lt-ie9.lt-ie8  --><!--if IE 8html.no-js.lt-ie9  --><!-- [if gt IE 8] <!--><html class=\"no-js\"><!-- <![endif]--><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title></title><meta name=\"description\" content=\"\"><meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" name=\"viewport\"><!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">--><!-- <meta name=\"viewport\" content=\"width=device-width, user-scalable=no\" />--><!-- Place favicon.ico and apple-touch-icon.png in the root directory--><link rel=\"stylesheet\" href=\"css/style.css\"><link href=\"http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic\" rel=\"stylesheet\" type=\"text/css\"><link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\"><script src=\"js/modernizr.custom.87008.js\"></script></head></html><body><!--if lt IE 7p.browsehappy\n  | You are using an \n  strong outdated\n  |  browser. Please \n  a(href='http://browsehappy.com/') upgrade your browser\n  |  to improve your experience.-->&#x9;<header class=\"l-header\"><div class=\"container\"><div class=\"row\"><!-- Logo--><div class=\"col-lg-6 col-md-6 col-sm-6\"><a href=\"index.html\" class=\"logo\"><img src=\"images/logo.png\" alt=\"Logo\">Transform Sound UK <span class=\"sub-logo\">DESIGN &bull; SUPPLY &bull; INSTALLATION</span></a></div><!-- end col-lg-6--><!-- Tel/Free Quote--><div class=\"col-lg-6 col-md-6 hidden-xs\"><div class=\"tel-quote fr\"><ul><li>Call today for a free quote <span>020798900349</span></li></ul></div></div><!-- end col-lg-6--></div><!-- end row--></div><!-- end container--></header><!-- Navigation--><div class=\"nav-container\"><div class=\"container\"><div class=\"row\"><span><!-- Main Navigation--></span>            <div class=\"col-lg-12 col-md-12 col-sm-12\"><span><a id=\"nav-menu\" class=\"nav-menu\"></a></span>                <nav id=\"nav\" class=\"l-nav align-left\"><ul><li><span><a href=\"#\">Home</a></span></li><li><span><a href=\"services/domestic-residentialsoundproffing\">Services</a></span></li><li><span><a href=\"#\">Noisy Neighbours</a></span></li><li><span><a href=\"#\">Testimonials</a></span></li><li><span><a href=\"#\">Contact Us</a></span></li></ul></nav></div></div></div></div><section><div id=\"homepage-slider\" data-cycle-fx=\"scrollHorz\" data-cycle-timeout=\"0\" data-cycle-slides=\"div.slide\" class=\"cycle-slideshow\"><div class=\"cycle-prev\"><span><a href=\"#\"></a></span></div><span><!-- end cycle-prev--></span>        <div class=\"cycle-next\"><span><a href=\"#\"></a></span></div><span><!-- end cycle-next--></span>        <div id=\"slide-1\" class=\"slide\"><div class=\"container\"><header class=\"fancy-box fancy-red\"><div class=\"text-holder\"><h1><span>Transform Sound UK is a London based soundproofing specialist that provides soundproofing to homes and commercial buildings.</span></h1></div><!-- end text-holder--></header>                <div class=\"slide-contents\"><p><span>Sound proofing can provide a solution to noisy neighbours, noise pollution from busy roads or airports, setting up a home cinema or loud workshop/studio and keeping compliant with new building regulations.</span></p>                    <p><span><a href=\"#\" class=\"btn-banner\">Get a Quote</a></span></p></div><!-- end slide-contents--></div><!-- end container--></div><!-- end slide--><div id=\"slide-2\" class=\"slide\"><div class=\"container\"><header class=\"fancy-box fancy-yellow\"><span><!-- <h1>Transform Sound UK is a London based soundproofing specialist that provides soundproofing to homes and commercial buildings.</h1>--></span></header>                <div class=\"slide-contents\"><p><span>This is a small description. Keep it simple and to the point.</span></p>                    <p><span><a href=\"#\" class=\"btn\">See details</a></span></p></div><!-- end slide-contents--></div><!-- end container--></div><!-- end slide--><div id=\"slide-3\" class=\"slide\"><div class=\"container\"><header class=\"fancy-box fancy-yellow\"><h1><span>Project name</span></h1></header>                <div class=\"slide-contents\"><p><span>This is a small description. Keep it simple and to the point.</span></p>                    <p><span><a href=\"#\" class=\"btn\">See details</a></span></p></div><!-- end slide-contents--></div><!-- end container--></div><!-- end slide--></div><!-- end cycle-slideshow--><!-- Process Section--></section><div class=\"section-process ft\"><section><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 col-md-12 col-sm-12\"><div id=\"section-process-title\" class=\"section-process-title\"><h2><span>Our Process:</span></h2></div></div></div>            <div class=\"row\"><ul><li class=\"col-lg-3 col-md-3 col-sm-3\"><span><span class=\"proc-num\">1.</span></span>                        <div class=\"proc-text-container\"><h2>Request a quotation today</h2>                            <p>You can request a quote by calling us or filling in our contact form.</p></div></li>                    <li class=\"col-lg-3 col-md-3 col-sm-3\"><span class=\"proc-num\">2.</span>                        <div class=\"proc-text-container\"><h2>Agree on a good time for us to visit</h2>                            <p>Before we can provide an accurate quote we will need to visit your premises so we can decide on the most efficient and cost effective solution. When it comes to soundproofing, one size does not fit all, every job is unique.</p></div></li>                    <li class=\"col-lg-3 col-md-3 col-sm-3\"><span class=\"proc-num\">3.</span>                        <div class=\"proc-text-container\"><h2>Agree on a solution</h2>                            <p>We will be able to provide you with a quote for a cost effective solution and in many cases there will be several options ranging from most effective to most cost effective.</p></div></li>                    <li class=\"col-lg-3 col-md-3 col-sm-3\"><span class=\"proc-num\">4.</span>                        <div class=\"proc-text-container\"><h2>Installation</h2>                            <p>We will agree a date with you to install your new soundproofing. Our team are highly qualified and clean up after themselves. In no time at all you will be benefiting from one of our bespoke acoustic solutions.</p></div></li></ul></div></div></section><div class=\"work-done-for ft\"><section><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 col-md-12\"><div id=\"section-workfor-title\" class=\"section-workfor-title\"><h2>We have done work for:</h2></div></div></div>            <div class=\"row\"><ul><li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/arrivatrain-logo.png\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/beliveinchildren-logo.png\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/cardiff-logo.png\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/custardfactory-logo.png\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/lovehoney-logo.png\"></li></ul></div></div></section></div>                  <div class=\"section-testimonials ft\"><section><div class=\"container\"><h2>What our customers say:</h2>            <div class=\"row\"><div class=\"col-lg-12 col-md-12 col-sm-12\"><div id=\"section-testimonials\" class=\"section-testimonials-section-first\"><blockquote>&ldquo;Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi ut aliquip ex ea commo do conseq adat.&rdquo;</blockquote></div></div></div>            <div class=\"section-testimonials-section-second\"><div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-3\"><img src=\"img/head-quote.png\" alt=\"\"></div>                    <div class=\"col-lg-9 col-md-9 col-sm-9\"><h3>John Doe</h3>                        <p>Managing Director <span>Arriva Trains Wales</span></p></div><!-- end col-lg-9--></div>                \n                        <div class=\"nav-arrow-holder fr\"><a href=\"\"><i class=\"fa fa-chevron-left arrow-box\"></i></a>                            <a href=\"\"><i class=\"fa fa-chevron-right arrow-box\"></i></a></div><!-- end nav-arrow-holder--></div><!-- end section-testimonials-section-second--></div><!-- end container--></section></div><!-- Services: What service we provides Section--><div class=\"section-services ft\"><section><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 col-md-12\"><div id=\"section-services\"><h2>Services:</h2></div></div></div>            <div class=\"row\"><div class=\"col-lg-3\"><h3>Domestic / residential</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div>                <div class=\"col-lg-3\"><h3>Soundproofing walls</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div>                <div class=\"col-lg-3\"><h3>Soundproofing floors</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div>                <div class=\"col-lg-3\"><h3>Soundproofing Ceilings</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div></div>            <div class=\"row ft\"><div class=\"col-lg-4\"><h3>Clubs &amp; Pubs</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div>                <div class=\"col-lg-4\"><h3>Cinemas &amp; Recording Studios</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div>                <div class=\"col-lg-4\"><h3>Acoustic fence &ndash; motorways / roads / sports grounds / factories / industrial estates</h3>                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ea vero quisquam tenetur porro, rerum totam saepe, quaerat, deleniti repellat expedita praesentium dolor. Laborum non, et totam exercitationem porro voluptatibus!</p><a href=\"#\">Click here to find out more.</a></div></div></div></section></div>  <div class=\"section-reviews ft\"><section><div class=\"container\"><div class=\"row\"><ul><li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/checktrade-logo.png\" alt=\"\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/yell-logo.png\" alt=\"\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/ratedpeople-logo.png\" alt=\"\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/fmb2.png\" alt=\"\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/instituteifaciustic.png\" alt=\"\"></li>                    <li class=\"col-lg-2 col-md-2 col-sm-2\"><img src=\"img/logos/trustmark-logo.png\" alt=\"\"></li></ul></div></div></section></div></div><footer class=\"l-footer ft\"><section><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-6\"><p class=\"title-footer\">transform sound uk<span>DESIGN &middot; SUPPLY &middot; INSTALLATION</span></p><i class=\"footer-title-small\">Transform Sound UK &copy; 2014</i></div><!-- end col-lg-3--><div class=\"col-lg-2 col-md-2 col-sm-2\"><p class=\"title-footer\">Site Map</p>                    <ul><li>Home<!--<ul>\n<li><a href=\"#\">Checkatrade</a></li>\n<li><a href=\"#\">Yell</a></li>\n<li><a href=\"#\">Ratedpeople</a></li>\n<li><a href=\"#\">Testiminial</a></li>\n<li><a href=\"#\">FMB</a></li>\n<li><a href=\"#\">London based</a></li>\n</ul>--></li>                        <li>Services<!--<ul>\n<li><a href=\"#\">Domestic / residential soundproofing</a></li>\n<li><a href=\"#\">Soundproofing walls</a></li>\n<li><a href=\"#\">Soundproofing floors</a></li>\n<li><a href=\"#\">Soundproofing Ceilings</a></li>\n<li><a href=\"#\">Clubs &amp; Pubs</a></li>\n<li><a href=\"#\">Cinemas &amp; Recording studios</a></li>\n<li><a href=\"#\">Acoustic fence – motorways / roads / sports grounds / factories / industrial estates</a></li>\n</ul>--></li>                        <li>Noisy Neighbours</li>                        <li>Testimonials</li>                        <li>Contact us</li></ul></div><!-- end col-lg-2--><div class=\"col-lg-2 col-md-2 col-sm-2\"><p class=\"title-footer\">LEGAL</p>                    <ul><li>Term</li>                        <li>Privacy Policy</li></ul></div><!-- end col-lg-2--><div class=\"col-lg-2 col-md-2 col-sm-2\"><p class=\"title-footer\">CONTACT</p>                    <address><a href=\"nfo@transformsound.co.uk\">Transform Sound UK</a>.<br>                        67-68 Hatton Garden<br>                        London<br>                        EC1N 8JY<br>                        EC1N 8JY<br>                        Call: 020798900349</address></div><!-- end col-lg-2--></div><!-- end row--></div><!-- end container--></section></footer></body>");;return buf.join("");
}