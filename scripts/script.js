console.log("hello world");

new fullpage('#fullpage', {
	//options here
    licenseKey: '',
    navigation:true,
    navigationTooltips: ['Intro', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '...'],
    showActiveTooltip: true,
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar: true,
    scrollingSpeed: 900,
    css3: true
});

//methods
fullpage_api.setAllowScrolling(true);
