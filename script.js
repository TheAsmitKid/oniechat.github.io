function signIn() {
	let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
	let form = document.createElement('form')
	form.setAttribute('method','GET')
	form.setAttribute('action',oauth2Endpoint)

	let params = {
		"client_id":process.env.CLIENT_ID,
		"redirect_uri":"https://oniechat.netlify.app/profile/",
		"response_type":"token",
		"scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
		"include_granted_scopes":'true',
		"state":"pass-through-value"
	}
	for(var p in params){
		let input = document.createElement('input')
		input.setAttribute("type","hidden")
		input.setAttribute("name",p)
		input.setAttribute("value",params[p])
		form.append(input)
	}
	document.body.appendChild(form)
	form.submit()
}
