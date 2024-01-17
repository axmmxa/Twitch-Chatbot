import tmi from "tmi.js"

const options0 = {
    options: {
        debug: true },
    connection: {
        cluster: "aws",
        reconnect: "true",
    },
    identity: {
		username: 'alextarifa0812',
		password: 'oauth:iqucb1681s3gn6s4g2ze253ladzzol'
	},
    channels: [ 'Vader' ]
}

const client0 = new tmi.client(options0)

export const MAIN_CLIENT = client0