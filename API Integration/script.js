// https://www.boredapi.com/api/activity => API integration
// node-fetch module ->  npm install node-fetch

import fetch from "node-fetch";

async function getActivities(){
    let url = 'https://www.boredapi.com/api/activity';
    try {
        let res = await fetch(url);
        console.log(res);
        return await res.json();
    }
    catch {
        console.log(error);
    }
}

async function renderActivities() {
    let activities = await getActivities();
    console.log(activities);
    return activities;
}

renderActivities();
