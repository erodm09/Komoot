const checkForText = async (url, text) => {
    try {
        const response = await fetch(url);
        const body = await response.text();

        if (body.includes(text)) {
            console.log(`Passed. "${text}" found on ${url}`);
        } else {
            console.error(`Failed. Did not find "${text}" on ${url}!`);
        }
    } catch (error) {
        console.error(`Error fetching or processing data: ${error}`);
    }
}
checkForText('https://www.komoot.com/team', 'Quality');
