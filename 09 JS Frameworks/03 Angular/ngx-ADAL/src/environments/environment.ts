export const environment = {
	production: false,
	config: {
		tenant: 'b99d5a3a-b043-473f-812b-bc2e9dc954e4',
		clientId: '2e1b23af-1e07-470c-ad97-966c4c5611ef', //=> Application ID in Azure
		cacheLocation: 'localStorage',
		endpoints: {
			graphApiUri: 'https://graph.microsoft.com',
			sharePointUri: 'https://vekadev.sharepoint.com' // Replace with your Tenant
		},
		returnUrl: 'http://localhost:4200'
	}
};
