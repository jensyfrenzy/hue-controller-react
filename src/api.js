// api token
const username = process.env.REACT_APP_HUE_TOKEN;

//hub ip address
const ip = process.env.REACT_APP_HUE_IP;
const baseUrl = `http://${ip}/api/${username}`;

// groups
export const roomsUrl = () => `${baseUrl}/groups`;
export const lightsUrl = () => `${baseUrl}/lights`;
export const roomActionUrl = (groupId) => `${baseUrl}/groups/${groupId}/action`;
