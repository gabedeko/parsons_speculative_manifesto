console.log("hello world");

new fullpage('#fullpage', {
	//options here
    licenseKey: '',
    navigation:true,
    navigationTooltips: ['Intro', '1800s', '1890', '1946', '1950s-70s', '1970s-80s', '1980s-Present', 'Present', 'Takeaway', 'Work Cited'],
    showActiveTooltip: true,
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar: true,
    scrollingSpeed: 600,
    css3: true
});

//methods
fullpage_api.setAllowScrolling(true);
